from django.urls import path
from . import views

urlpatterns = [
    path('homepage/', views.homepage, name = 'homepage'),
    path('form/', views.form, name = 'form'),
    path('signup/', views.signup, name = 'signup'),
    path('login/', views.login_user, name = 'login'),
    path('about/', views.about, name = 'about'),
    path('logout/', views.logout_user, name = 'logout'),
    path('workout/', views.workout, name = 'workout'),
    path('music/', views.music, name = 'music'),
    path('community/', views.community, name = 'community'),
    path('checkin/', views.checkin, name = 'checkin'),
    path('diet/', views.diet, name = 'diet'),
    path('dietform/', views.dietform, name = 'dietform'),
]