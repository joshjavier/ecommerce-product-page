import { Cart } from '@/interfaces'
import { Button } from '../ui/button'
import { CartItem } from './cart-item'

function EmptyCart() {
  return (
    <div className="flex justify-center pt-900 pb-[84px]">
      <p className="text-preset-3 font-bold text-grey-500">
        Your cart is empty.
      </p>
    </div>
  )
}

type BasketCardProps = Partial<Cart>

export function BasketCard({ items = [] }: BasketCardProps) {
  return (
    <div className="w-full max-w-[360px] rounded-[10px] bg-white shadow-soft shadow-grey-950/10">
      <div className="border-b border-grey-100 p-3 pt-300 pb-[23px]">
        <h2 className="text-preset-3 font-bold">Cart</h2>
      </div>
      <div>
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="flex flex-col gap-300 px-300 py-[25px]">
            {items.map((item) => (
              <CartItem key={item.name} {...item} />
            ))}
            <Button className="shadow-none">Checkout</Button>
          </div>
        )}
      </div>
    </div>
  )
}
