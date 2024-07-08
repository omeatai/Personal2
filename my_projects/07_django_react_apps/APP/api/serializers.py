import re
from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Package, Booking

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', "first_name", "last_name")

class PackageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Package
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    STREET_ADDRESS_ERROR = 'Street address must be in the format "11 Abc St."'

    class Meta:
        model = Booking
        fields = '__all__'

    def validate_street_address(self, value):
        regexp = re.compile(r'\d+ \w+ \w+')
        if regexp.search(value):
            return value
        raise serializers.ValidationError(
            self.STREET_ADDRESS_ERROR
        )
