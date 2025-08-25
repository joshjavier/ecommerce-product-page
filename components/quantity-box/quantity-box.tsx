'use client'

import { useState } from 'react'
import IconMinus from '@/assets/images/icon-minus.svg'
import IconPlus from '@/assets/images/icon-plus.svg'
import { Button } from '../ui/button'

export function QuantityBox() {
  const [quantity, setQuantity] = useState(0)
  const inc = () => setQuantity((q) => q + 1)
  const dec = () => setQuantity((q) => (q <= 0 ? q : q - 1))
  return (
    <div className="flex h-700 min-w-[157px] items-center justify-between rounded-[10px] bg-grey-50">
      <Button
        disabled={quantity <= 0}
        onClick={dec}
        variant="secondary"
        size="icon"
        className="h-full w-[39px] cursor-pointer rounded-e-none bg-transparent text-orange-500 shadow-none hover:bg-transparent hover:text-orange-300"
        aria-label="Decrement"
      >
        <IconMinus className="size-3" aria-hidden="true" />
      </Button>
      <div className="text-preset-3 font-bold">{quantity}</div>
      <Button
        onClick={inc}
        variant="secondary"
        size="icon"
        className="h-full w-[39px] cursor-pointer rounded-s-none bg-transparent text-orange-500 shadow-none hover:bg-transparent hover:text-orange-300"
        aria-label="Increment"
      >
        <IconPlus className="size-3" aria-hidden="true" />
      </Button>
    </div>
  )
}
