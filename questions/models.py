from django.db import models
from random import randint

from django.db.models import F


class QuestionQuerySet(models.QuerySet):
    def random_item(self):
        """
        Selects a single random question.
        """
        # TODO: change so case of no results is handled
        pks = self.values_list("pk", flat=True)
        rand_index = randint(0, len(pks) - 1)
        return self.get(pk=pks[rand_index])

    def create(self, **kwargs):
        """
        Ensures that answer members are set to 0 on creation
        """
        kwargs["total_answers"] = 0
        kwargs["true_answers"] = 0
        return super().create(**kwargs)

    def filter_by_params(self, params):
        """
        Filter questions given a dict of query params
        """
        q = self.all()
        if "category" in params and params["category"] != "Any":
            q = q.filter(category=params["category"][0])
        if "difficulty" in params and params["difficulty"] != "Any":
            q = q.filter(difficulty=params["difficulty"][0])
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
    HARD_PERCENT = .2
    EASY_PERCENT = .7

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
    true_answers = models.IntegerField(default=0)
    total_answers = models.IntegerField(default=0)
    approved = models.BooleanField(default=False)

    objects = QuestionQuerySet.as_manager()
    approved_questions = ApprovedQuestionsQuerySet.as_manager()
    pending_questions = PendingQuestionsQuerySet.as_manager()

    class Meta:
        ordering = ("created",)

    def __str__(self):
        return "Question: {} -- correct: {} total: {}".format(
            self.body, self.true_answers, self.total_answers
        )

    @classmethod
    def easy_correct(cls):
        incorrect_easy = cls.approved_questions.filter(
            total_answers__gt=10, difficulty=Question.EASY,
            true_answers__lt=F("total_answers") * cls.EASY_PERCENT
        )
        # change questions to medium
        incorrect_easy.filter(
            true_answers__gte=F("total_answers") * cls.HARD_PERCENT
        ).update(difficulty=cls.MEDIUM)
        # change questions to hard
        incorrect_easy.filter(
            true_answers__lt=F("total_answers") * cls.HARD_PERCENT
        ).update(difficulty=cls.HARD)

    @classmethod
    def medium_correct(cls):
        medium_question = cls.approved_questions.filter(
            total_answers__gt=10, difficulty=Question.MEDIUM
        )
        # change questions to hard
        medium_question.filter(
            true_answers__lt=F("total_answers") * cls.HARD_PERCENT
        ).update(difficulty=cls.HARD)
        # change questions to easy
        medium_question.filter(
            true_answers__gte=F("total_answers") * cls.EASY_PERCENT
        ).update(difficulty=cls.EASY)

    # TODO: implement hard_correct and test to make sure they are selecting
    # right entries

    @classmethod
    def correct_question_difficulty(cls):
        cls.easy_correct()
        cls.medium_correct()
