"use client";

import { notStrictEqual } from "assert";
import Image from "next/image";

type ImageProps = {
  url?: string;
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  images: ImageProps[];
};

export type Gallery10Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

const imageNames = [
  "pomona-kindy-outside-IMG_1995.png",
  "pomona-kindy-outside-IMG_1996.png",
  "pomona-kindy-outside-basin.jpg",
  "pomona-kindy-outside-garden.jpg",
  "pomona-kindy-outside-playground.jpg",
  "pomona-kindy-outside-playground2.jpg",
  "pomona-kindy-outside-playground3.jpg",
  "pomona-kindy-outside-playground4.jpg",
  "pomona-kindy-outside-playground5.jpg",
  "pomona-kindy-outside-sandpit.jpg",
  "pomona-kindy-outside-sandpit2.jpg",
  "pomona-kindy-outside-smiles.jpg",
  "pomona-kindy-outside-swing.jpg",
  "pomona-kindy-outside.png",
];

const baseUrl = "https://pub-31971714d5324882b00b0345130560dd.r2.dev/";

export const Gallery10 = (props: Gallery10Props) => {
  const { heading, description } = {
    ...Gallery10Defaults,
    ...props,
  } as Props;

  const images = imageNames.map((image) => ({
    url: "#",
    src: `${baseUrl}${image}`,
    alt: image,
  }));

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="gap-8 space-y-8 md:columns-3">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.url}
              className="block w-full aspect-w-16 aspect-h-9"
            >
              <Image
                src={image.src}
                alt={image.alt || ""}
                className="size-full object-cover"
                width={1000}
                height={1000}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery10Defaults: Gallery10Props = {
  heading: "Outside Play Area",
  description:
    "We have created a space for the children to play and explore. A large playground with a variety of equipment for the children to play on, a sandpit, arts station and a veggie garden.",
  // images: [
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 1",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 2",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
  //     alt: "Placeholder image 3",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
  //     alt: "Placeholder image 4",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 5",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 6",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 7",
  //   },
  // ],
};
