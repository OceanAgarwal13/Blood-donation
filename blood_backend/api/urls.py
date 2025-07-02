from django.urls import path
from .views import register_user, all_users, login_user, create_emergency_request, emergency_login, donor_health_form, get_centers, book_appointment, register_camp, submit_contact_message, all_emergency_users, suggest_donors, emergency_appointment, send_otp, reset_password_with_otp, send_emergency_otp, reset_emergency_password_with_otp

urlpatterns = [
    path('login/', login_user, name='login'),
    path('register/', register_user, name='register'),
    # path('suggestions/', suggestion_history, name='suggestion-history'),
    path('users/', all_users, name='all_users'),
    path('emergency-register/', create_emergency_request, name='emergency-register'),
    path('emergency-login/', emergency_login, name='emergency-login'),
    path('donor-health-form/', donor_health_form, name='donor-health-form'),
    path('centers/', get_centers, name='centers'),
    path('book-appointment/', book_appointment, name='book'),
    path('emergency-appointment/', emergency_appointment, name='emergency-appointment'),
    path('register-camp/', register_camp, name='register-camp'),
    # path('chat/', chatbot_response, name='chat_response'),
    path('contact/', submit_contact_message, name='submit_contact'),
    path('emergency-users/', all_emergency_users, name='all-emergency-users'),
    path('suggestions/<int:receiver_id>/', suggest_donors, name='suggest_donors'),
    path('send-otp/', send_otp, name='send-otp'),  # donor
    path('reset-password/', reset_password_with_otp, name='reset-password'),  # donor

    path('send-emergency-otp/', send_emergency_otp, name='send-emergency-otp'),  # emergency
    path('reset-emergency-password/', reset_emergency_password_with_otp, name='reset-emergency-password'),  # emergency
]
