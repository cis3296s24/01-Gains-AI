from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.say_hello, name = 'say_hello'),
    path('view_database/', views.view_database, name = 'view_database'),
    path('register/', views.register, name = 'register')
]