from django.core.management.base import BaseCommand
from questions.models import Question


class Command(BaseCommand):
    """
    will update all difficulties to reflect percent of correct answers
    """
    def handle(self, *args, **options):
        num_changes = Question.correct_difficulties()
        self.stdout.write(self.style.SUCCESS(
            "Successfully updated {} items".format(num_changes)
        ))
