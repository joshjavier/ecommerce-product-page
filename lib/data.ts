import { User } from '@/interfaces'

export function getCurrentUser(): User {
  return {
    name: 'John Doe',
    image: '/images/image-avatar.png',
    cart: { items: [] },
  }
}
