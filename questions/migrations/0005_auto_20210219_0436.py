# Generated by Django 3.1.6 on 2021-02-18 23:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0004_question_correct'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='correct',
        ),
        migrations.AddField(
            model_name='answer',
            name='correct',
            field=models.IntegerField(default=0),
        ),
    ]
