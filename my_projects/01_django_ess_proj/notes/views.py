from django.shortcuts import render
from django.http import Http404, HttpResponseRedirect
from django.urls import reverse
from django.views.generic import ListView, DetailView, CreateView, UpdateView, DeleteView
from .models import Notes
from .forms import NotesForm
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.


class NotesDeleteView(LoginRequiredMixin, DeleteView):
    model = Notes
    success_url = '/smart/notes'
    template_name = 'notes/notes_delete.html'
    login_url = '/login'


class NotesUpdateView(LoginRequiredMixin, UpdateView):
    model = Notes
    # fields = ['title', 'content']
    success_url = '/smart/notes'
    template_name = 'notes/notes_update.html'
    form_class = NotesForm
    login_url = '/login'


class NotesCreateView(LoginRequiredMixin, CreateView):
    model = Notes
    # fields = ['title', 'content']
    success_url = '/smart/notes'
    template_name = 'notes/notes_create.html'
    form_class = NotesForm
    login_url = '/login'

    def form_valid(self, form):
        """If the form is valid, save the associated model."""
        self.object = form.save(commit=False)
        self.object.user = self.request.user
        self.object.save()
        return HttpResponseRedirect(self.get_success_url())


class NotesListView(LoginRequiredMixin, ListView):
    model = Notes
    context_object_name = 'notes'
    template_name = 'notes/notes_list.html'
    ordering = ['-created_at']
    paginate_by = 10
    login_url = '/login'

    def get_queryset(self):
        # return Notes.objects.filter(user=self.request.user).order_by('-created')
        return self.request.user.notes.all().order_by('-created_at')


# def list(request):
#     all_notes = Notes.objects.all()
#     return render(request, 'notes/notes_list.html', {'notes': all_notes})

class NotesDetailsView(LoginRequiredMixin, DetailView):
    model = Notes
    context_object_name = 'note'
    template_name = 'notes/notes_detail.html'
    login_url = '/login'

    # def get_object(self, queryset=None):
    #     try:
    #         return super().get_object(queryset)
    #     except Http404:
    #         return "404 - Sorry, the requested note does not exist!"


# def detail(request, pk):
#     try:
#         note = Notes.objects.get(pk=pk)
#     except Notes.DoesNotExist:
#         raise Http404('Note does not exist')
#     return render(request, 'notes/notes_detail.html', {'note': note})
