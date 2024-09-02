import { GetServerSideProps } from "next";
import clsx from "clsx";
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

export type Gallery8Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;



const imageNames = [
  "pomona-kindy-inside-crafts.JPG",
  "pomona-kindy-inside-dream-catcher.JPG",
  "pomona-kindy-inside-hall.JPG",
  "pomona-kindy-inside-library.jpg",
  "pomona-kindy-inside-paintings.JPG",
  "pomona-kindy-inside-play-sunlight.JPG",
  "pomona-kindy-inside-play.JPG",
  "pomona-kindy-inside-reading.JPG",
  "pomona-kindy-inside-tshirts.jpg",
];

const baseUrl = "https://pub-31971714d5324882b00b0345130560dd.r2.dev/";

export const Gallery8 = (props: Gallery8Props) => {
  const { heading, description } = {
    ...Gallery8Defaults,
    ...props,
  } as Props;

  const images = imageNames.map((name) => ({
    url: "#",
    src: `${baseUrl}${name}`,
    alt: `Image of ${name}`,
  }));

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-lg">{description}</p>
        </div>

        <div className="gap-x-8 md:columns-2">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.url}
              className="mb-8 inline-block w-full ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-border-primary focus-visible:ring-offset-2"
            >
              <div
                className={clsx("relative inline-block w-full", {
                  "pt-[100%]": index % 3 === 0,
                  "pt-[66.66%]": index % 3 !== 0,
                })}
              >
                <Image
                  src={image.src}
                  alt={image.alt || "default alt text"}
                  className="absolute inset-0 size-full object-cover"
                  width={800}
                  height={800}
                  priority
                  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery8Defaults: Gallery8Props = {
  heading: "Image Gallery",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 3",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 4",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 4",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 4",
  //   },{
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 4",
  //   },
  //   {
  //     url: "#",
  //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
  //     alt: "Placeholder image 4",
  //   },
  // ],
};

Gallery8.displayName = "Gallery8";
