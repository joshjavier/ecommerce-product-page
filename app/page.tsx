import IconCart from '@/assets/images/icon-cart.svg'
import { Header } from '@/components/header/header'
import { ProductImageCarousel } from '@/components/product-image-carousel/product-image-carousel'
import { QuantityBox } from '@/components/quantity-box/quantity-box'
import { Button } from '@/components/ui/button'
import { DiscountBadge } from '@/feature/product/discount-badge'
import { getProductDetails } from '@/lib/data'
import { formatNumber } from '@/lib/format'

export default function Home() {
  const product = getProductDetails()
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <div className="flex flex-col">
          <ProductImageCarousel images={product.images} />

          {/* Product Details */}
          <div className="space-y-400 p-300">
            {/* Product Info */}
            <div className="space-y-200">
              <p className="text-preset-6 text-grey-500 uppercase">
                {product.company}
              </p>
              <h1 className="text-preset-2">{product.name}</h1>
              <p className="text-preset-4 text-grey-500">
                {product.description}
              </p>
            </div>
            {/* Price Section */}
            <div className="flex items-start">
              <p className="me-200 text-preset-2">
                {formatNumber(product.price, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </p>
              <DiscountBadge discount={product.discount} />
              <div className="ms-auto text-preset-3 font-bold text-grey-500 line-through">
                {formatNumber(product.originalPrice, {
                  style: 'currency',
                  currency: 'USD',
                })}
              </div>
            </div>
            {/* Quantity and Add to Cart */}
            <div className="flex flex-col gap-200">
              <QuantityBox
                defaultValue={0}
                thousandSeparator=","
                aria-label="Quantity"
              />
              <Button>
                <IconCart className="size-[17.46px]" aria-hidden="true" />
                Add to cart
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
