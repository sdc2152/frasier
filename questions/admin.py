from django.contrib import admin
from .models import Question


def make_approved(modeladmin, request, queryset):
    return queryset.update(approved=True)


def make_unapproved(modeladmin, request, queryset):
    return queryset.update(approved=False)


make_approved.short_description = "Approve selected questions"
make_unapproved.short_description = "Unapprove selected questions"


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    date_hierarchy = "created"
    list_display = ("body", "category", "difficulty",)
    list_filter = ("approved",)
    ordering = ("-created",)
    actions = (make_approved, make_unapproved,)
