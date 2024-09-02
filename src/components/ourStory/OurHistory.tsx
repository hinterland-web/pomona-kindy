import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
};

type Props = {
  heading: string;
  image: ImageProps;
  children: React.ReactNode;
};

export type Content2Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content2 = (props: Content2Props) => {
  const { heading, children, image } = {
    ...Content2Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <h2 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose text-lg">{children}</div>
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

export const Content2Defaults: Content2Props = {
  heading: "Our History",
  children: (
    <div>
      <p>
        Our kindergarten resides in a historic building that carries with it a
        rich and storied legacy. Erected in 1908, this venerable structure
        marked a pivotal moment in the local educational landscape, replacing
        the original school established in 1897. With the shifting tides of
        time, the Pomona school transitioned to new premises on Station Street
        in 1975, leading to the relocation of some of the original school
        buildings to various sites. It wasn&apos;t until 1985 that our building
        found its calling as a kindergarten, becoming the welcoming and
        nurturing home for generations of young learners in our vibrant
        community.
      </p>
      <p>
        This building&apos;s history is a testament to the enduring spirit of
        education and community, and it continues to play a vital role in
        shaping the future of our children.
      </p>
    </div>
  ),
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/bake%20sale%204.jpeg",
    alt: "Placeholder image",
    width: 800,
    height: 400,
  },
};
