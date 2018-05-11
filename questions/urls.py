from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from questions import views

urlpatterns = format_suffix_patterns([
    path("questions/<int:pk>/increment/", views.increment_answer),
    path("questions/random/", views.QuestionRandom.as_view()),
    path("questions/submit/", views.QuestionSubmit.as_view()),
    path("questions/", views.QuestionList.as_view()),
])
