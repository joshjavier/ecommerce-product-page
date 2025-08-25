import IconCart from '@/assets/images/icon-cart.svg'
import { BasketCard } from '@/components/basket-card/basket-card'
import { ProductImageCarousel } from '@/components/product-image-carousel/product-image-carousel'
import { QuantityBox } from '@/components/quantity-box/quantity-box'
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
            thumbnail: '/images/image-product-1-thumbnail.jpg',
            name: 'Fall Limited Edition Sneakers',
            price: 125,
            quantity: 3,
            total: 375,
          },
          {
            thumbnail: '/images/image-product-1-thumbnail.jpg',
            name: 'Fall Ultra Limited Edition Sneakers',
            price: 125,
            quantity: 3,
            total: 375,
          },
        ]}
      />

      <ProductImageCarousel
        images={[
          {
            url: '/images/image-product-1.jpg',
            thumbnailUrl: '/images/image-product-1-thumbnail.jpg',
          },
          {
            url: '/images/image-product-2.jpg',
            thumbnailUrl: '/images/image-product-2-thumbnail.jpg',
          },
          {
            url: '/images/image-product-3.jpg',
            thumbnailUrl: '/images/image-product-3-thumbnail.jpg',
          },
          {
            url: '/images/image-product-4.jpg',
            thumbnailUrl: '/images/image-product-4-thumbnail.jpg',
          },
        ]}
      />

      <QuantityBox
        defaultValue={0}
        thousandSeparator=","
        aria-label="Quantity"
      />
    </div>
  )
}
