# Generated by Django 5.0.3 on 2024-04-20 19:50

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0013_alter_dietprompt_foodallergies'),
    ]

    operations = [
        migrations.CreateModel(
            name='DietOutput',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('diet_output', models.TextField()),
                ('diet_prompt', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='account.dietprompt')),
            ],
        ),
    ]
