"use client";

import type { ImageProps } from "@relume_io/relume-ui";
import Image from "next/image";

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout44Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout44 = (props: Layout44Props) => {
  const { heading, description, image } = {
    ...Layout44Defaults,
    ...props,
  } as Props;

  const altText = image.alt || "default alt text";

  return (
    <header className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h3 className="mb-5 text-4xl font-black leading-[1.2] text-base-cta-primary md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h3>
        <p className="text-base-white md:text-lg">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 -z-10">
        <Image
          fill={true}
          src={image.src}
          className="size-full object-cover"
          alt={altText}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export const Layout44Defaults: Layout44Props = {
  heading: "Establishing a love of life-long learning",
  description:
    "Our educators are dedicated professionals with extensive experience in early childhood education. They are experts in nurturing and guiding children aged three to five, demonstrating consistency, harmony, and sensitivity in their approach. Our purpose-built facility and spacious outdoor areas are designed to foster holistic development within a supportive community setting. All staff members hold current qualifications in pediatric first aid, including CPR, asthma management, and anaphylaxis response.",
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-outside.png",
    alt: "pomona kindy playground",
  },
};
