from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from questions import views

urlpatterns = format_suffix_patterns([
    path("questions/<int:pk>/", views.QuestionDetail.as_view()),
    path("questions/", views.QuestionList.as_view()),
])
