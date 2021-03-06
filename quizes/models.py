from django.db import models



class Quiz(models.Model):
    name = models.CharField(max_length=120)
    topic = models.CharField(max_length=120)
    number_of_questions = models.IntegerField()

    required_score_to_pass = models.IntegerField(help_text="required score in %")


    def __str__(self):
        return f"{self.name}-{self.topic}"

    def get_questions(self):
        return self.question_set.all()

    class Meta:
        verbose_name_plural = 'Quizes'
