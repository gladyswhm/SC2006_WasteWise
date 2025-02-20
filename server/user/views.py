import os

from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status, viewsets
from django.contrib.auth import authenticate
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model

from .models import UserProfile
from .serializers import RegisterSerializer

User = get_user_model()


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    @action(detail=False, methods=['post'], url_path='register')
    def register(self, request):
        serializer = RegisterSerializer(data=request.data)
        user_test = User.objects.filter(email=request.data['email']).first()
        if user_test:
            print(Response({'error': 'This Email is already taken.'}, status=status.HTTP_400_BAD_REQUEST))
            return Response({'error': 'This Email is already taken.'}, status=status.HTTP_400_BAD_REQUEST)
        if serializer.is_valid():
            print(f"The data retrieved is{request.data['role']}")
            print(f"The data retrieved is{request.data['email']}")
            userCreated = serializer.save()  #
            print(request.data)


            profile, created = UserProfile.objects.get_or_create(user=userCreated)
            profile.role = request.data['role']
            profile.collector_id = None if request.data['collector_id'] is '' else request.data['collector_id']
            profile.save()
            print(f"table {profile.role} is created??{created}")
            return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], url_path='login')
    def login(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        if not email or not password:
            return Response({'error': 'Email and password are required.'}, status=status.HTTP_400_BAD_REQUEST)

        # Use email as username
        user = authenticate(request, username=email, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            profile, created = UserProfile.objects.get_or_create(user=user)
            return Response({'token': token.key, 'email': user.email, 'user_id': user.id, 'role': user.profile.role,
                             "collector_id": user.profile.collector_id}, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

    # def get_object(self):
    #     username = self.kwargs.get("pk")  # Get username
    #     return get_object_or_404(User, username=username)  # Find object by username
    @action(detail=True, methods=['put'], url_path='updateall')
    def update_user(self, request, pk=None):
        user = self.get_object()
        serializer = self.get_serializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User updated successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['patch'], url_path='update')
    def partial_update_user(self, request, pk=None):
        user = self.get_object()
        print(print(f"On testing partial Update: {request.data}"))
        serializer = self.get_serializer(user, data=request.data, partial=True)

        newRole = request.data.get('role')
        newCollectorID = request.data.get('collector_id')
        if not newRole is None:
            user.profile.role = newRole
            user.profile.save()
        if not newCollectorID is None:
            user.profile.collector_id = newCollectorID
            user.profile.save()
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User partially updated successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=True, methods=['delete'], url_path='delete')
    def delete_user(self, request, pk=None):
        user = self.get_object()
        user.delete()
        return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
