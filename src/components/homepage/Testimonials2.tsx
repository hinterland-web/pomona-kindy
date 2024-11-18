"use client";

import React from "react";
import type { CarouselApi } from "@relume_io/relume-ui";
import { useState, useEffect } from "react";
import { BiSolidStar } from "react-icons/bi";
import clsx from "clsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@relume_io/relume-ui";
import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  numberOfStars: number;
  quote: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial27Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial27 = (props: Testimonial27Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial27Defaults,
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

  const imageUrl = "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-inside-paintings.JPG";

  return (
    <section
      id="relume"
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-cover bg-center bg-no-repeat text-base-white"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
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
            <CarouselContent className="ml-0 md:mx-3.5">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-0 md:basis-1/2 md:px-4">
                  <TestimonialCard testimonial={testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden bg-white md:flex md:size-12 lg:size-14" />
            <CarouselNext className="hidden bg-white md:flex md:size-12 lg:size-14" />
          </div>
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={clsx(
                  "relative mx-[3px] inline-block size-2 rounded-full",
                  {
                    "bg-black": current === index + 1,
                    "bg-neutral-darker/40": current !== index + 1,
                  }
                )}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8 bg-base-100 text-base-400">
      <div className="rb-5 mb-5 md:mb-6">
        <div className="rb-6 mb-6 flex items-center">
          {Array(testimonial.numberOfStars)
            .fill(null)
            .map((_, starIndex) => (
              <BiSolidStar key={starIndex} className="mr-1 size-6" />
            ))}
        </div>
        <blockquote className="md:text-md">{testimonial.quote}</blockquote>
      </div>
      <div className="flex w-full flex-col items-start gap-4 md:w-auto md:flex-row md:items-center">
        {/* <Image
          src={testimonial.avatar.src}
          alt={testimonial.avatar.alt}
          width={100}
          height={100}
          className="size-12 min-h-12 min-w-12 rounded-full object-cover"
        /> */}
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          {/* <p>
            {testimonial.position}, {testimonial.companyName}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export const Testimonial27Defaults: Testimonial27Props = {
  heading: "What our Families Say",
  description: "",
  testimonials: [
    {
      numberOfStars: 5,
      quote:
        "It's rare to find a space that incorporate so well into its surrounding nature as is the case at the Pomona Kindy. It feels like the kids are always involved in adventures of discovery and purposeful play.",
      avatar: {
        src: "",
        alt: "Testimonial avatar 1",
      },
      name: "Andre S.",
      position: "",
      companyName: "",
    },
    {
      numberOfStars: 5,
      quote:
        "We initially decided against kindy this year as we will be homeschoolong next year, but we popped in on their opening day and changed our mind straight away! The staff were so welcoming and we loved that it feels like a big community.",
      avatar: {
        src: "",
        alt: "Testimonial avatar 2",
      },
      name: "Brodie H.",
      position: "",
      companyName: "",
    },
    {
      numberOfStars: 5,
      quote:
        "Such a beautiful kindy. Renae, Kirsty & Tash are amazing, kind & nurturing. My daughter loved her time here and the community feel. Thank you!",
      avatar: {
        src: "",
        alt: "Testimonial avatar 3",
      },
      name: "Stacey L.",
      position: "",
      companyName: "",
    },
    {
      numberOfStars: 5,
      quote:
        "Wonderful inclusive kindergarten with lovely caring staff. I love this kindy so much!!",
      avatar: {
        src: "",
        alt: "Testimonial avatar 4",
      },
      name: "Dyneea H.",
      position: "",
      companyName: "",
    },
    {
      numberOfStars: 5,
      quote:
        "Fantastic kindy, we are thrilled to have a spot. The teachers are wonderful and genuinely really care about the wellbeing of the children! Can highly recommend!",
      avatar: {
        src: "",
        alt: "Testimonial avatar 5",
      },
      name: "Raini P.",
      position: "",
      companyName: "",
    },
  ],
};
