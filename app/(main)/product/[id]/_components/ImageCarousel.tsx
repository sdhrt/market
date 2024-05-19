"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

function ImageCarousel({ images }: { images: string[] }) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="">
        {images.map((image, index) => (
          <CarouselItem key={index} className="grid place-items-center">
            <Image src={image} height={300} width={300} alt="product image" />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ImageCarousel;
