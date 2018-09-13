from rest_framework import serializers
from questions.models import Question


class QuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = (
            "id", "created", "last_modified", "category", "body", "answer",
            "total_answers", "true_answers", "difficulty", "approved"
        )
        extra_kwargs = {
            "category": {"required": True}, "body": {"required": True},
            "answer": {"required": True}, "difficulty": {"required": True}
        }


class QuestionSubmissionSerializer(QuestionSerializer):
    def create(self, validated_data):
        return Question.objects.create(**validated_data)

    def validate_body(self, value):
        if value.strip() == "":
            raise serializers.ValidationError(
                "Question body cannot be an empty string."
            )
        return value

    def validate_answer(self, value):
        if value.strip() == "":
            raise serializers.ValidationError(
                "Question answer cannot be blank."
            )
        return value

    def validate_category(self, value):
        if value.strip() == "":
            raise serializers.ValidationError(
                "Question category cannot be blank."
            )
        if value not in [el[0] for el in Question.CATEGORIES]:
            raise serializers.ValidationError(
                "Question category is not an accepted value"
            )
        return value

    def validate_difficulty(self, value):
        if value not in [el[0] for el in Question.DIFFICULTIES]:
            raise serializers.ValidationError(
                "Question difficutly is not an accepted value."
            )

        return value



class QuestionReadSerializer(QuestionSerializer):
    category = serializers.CharField(source="get_category_display")
    difficulty = serializers.CharField(source="get_difficulty_display")
