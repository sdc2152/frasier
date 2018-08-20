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
        # TODO: ensure that and initial save will also set correct initial
        # values
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
        if "difficulty" in params and params["difficulty"] != "0":
            q = q.filter(difficulty=params["difficulty"])
        if "exclude_id" in params:
            q = q.exclude(pk=params["exclude_id"])
        return q

    def handle_sort_by(self, params):
        """
        order return values based on params
        """
        sort_by = int(params.get("sort", 0))
        if sort_by == 1:
            return self.order_by("-body")
        elif sort_by == 2:
            return self.order_by("created")
        elif sort_by == 3:
            return self.order_by("-created")
        elif sort_by == 4:
            return self.order_by("difficulty")
        elif sort_by == 5:
            return self.order_by("-difficulty")
        else:
            return self.order_by("body")

    def approved_questions(self):
        return self.filter(approved=True)

    def pending_questions(self):
        return self.filter(approved=False)


class Question(models.Model):
    # constants
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
    EASY = 1
    MEDIUM = 2
    HARD = 3
    DIFFICULTIES = (
        (EASY, "Easy"),
        (MEDIUM, "Medium"),
        (HARD, "Hard"),
    )
    HARD_PERCENT = .2
    EASY_PERCENT = .7
    # number of total_answers before starting to adjust difficulty base on
    # percent of correct answers
    MIN_TOTAL_ANS_FOR_CORRECTION = 10

    # fields
    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    category = models.CharField(
        max_length=1,
        choices=CATEGORIES,
        default=FRASIER
    )
    body = models.CharField(max_length=255, blank=True, default="")
    answer = models.CharField(max_length=255, blank=True, default="")
    difficulty = models.IntegerField(choices=DIFFICULTIES, default=EASY)
    true_answers = models.IntegerField(default=0)
    total_answers = models.IntegerField(default=0)
    approved = models.BooleanField(default=False)

    objects = QuestionQuerySet.as_manager()

    class Meta:
        ordering = ("created", "difficulty", "category")

    @property
    def percent_correct(self):
        if self.total_answers == 0:
            return 0.0
        return self.true_answers / self.total_answers

    def __str__(self):
        return "Question: {} -- percent correct: {} -- difficulty: {}".format(
            self.body, self.percent_correct, self.difficulty
        )

    @classmethod
    def correct_easy(cls):
        """
        Changes questions that are incorrectly marked Medium or Hard to Easy
        """
        return cls.objects.approved_questions().exclude(
            difficulty=cls.EASY,
        ).filter(
            total_answers__gt=cls.MIN_TOTAL_ANS_FOR_CORRECTION,
            true_answers__gte=F("total_answers") * cls.EASY_PERCENT
        ).update(difficulty=cls.EASY)

    @classmethod
    def correct_medium(cls):
        """
        Changes questions that are incorrectly marked Easy or Hard to Medium
        """
        return cls.objects.approved_questions().exclude(
            difficulty=cls.MEDIUM,
        ).filter(
            total_answers__gt=cls.MIN_TOTAL_ANS_FOR_CORRECTION,
            true_answers__lt=F("total_answers") * cls.EASY_PERCENT,
            true_answers__gte=F("total_answers") * cls.HARD_PERCENT
        ).update(difficulty=cls.MEDIUM)

    @classmethod
    def correct_hard(cls):
        """
        Changes questions that are incorrectly marked Easy or Medium to Hard
        """
        return cls.objects.approved_questions().exclude(
            difficulty=cls.HARD
        ).filter(
            total_answers__gt=cls.MIN_TOTAL_ANS_FOR_CORRECTION,
            true_answers__lt=F("total_answers") * cls.HARD_PERCENT
        ).update(difficulty=cls.HARD)

    @classmethod
    def correct_difficulties(cls):
        """
        corrects all incorrectly marked difficulties
        """
        return cls.correct_easy() + cls.correct_medium() + cls.correct_hard()
