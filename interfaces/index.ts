export interface ProductImage {
  url: string
  thumbnailUrl: string
}

export interface Item {
  thumbnail: string
  images: ProductImage[]
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
