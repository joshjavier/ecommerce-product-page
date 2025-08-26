import Image from 'next/image'
import IconDelete from '@/assets/images/icon-delete.svg'
import { Button } from '@/components/ui/button'
import { Item } from '@/interfaces'
import { formatNumber } from '@/lib/format'

type CartItemProps = Pick<
  Item,
  'thumbnail' | 'name' | 'price' | 'quantity' | 'total'
>

export function CartItem({
  thumbnail,
  name,
  price,
  quantity,
  total,
}: CartItemProps) {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: 'USD',
  }
  return (
    <div className="flex gap-200 px-[1.5px]">
      <Image
        src={thumbnail}
        alt=""
        className="h-[50px] w-[50px] shrink-0 rounded-sm"
        width={50}
        height={50}
      />
      <div className="text-preset-3 text-grey-500">
        <h3>{name}</h3>
        <div className="flex gap-100">
          <p>
            {formatNumber(price, options)} x {quantity}
          </p>
          <p className="font-bold text-grey-950">
            {formatNumber(total, options)}
          </p>
        </div>
      </div>
      <div className="flex shrink-0 items-center gap-4">
        <Button
          aria-label="Delete"
          title="Remove from cart"
          variant="link"
          size="icon"
          className="w-3.5"
        >
          <IconDelete aria-hidden="true" />
        </Button>
      </div>
    </div>
  )
}
