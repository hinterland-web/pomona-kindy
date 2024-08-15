"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RxChevronRight } from "react-icons/rx";
import Image from "next/image";
import { inherits } from "util";
import Banner from "@/components/ui/Banner";

type FeatureProps = {
  tagline: string;
  url: string;
  image: ImageProps;
  heading: string;
  description: string;
  button: ButtonProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  features: FeatureProps[];
};

export type Layout423Props = React.ComponentPropsWithoutRef<"section"> & Props;

const slideVariants = {
  hidden: {
    opacity: 0,
    height: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    height: "auto",
    y: 0,
  },
};

export const Layout423 = (props: Layout423Props) => {
  const { tagline, heading, description, features } = {
    ...Layout423Defaults,
    ...props,
  } as Props;

  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState<number | null>(
    null
  );

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-300">
     
      <div className="container text-base-cta-primary">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20 text-primary-text">
          <p className="mb-3 text-lg font-semibold md:mb-4">{tagline}</p>
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl">
            {heading}
          </h2>
          {/* <p className="md:text-md">{description}</p> */}
        </div>
        <div className="flex flex-col items-stretch justify-between gap-6 md:gap-8 lg:flex-row">
          {features.map((feature, index) => (
            <motion.a
              key={`${feature.heading}-${index}`}
              href={feature.url}
              className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
              onMouseEnter={() => setHoveredFeatureIdx(index)}
              onMouseLeave={() => setHoveredFeatureIdx(null)}
            >
              <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
                <div className="absolute inset-0 bg-black/70" />

                <Image
                  src={feature.image.src}
                  alt={feature.image.alt || "default alt text"}
                  className="size-full object-cover opacity-80"
                  fill={true}
                />
              </div>
              <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
                <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/50" />
                <div className="z-10 ">
                  <p className="mb-2 font-semibold text-base-white">
                    {feature.tagline}
                  </p>
                  <h3 className="text-2xl font-bold text-base-white  md:text-3xl md:leading-[1.3] lg:text-4xl">
                    {feature.heading}
                  </h3>
                </div>
                <AnimatePresence>
                  {hoveredFeatureIdx === index && (
                    <motion.div
                      className="z-10 hidden lg:block lg:w-[340px]"
                      variants={slideVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <p className="mt-5 text-text-alternative md:mt-6">
                        {feature.description}
                      </p>
                      <div className="mt-6 md:mt-8">
                        <Button
                          variant={feature.button.variant}
                          size={feature.button.size}
                          iconRight={feature.button.iconRight}
                          iconLeft={feature.button.iconLeft}
                          className="text-text-alternative"
                        >
                          Learn More
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="lg:hidden">
                  <p className="mt-5 text-text-alternative md:mt-6">
                    {feature.description}
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant={feature.button.variant}
                      size={feature.button.size}
                      iconRight={feature.button.iconRight}
                      iconLeft={feature.button.iconLeft}
                      className="text-text-alternative"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Layout423Defaults: Layout423Props = {
  tagline: "Our Community, Our Kindy",
  heading:
    "Discover a world of learning and play at our Community Kindergarten",
  description: "Where Imagination moves mountains.",
  features: [
    {
      tagline: "Our Educators",
      url: "/teachers",
      heading: "Meet our educators",
      description:
        "Our educators are caring professionals who demonstrate positive guidance that reflect qualities of consistency, harmony and sensitivity. All staff hold current qualifications in first aid for early childhood, including CPR, asthma and anaphylaxis.",
      image: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-inside.png",
        alt: "pomona kindy inside",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Our Philosophy",
      url: "/philosophy",
      heading: "We provide a unique learning environment",
      description:
        "Our Kindergarten is a Safe, Inclusive, and Welcoming Natural Learning Environment for Children and Families",
      image: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-outside.png",
        alt: "pomona kindy activities",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
    {
      tagline: "Getting Involved",
      url: "/parent-committee",
      heading: "Kindergartens play a vital role in our communities.",
      description:
        "Kindergartens are incredibly important in the education and care of the children in the community. And so is the commitment and dedication of the Volunteer Management Committee.",
      image: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-children-playing.png",
        alt: "Placeholder image 3",
      },
      button: {
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight />,
      },
    },
  ],
};
