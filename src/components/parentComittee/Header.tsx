import Image from "next/image";

type ImageProps = {
  src: string;
  alt?: string;
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
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-white">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <Image
              src={image.src}
              className="w-full object-cover"
              alt={image.alt || "default alt text"}
              width={100}
              height={100}
            />
          </div>
          <div>
            <h2 className="mb-5  font-bold md:mb-6 md:text-7xl lg:text-5xl">
              {heading}
            </h2>
            <div className="prose">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content2Defaults: Content2Props = {
  heading: "What is the Parent Committee?",
  children: (
    <div>
      <p>
        The committee is elected by the members of the Kindergarten during an
        Annual General Meeting (AGM) to manage Kindergarten operations for, and
        on behalf of the members (normally centre parents). What your committee
        looks like and how it operates is outlined in your Constitution (or
        Rules of the Association). It is important that all Committee members
        have a copy and become familiar with the Constitution when elected. Your
        Constitution is a legal document and you and the members of your
        Association must follow the rules it sets out.
      </p>

      <p>
        The committee must have at least three members in Office Bearer
        positions - President, Vice President, Secretary and Treasurer. You may
        appoint additional members to the Committee, in accordance with your
        Constitution. Please note, one person cannot be both President and
        Treasurer, and all committee members must be 18 years of age or older.
        All committee members must hold a current, valid Blue Card upon
        commencement, and for the duration, of their role.
      </p>
    </div>
  ),
  image: {
    src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    alt: "Placeholder image",
  },
};

Content2.displayName = "Content2";
