"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import type { CarouselApi } from "@relume_io/relume-ui";
import clsx from "clsx";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery15Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Gallery15 = (props: Gallery15Props) => {
  const { heading, description, images } = {
    ...Gallery15Defaults,
    ...props,
  } as Props;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section>
      <div className="px-[5%] py-8 md:py-24 lg:py-16">
        <div className="container">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <h2 className="rb-5 mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>
          {/* for all available options: https://www.embla-carousel.com/api/options/ */}
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            className="overflow-hidden"
          >
            <div className="relative">
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={index} className="px-0 md:px-16 lg:px-28">
                    <div className="relative w-full pt-[66.66%]">
                      <Image
                        src={image.src}
                        alt={image.alt || "default alt text"}
                        className="absolute inset-0 size-full object-cover"
                        
                        fill={true}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
              <CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" />
            </div>
            <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={clsx("relative mx-[3px] inline-block size-2 rounded-full", {
                    "bg-black": current === index + 1,
                    "bg-neutral-darker/40": current !== index + 1,
                  })}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export const Gallery15Defaults: Gallery15Props = {
  heading: "Some of our incursions",
  description: "",
  images: [
    {
      src: "/incursions-firefighters.jpg",
      alt: "Incursions Firefighters",
    },
    {
      src: "/incursions-firefighters2.jpg",
      alt: "Incursions Firefighters 2",
    },
    {
      src: "/incursions-Evergreen-Theatre-2024-01.jpg",
      alt: "Incursions Evergreen Theatre 2022",
    },


    {
      src: "/incursions-Evergreen-Theatre-2022.jpg",
      alt: "Incursions Evergreen Theatre 2022",
    },
    
    
    {
      src: "/incursions-RhythmCultureAfricanDrumming.jpg",
      alt: "Incursions Rhythm Culture African Drumming",
    },
  ],
};
