# Generated by Django 3.1.6 on 2021-02-17 22:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0002_auto_20210218_0356'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='answer',
            name='correct',
        ),
    ]
