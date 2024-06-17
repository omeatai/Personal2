from django import forms

from .models import Notes


class NotesForm(forms.ModelForm):
    class Meta:
        model = Notes
        fields = ['title', 'content']
        labels = {
            'title': 'Title',
            'content': 'Content',
        }
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form-control'}),
            'content': forms.Textarea(attrs={'class': 'form-control'}),
        }

    def clean_title(self):
        title = self.cleaned_data.get('title')
        if title == 'django':
            raise forms.ValidationError('Title should not be django')
        if len(title) < 5:
            raise forms.ValidationError(
                'Title should be at least 5 characters')
        if 'django' in title or 'Django' in title:
            raise forms.ValidationError(
                'Title should not contain Django')
        return title
