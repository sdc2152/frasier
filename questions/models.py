from django.db import models


class QuestionManager(models.Manager):
    def create(self, **kwargs):
        """
        Ensures that answer members are set to 0 on creation
        """
        kwargs["false_answers"] = 0
        kwargs["true_answers"] = 0
        return super(**kwargs)


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

    objects = QuestionManager()

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

    class Meta:
        ordering = ("created",)
