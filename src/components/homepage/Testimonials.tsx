"use client";

import type { ImageProps } from "@relume_io/relume-ui";
import Image from "next/image";

type Testimonial = {
  image: ImageProps;
  testimonial: string;
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

export type Testimonial3Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Testimonial3 = (props: Testimonial3Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial3Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-white text-base-400">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h1 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">{heading}</h1>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.testimonial}-${index}`}
              className="flex flex-col items-center text-center"
            >
              <Image src={testimonial.image.src} alt={testimonial.image.alt || "default alt text"} className="max-h-14" fill={true}/>
              <blockquote
                className={`my-6 text-md font-bold leading-[1.4] before:content-['"'] after:content-['"'] md:my-8 md:text-xl`}
              >
                {testimonial.testimonial}
              </blockquote>
              <Image
                src={testimonial.avatar.src}
                alt={testimonial.avatar.alt || "default alt text"}
                className="mb-4 size-14 min-h-14 min-w-14 rounded-full object-cover"
                width={80}
                height={80}
              />
              <p className="font-semibold">{testimonial.name}</p>
              {/* <p>
                <span>{testimonial.position}</span><span>{testimonial.companyName}</span>
              </p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial3Defaults: Testimonial3Props = {
  heading: "What our Families Say",
  description: "",
  testimonials: [
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
        alt: "Testimonial avatar 1",
      },
      name: "Andre S.",
      position: "",
      companyName: "",
    },
    {
        image: {
          src: "",
          alt: "",
        },
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        avatar: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Testimonial avatar 1",
        },
        name: "Brodie H.",
        position: "",
        companyName: "",
      },
      {
        image: {
          src: "",
          alt: "",
        },
        testimonial:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
        avatar: {
          src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
          alt: "Testimonial avatar 1",
        },
        name: "Sarah B.",
        position: "",
        companyName: "",
      }
  ],
};
