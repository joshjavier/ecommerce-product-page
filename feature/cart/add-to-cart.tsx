'use client'

import { useCallback } from 'react'
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
  const onClick = useCallback(() => {
    if (quantity <= 0) {
      return
    }
    const { sku, name, price, images, thumbnail } = getProductDetails()
    const item: Item = {
      sku,
      name,
      price,
      quantity,
      total: price * quantity,
      thumbnail: thumbnail ?? images[0].thumbnailUrl,
    }
    addToCart(item)
  }, [addToCart, quantity])
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
