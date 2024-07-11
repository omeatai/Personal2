from rest_framework import serializers
from .models import User as Member


class MemberSerializer(serializers.ModelSerializer):

    password_confirm = serializers.CharField(
        style={'input_type': 'password'}, write_only=True)

    class Meta:
        model = Member
        fields = ['id', 'first_name', 'last_name',
                  'email', 'password', 'password_confirm']  # '__all__'
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password')
        password_confirm = validated_data.pop('password_confirm')

        if password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        member = Member.objects.create(**validated_data)
        # member.set_password(password) # Need to hash Password
        member.save()
        return member

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        password_confirm = validated_data.pop('password_confirm', None)

        if password and password_confirm and password != password_confirm:
            raise serializers.ValidationError("Passwords do not match")

        for key, value in validated_data.items():
            setattr(instance, key, value)

        if password:
            instance.set_password(password)

        instance.save()
        return instance
