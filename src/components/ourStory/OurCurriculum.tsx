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

export const Content3 = (props: Content1Props) => {
  const { heading, children, image } = {
    ...Content1Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div className="relative aspect-[4/4] w-full">
            <Image
              src={image.src}
              className="object-cover"
              alt={image.alt || ""}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <div className="prose">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Content1Defaults: Content1Props = {
  heading: "Our Curriculum",
  children: (
    <div>
      <p>
        Our kindergarten delivers C&K Quality Kindergarten Program.
        Kindergarten, also known as pre-prep or preschool, is a program for
        children who are turning 4 by June 30 in the year before they attend
        school. C&K&apos;s kindy programs are government-approved and led by
        experienced and university qualified teachers. Our program supports
        children&apos;s curiosity, creativity, problem solving, resilience and
        real-world knowledge and skills.
      </p>
      <p>
        C&K knows that children do not learn in isolation, so learning is
        approached as a collaborative relationship between teachers, eaducators,
        children and families. At C&K we believe children are powerful learners,
        active citizens, thinkers and theorisers - this is at the heart of our
        early childhood curriculum. We&apos;ve designed our indoor and outdoor
        spaces to ignite imaginations and nurture healthy minds and bodies.
        Learning through play is an integral part of our education program. Our
        educators skilfully enrich and extend on children&apos;s play
        experiences, creating a learning program that is tailored and meaningful
        for your child.
      </p>
      <p>
        Your child&apos;s learning journey is shared with you via conversations with
        your child&apos;s educators and through written documentation in your centre,
        and in some centres through StoryPark (an app and website).
      </p>
    </div>
  ),
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/Kindy%20gate%20front.jpeg",
    alt: "Placeholder image",
    width: 800,
    height: 400,
  },
};

Content3.displayName = "Content3";
