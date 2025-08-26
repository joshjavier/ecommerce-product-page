import { formatNumber } from '@/lib/format'

export function DiscountBadge({ discount }: { discount: number }) {
  return (
    <div className="rounded-md bg-grey-950 px-[9.5px] py-[0.5px] text-preset-3 font-bold text-white">
      {formatNumber(discount, { style: 'percent' })}
    </div>
  )
}
