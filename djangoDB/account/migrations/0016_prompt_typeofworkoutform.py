# Generated by Django 5.0.3 on 2024-04-21 22:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0015_workoutoutput'),
    ]

    operations = [
        migrations.AddField(
            model_name='prompt',
            name='typeofworkoutform',
            field=models.CharField(default=53, max_length=50),
            preserve_default=False,
        ),
    ]