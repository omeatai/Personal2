import os.path
from django.conf import settings

# from django.test import TestCase

from rest_framework.test import APITestCase

from store.models import Product


class ProductCreateTestCase(APITestCase):
    def test_create_product(self):
        # Get the Total number of created Products
        initial_product_count = Product.objects.count()

        # Create a new Product
        product_attrs = {
            'name': 'New Product',
            'description': 'Awesome product',
            'price': '123.45',
        }

        # Send a POST request to the ProductCreate API endpoint
        response = self.client.post('/api/v1/products/new', product_attrs)
        if response.status_code != 201:
            print(response.data)

        # Check that the Product was created successfully
        self.assertEqual(
            Product.objects.count(),
            initial_product_count + 1,
        )

        # Check that the Product was created with the correct attributes
        for attr, expected_value in product_attrs.items():
            self.assertEqual(response.data[attr], expected_value)

        # Check that the Product was created with the correct Custom Field attributes for is_on_sale and current_price
        self.assertEqual(response.data['is_on_sale'], False)
        self.assertEqual(
            response.data['current_price'],
            float(product_attrs['price']),
        )


class ProductDestroyTestCase(APITestCase):
    def test_delete_product(self):
        # Get the Total number of created Products
        initial_product_count = Product.objects.count()

        # Create a new Product
        product_attrs = {
            'name': 'New Product',
            'description': 'Awesome product',
            'price': '123.45',
        }
        # Send a POST request to the ProductCreate API endpoint
        response = self.client.post('/api/v1/products/new', product_attrs)
        if response.status_code != 201:
            print(response.data)

        # Get the first created Product
        product_id = Product.objects.first().id
        # print(product_id)

        # Send a DELETE request to the ProductDestroyAPI endpoint
        self.client.delete('/api/v1/products/{}/destroy'.format(product_id))

        # Check that the Product was deleted successfully
        self.assertEqual(
            Product.objects.count(),
            initial_product_count,
        )

        # Check that the Product was deleted from the database
        self.assertRaises(
            Product.DoesNotExist,
            Product.objects.get, id=product_id,
        )


class ProductListTestCase(APITestCase):
    def test_list_products(self):
        products_count = Product.objects.count()
        response = self.client.get('/api/v1/products/')
        self.assertIsNone(response.data['next'])
        self.assertIsNone(response.data['previous'])
        self.assertEqual(response.data['count'], products_count)
        self.assertEqual(len(response.data['results']), products_count)


class ProductUpdateTestCase(APITestCase):
    def test_update_product(self):
        # Create a new Product
        product_attrs = {
            'name': 'New Product',
            'description': 'Awesome product',
            'price': '123.45',
        }
        # Send a POST request to the ProductCreate API endpoint
        response = self.client.post('/api/v1/products/new', product_attrs)
        if response.status_code != 201:
            print(response.data)

        product = Product.objects.first()
        response = self.client.patch(
            '/api/v1/products/{}/'.format(product.id),
            {
                'name': 'New Product',
                'description': 'Awesome product',
                'price': 123.45,
            },
            format='json',
        )
        updated = Product.objects.get(id=product.id)
        self.assertEqual(updated.name, 'New Product')

   def test_upload_product_photo(self):
        product = Product.objects.first()
        original_photo = product.photo

        photo_path = os.path.join(
            settings.MEDIA_ROOT, 'products', 'vitamin-iron.jpg')

        with open(photo_path, 'rb') as photo_data:
            response = self.client.patch('/api/v1/products/{}/'.format(product.id), {
                'photo': photo_data,
            }, format='multipart')

        self.assertEqual(response.status_code, 200)
        self.assertNotEqual(response.data['photo'], original_photo)

        try:
            updated = Product.objects.get(id=product.id)
            expected_photo = os.path.join(
                settings.MEDIA_ROOT, 'products', 'vitamin-iron')
            self.assertTrue(updated.photo.path.startswith(expected_photo))
        finally:
            os.remove(updated.photo.path)

