from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name = 'index'),
    path('signup/', views.signup, name = 'signup'),
    path('login/', views.login_user, name = 'login'),
    path('about/', views.about, name = 'about'),
    path('logout/', views.logout_user, name = 'logout'),
    path('music/', views.music, name = 'music'),
    path('community/', views.community, name = 'community'),
    path('checkin/', views.checkin, name = 'checkin'),
    
    path('diet/', views.diet, name = 'diet'),
    path('dietform/', views.dietform, name = 'dietform'),
    path('save_sentence_diet/', views.save_sentence_diet, name = 'save_sentence_diet'),
    path('save_output_diet/', views.save_output_diet, name = 'save_output_diet'),
    path('diet_detail/<int:pk>/', views.diet_detail, name='diet_detail'),
     
    path('workout/', views.workout, name = 'workout'),
    path('form/', views.form, name = 'form'),
    path('save_sentence/', views.save_sentence, name = 'save_sentence'),
    path('save_output_workout/', views.save_output_workout, name = 'save_output_workout'),
    path('workout_detail/<int:pk>/', views.workout_detail, name = 'workout_detail'),
    
    path('history/', views.history, name = 'history'),

    path('success/', views.success, name = 'success'),
    path('favicon.ico/', views.favicon_redirect_view, name = 'favicon'),
    path('my_view/', views.my_view, name='my_view'),
    path('my_view_request/', views.my_view_request, name='my_view_request'),
    
    
    
    
]