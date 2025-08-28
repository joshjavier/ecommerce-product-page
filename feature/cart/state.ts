import { atom, PrimitiveAtom } from 'jotai'
import { Item } from '@/interfaces'

export type ItemAtom = PrimitiveAtom<Item>

const itemAtomsAtom = atom<Map<string, ItemAtom>>(new Map())

export const cartItemsAtom = atom((get) => {
  const itemAtoms = get(itemAtomsAtom)
  return Array.from(itemAtoms.values())
})

export const itemCountAtom = atom((get) => {
  const itemAtoms = get(itemAtomsAtom)
  const items = Array.from(itemAtoms.values()).map((atom) => get(atom))
  return items.reduce((q, i) => q + i.quantity, 0)
})

export const addToCartAtom = atom(null, (_get, set, item: Item) => {
  set(itemAtomsAtom, (prev) => {
    const itemInCart = prev.get(item.sku)

    if (itemInCart) {
      set(itemInCart, (prev) => {
        const quantity = prev.quantity + item.quantity
        const total = item.price * quantity
        return {
          sku: item.sku,
          thumbnail: item.thumbnail,
          name: item.name,
          price: item.price,
          quantity,
          total,
        }
      })
      return prev
    }

    const newMap = new Map(prev)
    newMap.set(item.sku, atom(item))
    return newMap
  })
})

export const removeFromCartAtom = atom(null, (_get, set, sku: string) => {
  set(itemAtomsAtom, (prev) => {
    if (!prev.has(sku)) {
      return prev
    }
    const newMap = new Map(prev)
    newMap.delete(sku)
    return newMap
  })
})

export const quantityAtom = atom(0)
