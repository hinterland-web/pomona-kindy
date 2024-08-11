import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type Props = {
  heading: string;
  image: ImageProps;
  children: React.ReactNode;
};

export type Content1Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content1 = (props: Content1Props) => {
  const { heading, children, image } = {
    ...Content1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-white">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose">{children}</div>
          </div>
          <div>
            <Image
              src={image.src}
              width={image.width}
              height={image.height}
              className="w-full h-auto object-cover"
              alt={image.alt || ""}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content1Defaults: Content1Props = {
  heading: "Our Environment",
  children: (
    <div>
      <p>
        We&apos;ve created an environment where learning and play harmoniously
        coexist, and every day is an adventure waiting to unfold. Our
        kindergarten is more than just a place of education; it&apos;s a world
        of wonder and discovery, carefully designed to stimulate young minds and
        nurture their curiosity.
      </p>
      <p>
        We recently received a brand-new, nature-inspired playground, crafted
        with care by Bespoke Playgrounds. This enchanting addition offered our
        children the opportunity to immerse themselves in the wonders of the
        natural world right here at our kindergarten. From climbing to
        exploring, digging, and discovering, this playground was designed to
        engage young minds in the joys of outdoor play and hands-on learning.
        The benefits are boundless: it encourages physical activity, stimulates
        imaginative play, and fosters a deeper connection with the environment.
      </p>
    </div>
  ),
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/pomona-kindy-children-playing.png",
    alt: "Placeholder image",
    width: 800,
    height: 400,
  },
};

Content1.displayName = "Content1";