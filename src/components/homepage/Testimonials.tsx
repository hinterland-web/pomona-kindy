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

export type Testimonial3Props = React.ComponentPropsWithoutRef<"section"> &
  Props;

export const Testimonial3 = (props: Testimonial3Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial3Defaults,
    ...props,
  } as Props;
  
  const imageUrl = "/pomona-kindy-inside-paintings.webp";
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-cover bg-center bg-no-repeat text-base-white" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for opacity */}
      <div className="relative z-10"> {/* Ensure text is above the overlay */}
        <div className="container">
          <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
            <h1 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h1>
            <p className="md:text-md">{description}</p>
          </div>
          <div className="grid grid-cols-1 gap-y-12 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.testimonial}-${index}`}
                className="flex flex-col items-center text-center"
              >
                <blockquote
                  className={`my-6 text-md font-bold leading-[1.4] before:content-['"'] after:content-['"'] md:my-8 md:text-xl`}
                >
                  {testimonial.testimonial}
                </blockquote>
                {/* <Image
                  src={testimonial.avatar.src}
                  alt={testimonial.avatar.alt || "default alt text"}
                  className={`mb-4 size-24 min-h-14 min-w-14 rounded-full object-cover ${
                    testimonial.name === "Brodie H." ? "object-[center_90%]" : ""
                  }`}
                  width={80}
                  height={80}
                /> */}
                <p className="font-semibold">{testimonial.name}</p>
                {/* <p>
                  <span>{testimonial.position}</span><span>{testimonial.companyName}</span>
                </p> */}
              </div>
            ))}
          </div>
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
        "It's rare to find a space that incorporate so well into its surrounding nature as is the case at the Pomona Kindy. It feels like the kids are always involved in adventures of discovery and purposeful play.",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1930%20Andre.jpeg",
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
        "We initially decided against kindy this year as we will be homeschoolong next year, but we popped in on their opening day and changed our mind straight away! The staff were so welcoming and we loved that it feels like a big community.",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1931%20Brodie.jpeg",
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
        "Such a beautiful kindy. Renae, Kirsty & Tash are amazing, kind & nurturing. My daughter loved her time here and the community feel. Thank you!",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1929%20Sarah.jpeg",
        alt: "Testimonial avatar 1",
      },
      name: "Stacey L.",
      position: "",
      companyName: "",
    },
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial:
        "Wonderful inclusive kindergarten with lovely caring staff. I love this kindy so much!!",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1929%20Sarah.jpeg",
        alt: "Testimonial avatar 1",
      },
      name: "Stacey L.",
      position: "",
      companyName: "",
    },
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial:
        "Fantastic kindy, we are thrilled to have a spot. The teachers are wonderful and genuinely really care about the wellbeing of the children! Can highly recommend!",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1929%20Sarah.jpeg",
        alt: "Testimonial avatar 1",
      },
      name: "Raini P.",
      position: "",
      companyName: "",
    },
  ],
};
