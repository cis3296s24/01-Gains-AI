# Generated by Django 5.0.3 on 2024-04-01 21:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='member',
            old_name='passwd',
            new_name='password',
        ),
    ]