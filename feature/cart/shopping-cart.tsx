'use client'

import { useAtomValue } from 'jotai'
import IconCart from '@/assets/images/icon-cart.svg'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { BasketCard } from './basket-card/basket-card'
import { cartItemsAtom, itemCountAtom } from './state'

export function ShoppingCart() {
  const cartItems = useAtomValue(cartItemsAtom)
  const itemCount = useAtomValue(itemCountAtom)
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          aria-label="Shopping cart"
          className="relative size-[22px] cursor-pointer rounded-none bg-transparent text-grey-500 hover:bg-transparent hover:text-grey-950 aria-pressed:text-grey-950"
        >
          {itemCount > 0 && (
            <Badge className="absolute top-0 right-0 h-[13px] translate-x-1/2 -translate-y-1/2 animate-in rounded-full bg-orange-500 px-1.5 text-[10px]/[normal] font-bold text-white fade-in zoom-in">
              {itemCount}
            </Badge>
          )}
          <IconCart aria-hidden="true" className="size-[22px]" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        asChild
        sideOffset={32}
        className="w-[min(calc(360px+16px),var(--radix-popover-content-available-width))] bg-transparent px-2 pb-2 shadow-none"
      >
        <div>
          <BasketCard itemAtoms={cartItems} />
        </div>
      </PopoverContent>
    </Popover>
  )
}
