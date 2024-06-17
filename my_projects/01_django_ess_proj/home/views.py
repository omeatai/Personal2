from django.shortcuts import render, redirect
from django.http import HttpResponse
from datetime import datetime
from django.contrib.auth.decorators import login_required
from django.views.generic import TemplateView
from django.views.generic.edit import CreateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.auth import authenticate, logout, login
from django.contrib.auth.forms import UserCreationForm


class UserSignupForm(UserCreationForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def save(self, commit=True):
        user = super().save(commit=False)
        user.is_staff = False
        user.is_superuser = False
        if commit:
            user.save()
        return user


class SignupView(CreateView):
    form_class = UserSignupForm  # UserCreationForm
    template_name = 'home/register.html'
    success_url = '/smart/notes'
    # model = User

    def get(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect('list')
        return super().get(request, *args, **kwargs)


class LogoutInterfaceView(LogoutView):
    template_name = 'home/logout.html'
    http_method_names = ['get', 'post', 'options']
    next_page = 'login'

    def dispatch(self, request, *args, **kwargs):
        # return super().dispatch(request, *args, **kwargs)
        # Redirect to a specific URL after logout
        logout(request)
        return redirect('login')


class LoginInterfaceView(LoginView):
    template_name = 'home/login.html'
    # next_page = 'list'


class HomeView(TemplateView):
    template_name = 'home/welcome.html'
    extra_context = {'name': 'James Doe', 'date': datetime.now()}


class AuthorizedView(LoginRequiredMixin, TemplateView):
    template_name = 'home/authorized.html'
    extra_context = {}
    login_url = 'login'
