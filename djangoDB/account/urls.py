from django.urls import path
from . import views

urlpatterns = [
    path('view_database/', views.view_database, name = 'view_database'),
    path('register/', views.register, name = 'register'),
    path('homepage/', views.homepage, name = 'homepage'),
    path('form/', views.form, name = 'form'),
    path('signup/', views.signup, name = 'signup'),
    path('login/', views.login, name = 'login')
]