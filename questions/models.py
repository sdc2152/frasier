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

    objects = QuestionQuerySet.as_manager()

    created = models.DateTimeField(auto_now_add=True)
    last_modified = models.DateTimeField(auto_now=True)
    category = models.CharField(
        max_length=1,
        choices=CATEGORIES,
        default=FRASIER
    )
    body = models.CharField(max_length=255, blank=True, default="")
    answer = models.CharField(max_length=255, blank=True, default="")
    false_answers = models.IntegerField(default=0)
    true_answers = models.IntegerField(default=0)

    @property
    def total_answers(self):
        return self.false_answers + self.true_answers

    @classmethod
    def parse_category(cls, category):
        for cat in cls.CATEGORIES:
            if cat[1] == category:
                return cat[0]

    class Meta:
        ordering = ("created",)
