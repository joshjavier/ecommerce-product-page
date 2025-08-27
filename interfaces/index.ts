export interface ProductImage {
  url: string
  thumbnailUrl: string
}

export interface Item {
  sku: string
  thumbnail: string
  // images: ProductImage[]
  name: string
  price: number
  quantity: number
  total: number
}

export interface Cart {
  items: Pick<Item, 'thumbnail' | 'name' | 'price' | 'quantity' | 'total'>[]
}

export interface User {
  name: string
  image: string
  cart: Cart
}

export interface Product {
  sku: string
  name: string
  company: string
  description: string
  price: number
  discount: number
  originalPrice: number
  images: ProductImage[]
  thumbnail?: string
}
