import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  image: ImageProps;
};

export type Layout44Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Layout44 = (props: Layout44Props) => {
  const { heading, description, image } = {
    ...Layout44Defaults,
    ...props,
  } as Props;
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:gap-x-20 lg:gap-y-16">
        <h3 className="mb-5 text-4xl leading-[1.2] text-base-cta-primary md:mb-6 md:text-5xl lg:text-6xl">
          {heading}
        </h3>
        <p className="text-base text-base-cta-primary md:text-md">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 z-10">
        <Image
          src={image.src}
          className="size-full object-cover brightness-110"
          alt={image.alt || "default alt text"}
          width={1000}
          height={1000}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
};

export const Layout44Defaults: Layout44Props = {
  heading: "Our Curriculum",
  description:
    "Our inclusive educational program will honour every child's right to play, build on their existing learning from home, and provide foundations to be a successful lifelong learner",
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-inside-play.JPG",
    alt: "pomona kindy playground",
  },
};
