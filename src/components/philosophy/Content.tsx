import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  children: React.ReactNode;
  image: ImageProps;
};

export type Content9Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content9 = (props: Content9Props) => {
  const { heading, children, image } = {
    ...Content9Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <Image
            src={image.src}
            width={100}
            height={100}
            className="w-full object-cover"
            alt={image.alt || "default alt text"}
          />
        </div>
        <div className="mx-auto w-full max-w-lg items-center">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="prose">{children}</div>
        </div>
      </div>
    </section>
  );
};

export const Content9Defaults: Content9Props = {
  heading: "Our Philosophy",
  children: (
    <div>
      <p>
        Pomona kindergarten provides a beautiful, natural learning environment
        that feels safe, inclusive and welcoming for our children and their
        families, supporting them to share their own languages, experiences and
        knowledge.
      </p>
      <p>
        Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas
        condimentum mi massa. In tincidunt pharetra consectetur sed duis
        facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit
        dictum eget nibh tortor commodo cursus.
      </p>
      <p>
        Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet.
        Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget
        ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec
        posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
        adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere
        cursus diam.
      </p>
    </div>
  ),
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
    alt: "Placeholder image",
  },
};

Content9.displayName = "Content9";
