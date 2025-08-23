import IconCart from '@/assets/images/icon-cart.svg'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <Button>
        <IconCart className="size-[17.46px]" />
        Add to cart
      </Button>
    </div>
  )
}
