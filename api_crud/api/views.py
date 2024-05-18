from .models import EmpModel
from .serializers import EmpSerializer

from rest_framework import viewsets

# Create your views here.

class EmployeeView(viewsets.ModelViewSet):
    queryset = EmpModel.objects.all()
    serializer_class = EmpSerializer