from rest_framework import serializers
from questions.models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = (
            "id", "created", "last_modified", "category", "body", "answer",
            "total_answers", "true_answers", "difficulty", "approved"
        )


class QuestionSubmissionSerializer(QuestionSerializer):
    def create(self, validated_data):
        return Question.objects.create(**validated_data)


class QuestionReadSerializer(QuestionSerializer):
    category = serializers.CharField(source="get_category_display")
    difficulty = serializers.CharField(source="get_difficulty_display")
