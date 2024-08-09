import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
  width: number;
  height: number;
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
            width={image.width}
            height={image.height}
            className="object-cover w-full"
            alt={image.alt || "default alt text"}
            loading="eager"
            priority={true}
          />
        </div>
        <div className="mx-auto w-full max-w-lg items-center">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="prose text-lg">{children}</div>
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
        Our kindergarten stands on Gubbi Gubbi land and we are proud to
        acknowledge the traditional custodians of our beautiful land. We
        respectfully embed Aboriginal and Torres Strait Islander ways of being,
        knowing, thinking and doing into our daily program and practices. We
        strongly believe that all children have the right to learn through play
        and know that this is the best way children learn and develop skills,
        confidence, resilience and knowledge. Educators on staff are highly
        trained and experienced. They facilitate and guide children’s learning
        using evidence-based research and knowledge alongside ongoing skill
        development.
      </p>
      <p>
        The uniqueness of each child and their cultural and familial
        understandings are celebrated and valued. Educators are advocates for
        the present and future rights of all children and use an environmentally
        sustainable approach to learning and provides connections to community
        and cultures. Time is spent developing respectful relationships with our
        kindergarten families and our local community around Pomona, knowing
        that these will lead to many positive outcomes for our children.
      </p>
      <p>
        Fairness, respect and an inclusive environment are highly valued
        outcomes for each child. These values are both modelled and explicitly
        taught by educators, encouraging children to feel proud and independent
      </p>
    </div>
  ),
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/front%20gate%20kindy.jpeg",
    width: 1000,
    height: 600,
    alt: "Pomona Kindy front gate",
  },
};

Content9.displayName = "Content9";
