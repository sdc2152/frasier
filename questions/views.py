from questions.models import Question
from questions.serializers import (
    QuestionSerializer,
    QuestionReadSerializer,
    QuestionSubmissionSerializer
)

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.db.models import F


class QuestionList(generics.ListAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_queryset(self):
        return Question.objects.approved_questions()

    def list(self, request):
        queryset = self.get_queryset().handle_sort_by(request.GET)
        serializer = QuestionSerializer(queryset, many=True)
        return Response(serializer.data)


class QuestionSubmit(generics.CreateAPIView):
    serializer_class = QuestionSubmissionSerializer


class QuestionRandom(generics.RetrieveAPIView):
    queryset = Question.objects.approved_questions()
    serializer_class = QuestionReadSerializer

    def get_object(self):
        # TODO: change so case of none matching is handled
        return self.get_queryset().filter_by_params(
            self.request.GET
        ).random_item()


@api_view(["PATCH"])
def increment_answer(request, pk):
    answer = request.data.get("answer", None)
    if answer:
        question = Question.objects.approved_questions().filter(pk=pk)
        question.update(total_answers=F("total_answers") + 1)
        if answer == "true_answers":
            question.update(true_answers=F("true_answers") + 1)
        return Response()
    return Response(status=400)
