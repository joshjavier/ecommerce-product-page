import IconCart from '@/assets/images/icon-cart.svg'
import { BasketCard } from '@/components/basket-card/basket-card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4">
      <Button>
        <IconCart className="size-[17.46px]" aria-hidden="true" />
        Add to cart
      </Button>

      <BasketCard />

      <BasketCard
        items={[
          {
            image: '/images/image-product-1-thumbnail.jpg',
            name: 'Fall Limited Edition Sneakers',
            price: 125,
            quantity: 3,
            total: 375,
          },
          {
            image: '/images/image-product-1-thumbnail.jpg',
            name: 'Fall Ultra Limited Edition Sneakers',
            price: 125,
            quantity: 3,
            total: 375,
          },
        ]}
      />
    </div>
  )
}
