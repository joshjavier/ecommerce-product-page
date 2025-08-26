import { Product, User } from '@/interfaces'

export function getCurrentUser(): User {
  return {
    name: 'John Doe',
    image: '/images/image-avatar.png',
    cart: { items: [] },
  }
}

export function getProductDetails(): Product {
  return {
    name: 'Fall Limited Edition Sneakers',
    company: 'Sneaker Company',
    description:
      'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    price: 125,
    discount: 0.5,
    originalPrice: 250,
    images: [
      {
        url: '/images/image-product-1.jpg',
        thumbnailUrl: '/images/image-product-1-thumbnail.jpg',
      },
      {
        url: '/images/image-product-2.jpg',
        thumbnailUrl: '/images/image-product-2-thumbnail.jpg',
      },
      {
        url: '/images/image-product-3.jpg',
        thumbnailUrl: '/images/image-product-3-thumbnail.jpg',
      },
      {
        url: '/images/image-product-4.jpg',
        thumbnailUrl: '/images/image-product-4-thumbnail.jpg',
      },
    ],
  }
}
