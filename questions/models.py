from django.db import models
from random import randint


class QuestionQuerySet(models.QuerySet):
    def random_item(self):
        """
        Selects a single random question.
        """
        pks = self.values_list("pk", flat=True)
        rand_index = randint(0, len(pks) - 1)
        return self.get(pk=pks[rand_index])

    def create(self, **kwargs):
        """
        Ensures that answer members are set to 0 on creation
        """
        kwargs["false_answers"] = 0
        kwargs["true_answers"] = 0
        return super().create(**kwargs)

    def filter_by_params(self, params):
        """
        Filter questions given a dict of query params
        """
        q = self.all()
        if "category" in params:
            q = q.filter(category=Question.parse_category(params["category"]))
        if "difficulty" in params:
            q = q.filter(difficulty=Question.parse_difficulty(
                params["difficulty"]
            ))
        if "exclude_id" in params:
            q = q.exclude(pk=params["exclude_id"])
        return q


class ApprovedQuestionsQuerySet(QuestionQuerySet):
    def all(self):
        return super().all().filter(approved=True)


class PendingQuestionsQuerySet(QuestionQuerySet):
    def all(self):
        return super().all().filter(approved=False)

    def create(self, **kwargs):
        """
        Ensure that question submissions are not approved on creation
        """
        kwargs["approved"] = False
        print("hellalskdjfalksdf")
        return super().create(**kwargs)


class Question(models.Model):
    FRASIER = "F"
    NILES = "N"
    MARTIN = "M"
    DAPHNE = "D"
    ROZ = "R"
    EDDIE = "E"
    CATEGORIES = (
        (FRASIER, "Frasier"),
        (NILES, "Niles"),
        (MARTIN, "Martin"),
        (DAPHNE, "Daphne"),
        (ROZ, "Roz"),
        (EDDIE, "Eddie"),
    )
    EASY = "E"
    MEDIUM = "M"
    HARD = "H"
    DIFFICULTIES = (
        (EASY, "Easy"),
        (MEDIUM, "Medium"),
        (HARD, "Hard"),
    )
    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    category = models.CharField(
        max_length=1,
        choices=CATEGORIES,
        default=FRASIER
    )
    body = models.CharField(max_length=255, blank=True, default="")
    answer = models.CharField(max_length=255, blank=True, default="")
    difficulty = models.CharField(
        max_length=1,
        choices=DIFFICULTIES,
        default=EASY
    )
    false_answers = models.IntegerField(default=0)
    true_answers = models.IntegerField(default=0)
    approved = models.BooleanField(default=False)

    objects = QuestionQuerySet.as_manager()
    approved_questions = ApprovedQuestionsQuerySet.as_manager()
    pending_questions = PendingQuestionsQuerySet.as_manager()

    class Meta:
        ordering = ("created",)
