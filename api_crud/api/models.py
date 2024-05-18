from django.db import models

# Create your models here.

class EmpModel(models.Model):
    eno=models.IntegerField()
    ename=models.CharField(max_length=120)
    edesignation=models.CharField(max_length=120)

    def __str__(self):
        return self.ename
    
