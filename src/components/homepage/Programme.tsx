"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";

type Props = {
  icon: ImageProps;
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Layout77Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Layout77 = (props: Layout77Props) => {
  const { icon, heading, description, buttons } = {
    ...Layout77Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-400 text-base-white">
      <div className="container grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div>
          <h2 className="text-base-cta-primary text-5xl font-black md:text-7xl lg:text-8xl">
            {heading}
          </h2>
        </div>
        <div>
          <div>
            <p className="md:text-md">{description}</p>

            <div className="mt-6 flex items-center gap-x-4 md:mt-8">
              <Link href="/story">
                {buttons.map((button, index) => (
                  <Button
                    key={`${button.title}-${index}`}
                    variant={button.variant}
                    size={button.size}
                    iconRight={button.iconRight}
                    iconLeft={button.iconLeft}
                    className="text-base text-base-cta-primary font-bold text-xl relative group"
                  >
                    <span className="relative">
                      {button.title}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-base-cta-primary transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Button>
                ))}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Layout77Defaults: Layout77Props = {
  icon: { src: "", alt: "" },
  heading: "We acknowledge the uniqueness and potential of all children",
  description:
    "We've created an environment where learning and play harmoniously coexist, and every day is an adventure waiting to unfold. Our kindergarten is more than just a place of education; it's a world of wonder and discovery, carefully designed to stimulate young minds and nurture their curiosity.",
  buttons: [
    {
      title: "Learn More",
      variant: "link",
      size: "link",
      iconRight: <RxChevronRight className="size-6" />,
    },
  ],
};
