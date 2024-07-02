"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Header5 = (props: Header5Props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  } as Props;
  return (
    <header className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-base text-text-alternative md:text-md">{description}</p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              <Link href="/contact">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                  className="text-lg bg-base-cta-secondary rounded-md "
                >
                  {button.title}
                </Button>
              ))}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image src={image.src} className="size-full object-cover" alt={image.alt || "default alt text"} fill={true}/>
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </header>
  );
};

export const Header5Defaults: Header5Props = {
  heading: "Where Imagination Moves Mountains",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  buttons: [{ title: "Book a Visit" }], 
  // { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/kindy-playground-hero.png",
    alt: "Kindy-playground",
  },
};
