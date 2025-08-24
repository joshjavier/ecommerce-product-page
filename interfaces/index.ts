export interface Item {
  image: string
  name: string
  price: number
  quantity: number
  total: number
}

export interface Cart {
  items: Item[]
}
