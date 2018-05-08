from questions.models import Question
from questions.serializers import QuestionSerializer, QuestionReadSerializer
from rest_framework import generics


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionDetail(generics.UpdateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    # TODO: handle request.data.get("action", "")
    # increment or decrement based on action
    def partial_update(self, request, *args, **kwargs):
        return super().partial_update(request, *args, **kwargs)


class QuestionRandom(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionReadSerializer

    def get_queryset(self):
        return Question.objects.filter_by_params(self.request.GET)

    def get_object(self):
        return self.get_queryset().random_item()
