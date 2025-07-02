from django.contrib import admin
from .models import UserProfile, SuggestedDonor, EmergencyRequest, HealthEligibility, BloodCenter, Appointment, CampRegistration, ContactMessage, EmergencyAppointment

admin.site.register(UserProfile)
admin.site.register(SuggestedDonor)
admin.site.register(EmergencyRequest)
admin.site.register(HealthEligibility)
admin.site.register(BloodCenter)
admin.site.register(Appointment)
admin.site.register(CampRegistration)
admin.site.register(ContactMessage)
admin.site.register(EmergencyAppointment)
