from rest_framework import serializers
from questions.models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = (
            "id", "created", "last_modified", "category", "body", "answer",
            "false_answers", "true_answers"
        )

    def create(self, validated_data):
        print(validated_data)
        return Question.object.create(**validated_data)
