import { ProductImage } from '@/interfaces'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumb,
  CarouselThumbscroll,
} from '../ui/carousel'

interface ProductImageCarouselProps {
  images: ProductImage[]
}

export function ProductImageCarousel({ images }: ProductImageCarouselProps) {
  const carouselImages = images.map((i) => i.url)
  const thumbnails = images.map((i) => i.thumbnailUrl)
  return (
    <Carousel>
      <CarouselContent className="aspect-[1.25] sm:aspect-[calc(608/290)] lg:aspect-[calc(448/445)]">
        {carouselImages.map((image) => (
          <CarouselItem key={image}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover sm:rounded-[15px]"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:hidden" />
      <CarouselNext className="lg:hidden" />
      <CarouselThumbscroll className="mt-400 h-[88px]">
        {thumbnails.map((image, index) => (
          <CarouselThumb key={image} index={index} image={image} />
        ))}
      </CarouselThumbscroll>
    </Carousel>
  )
}
