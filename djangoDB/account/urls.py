from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name = 'index'),
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
    
    path('save_sentence/', views.save_sentence, name = 'save_sentence'),
    path('history/', views.history, name = 'history'),
    path('success/', views.success, name = 'success'),
    
    path('favicon.ico/', views.favicon_redirect_view, name = 'favicon'),
    
    
]