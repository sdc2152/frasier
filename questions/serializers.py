from rest_framework import serializers
from questions.models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = (
            "id", "created", "last_modified", "category", "body", "answer",
            "false_answers", "true_answers", "difficulty", "approved"
        )


class QuestionReadSerializer(QuestionSerializer):
    category = serializers.CharField(source="get_category_display")
    difficulty = serializers.CharField(source="get_difficulty_display")
