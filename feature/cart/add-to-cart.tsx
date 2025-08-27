'use client'

import { useAtom, useSetAtom } from 'jotai'
import IconCart from '@/assets/images/icon-cart.svg'
import { QuantityBox } from '@/components/quantity-box/quantity-box'
import { Button } from '@/components/ui/button'
import { Item } from '@/interfaces'
import { getProductDetails } from '@/lib/data'
import { addToCartAtom, quantityAtom } from './state'

export function AddToCart() {
  const addToCart = useSetAtom(addToCartAtom)
  const [quantity, setQuantity] = useAtom(quantityAtom)
  const onClick = () => {
    const { company, description, discount, originalPrice, images, ...item } =
      getProductDetails()
    if (!item.thumbnail) {
      item.thumbnail = images[0].thumbnailUrl
    }
    addToCart({ ...item, quantity, total: item.price * quantity } as Item)
    console.log('item added to cart')
  }
  return (
    <>
      <QuantityBox
        value={quantity}
        onValueChange={(value) => setQuantity(value || 0)}
        thousandSeparator=","
        aria-label="Quantity"
      />
      <Button onClick={onClick}>
        <IconCart className="size-[17.46px]" aria-hidden="true" />
        Add to cart
      </Button>
    </>
  )
}
