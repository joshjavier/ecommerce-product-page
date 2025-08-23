function EmptyCart() {
  return (
    <div className="flex pt-900 pb-[84px] justify-center">
      <p className="text-preset-3 font-bold text-grey-500">
        Your cart is empty.
      </p>
    </div>
  )
}

export function BasketCard() {
  return (
    <div className="rounded-[10px] shadow-soft bg-white w-full max-w-[360px] shadow-grey-950/10">
      <div className="p-3 pt-300 pb-[23px] text-preset-3 font-bold border-b border-grey-100">
        Cart
      </div>
      <div>
        <EmptyCart />
      </div>
    </div>
  )
}
