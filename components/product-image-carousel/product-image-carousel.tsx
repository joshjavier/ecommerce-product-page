import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselThumb,
  CarouselThumbscroll,
} from '../ui/carousel'

export function ProductImageCarousel() {
  return (
    <Carousel>
      <CarouselContent className="aspect-[1.25] sm:aspect-[calc(608/290)] lg:aspect-[calc(448/445)]">
        {[
          '/images/image-product-1.jpg',
          '/images/image-product-2.jpg',
          '/images/image-product-3.jpg',
          '/images/image-product-4.jpg',
        ].map((image) => (
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
        {[
          '/images/image-product-1-thumbnail.jpg',
          '/images/image-product-2-thumbnail.jpg',
          '/images/image-product-3-thumbnail.jpg',
          '/images/image-product-4-thumbnail.jpg',
        ].map((image, index) => (
          <CarouselThumb key={image} index={index} image={image} />
        ))}
      </CarouselThumbscroll>
    </Carousel>
  )
}
