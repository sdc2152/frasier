from questions.models import Question
from questions.serializers import QuestionSerializer
from rest_framework import generics


class QuestionList(generics.ListCreateAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer


class QuestionRandom(generics.RetrieveAPIView):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def get_queryset(self):
        q = Question.objects.all()
        params = self.request.GET
        if "category" in params:
            q = q.filter(category=Question.parse_category(params["category"]))
        if "exclude_id" in params:
            q = q.exclude(pk=params["exclude_id"])
        return q

    def get_object(self):
        return self.get_queryset().random_item()
