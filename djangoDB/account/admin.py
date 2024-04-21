from django.contrib import admin
from .models import Prompt, DietPrompt, DietOutput, WorkoutOutput

# Register Models Here
class PromptAdmin(admin.ModelAdmin):
    list_display = ['sentence', 'user', 'different_sentence']  # Display these fields in the admin list view

    def save_model(self, request, obj, form, change):
        """Override save_model to automatically set the user field."""
        if not obj.pk:  # If the object is being created for the first time
            obj.user = request.user
        obj.save()

admin.site.register(Prompt)
admin.site.register(DietPrompt)
admin.site.register(DietOutput)
admin.site.register(WorkoutOutput)

