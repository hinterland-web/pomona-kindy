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
  
  const altText=image.alt || "default alt text";
  
  return (
    <header className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h3 className="mb-5 text-4xl font-bold leading-[1.2] text-text-alternative md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h3>
        <p className="text-base text-text-alternative md:text-md">{description}</p>
      </div>

      <div className="absolute inset-0 -z-10">
        <Image fill={true} src={image.src} className="size-full object-cover" alt={altText} />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export const Layout44Defaults: Layout44Props = {
  heading: "Long heading is what you see here in this feature section",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.",
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-outside.png",
    alt: "pomona kindy playground",
  },
};
