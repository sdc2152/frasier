from questions.models import Question
from questions.serializers import QuestionSerializer, QuestionReadSerializer

from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework.response import Response

from django.db.models import F
from django.shortcuts import get_object_or_404


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionRandom(generics.RetrieveAPIView):
    queryset = Question.approved_questions.all()
    serializer_class = QuestionReadSerializer

    def get_queryset(self):
        return Question.approved_questions.filter_by_params(self.request.GET)

    def get_object(self):
        return self.get_queryset().random_item()


@api_view(["PATCH"])
def increment_answer(request, pk):
    answer = request.data.get("answer", None)
    if answer:
        question = get_object_or_404(Question.approved_questions, pk=pk)
        setattr(question, answer, F(answer) + 1)
        question.save()
        return Response()
    return Response(status=400)
