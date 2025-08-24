import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel'

export function ProductImageCarousel() {
  return (
    <Carousel className="border border-red-500" opts={{ loop: true }}>
      <CarouselContent className="aspect-[1.25] sm:aspect-[calc(608/290)]">
        {[
          '/images/image-product-1.jpg',
          '/images/image-product-2.jpg',
          '/images/image-product-3.jpg',
          '/images/image-product-4.jpg',
        ].map((image) => (
          <CarouselItem key={image}>
            <Image
              src={image}
              alt=""
              width={448}
              height={445}
              className="h-full w-full object-cover sm:rounded-[15px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
