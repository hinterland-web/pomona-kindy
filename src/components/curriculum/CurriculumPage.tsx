// create a page for the curriculum it will be a page with a heading and a description and a list of the curriculum topics

import Image from "next/image";

type Props = {
  inclusive: string;
  children: React.ReactNode;
  playBased: string;
  children2: React.ReactNode;
  communicating: string;
  children3: React.ReactNode;
};

export type CurriculumProps = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export default function Curriculum(props: CurriculumProps) {
  const {
    inclusive,
    children,
    playBased,
    children2,
    communicating,
    children3,
  } = {
    ...CurriculumDefaults,
    ...props,
  } as Props;

  const image =
    "https://pub-31971714d5324882b00b0345130560dd.r2.dev/Enrolment%202025%20brochure.png";
  const alt = "Enrolment 2025 brochure";

  return (
    <section className="mt-10">
      <div className="container">
        <div className="mx-auto w-full max-w-lg p-4 md:p-0">
          <h1 className="mb-10 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            Our Curriculum
          </h1>
          <h2 className="mb-5 text-4xl font-black">
            {inclusive}
          </h2>
          <div className="prose text-lg">{children}</div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="mx-auto w-full max-w-lg p-4 md:p-0">
          <h2 className="mb-5 text-4xl font-black md:mb-6">{playBased}</h2>
          <div className="prose text-lg">{children2}</div>
        </div>
      </div>

      {/* <div className="flex justify-center p-5">
        <div className="bg-base-200 p-4 rounded-lg">
          <Image
            src={image}
            alt={alt}
            width={800}
            height={600}
            className="w-auto h-auto"
          />
        </div>
      </div> */}

      <div className="container mt-10">
        <div className="mx-auto w-full max-w-lg p-4 md:p-0">
          <h2 className="mb-5 text-4xl font-black md:mb-6">{communicating}</h2>
          <div className="prose text-lg">{children3}</div>
        </div>
      </div>

      {/* <div className="flex justify-center p-5">
        <div className="bg-base-200 p-4 rounded-lg">
          <Image
            src={image}
            alt={alt}
            width={800}
            height={600}
            className="w-auto h-auto"
          />
        </div>
      </div> */}
    </section>
  );
}

export const CurriculumDefaults: CurriculumProps = {
  inclusive: "Our inclusive education program ",
  children: (
    <div>
      <p>
        The Listening and Learning Together: C&K Curriculum Approach is
        implemented in our centre. The learning outcomes in our curriculum
        approach align with both The Early Years Framework for Australia (EYLF),
        and the Queensland Learning Guideline in (QKLG).
      </p>
      <p>
        Our teachers/educators skilfully partner with all children and families
        to create caring and vibrant learning communities. For children from
        birth to three, our program for infants and toddlers focuses on slowing
        down and being with your child as they are encouraged to explore the
        world.
      </p>
      <p>
        In the year before school, university-qualified early childhood teachers
        will guide and support your child to be a curious, capable and
        collaborative learner. At our centre, we see children from birth as
        thinkers and theorisers, rich in ideas and knowledge, as powerful
        learners and active citizens. Speak to your child’s teacher/educator
        about how our approach is embedded at your centre.
      </p>
    </div>
  ),
  playBased: "What does play-based learning look like?",
  children2: (
    <div>
      <p>
        example, if your child is playing in the sandpit, their teacher/educator
        will encourage them to draw maps in the sand and label them, or measure
        the water levels in the dam they have built. In this example, the
        teacher/educator is purposely supporting your child’s interest to
        explore opportunities for literacy and numeracy development. You might
        also see teachers/educators supporting your child and others to set up a
        shop where the children can transfer their real-life knowledge to their
        play and extend on their learning. This may include developing labels
        and signs, making money/credit cards, researching what is required for a
        shop, negotiating roles played by friends and solving problems.
      </p>
      <p>
        Our teachers/educators will encourage your child to explore and
        investigate a range of materials and express their thinking and emerging
        understandings in a variety of ways. Teachers/educators will support
        their curiosity and creativity and encourage them to investigate and
        solve problems. We will help them to capture their learning and share
        their thinking.
      </p>
    </div>
  ),
  communicating: "Communicating children’s learning ",
  children3: (
    <div>
      <p>
        We know how important it is to understand what your child is learning
        and the experiences they are engaging in. Teachers/Educators will
        reflect on and interpret children’s learning experiences adding their
        professional knowledge for your child and the whole group.
      </p>
      <p>
        Children’s learning, growth, their interest and achievements across a
        year, will be gathered and shared within the centre through print and
        electronic formats, such as Storypark, project books, our collaborative
        journals, displays and informal and formal discussions.
      </p>
      <p>
        You will see a range of different displays and records of your child’s
        learning throughout your centre.
      </p>
      <p>
        We encourage you to take some time to look at the program and add your
        comments. Contributing to this connects the child’s life at the centre
        to your life at home.
      </p>
    </div>
  ),
};
