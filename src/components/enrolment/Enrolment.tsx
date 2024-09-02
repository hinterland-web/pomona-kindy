import Image from "next/image";

type Props = {
  heading: string;
  children: React.ReactNode;
  kindyDays: string;
  children2: React.ReactNode;
  eligibleAge: string;
  children3: React.ReactNode;
};

export type Content7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content7 = (props: Content7Props) => {
  const { heading, children, kindyDays, children2, eligibleAge, children3 } = {
    ...Content7Defaults,
    ...props,
  } as Props;

  const image =
    "https://pub-31971714d5324882b00b0345130560dd.r2.dev/Enrolment%202025%20brochure.png";
  const alt = "Enrolment 2025 brochure";
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto w-full max-w-lg">
          <h2 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="prose text-lg">{children}</div>
        </div>
      </div>

      <div className="container mt-10">
        <div className="mx-auto w-full max-w-lg">
          <h2 className="mb-5 text-4xl font-black md:mb-6">{kindyDays}</h2>
          <div className="prose text-lg">{children2}</div>
        </div>
      </div>

      <div className="flex justify-center p-5">
        <div className="bg-base-200 p-4 rounded-lg">
          <Image
            src={image}
            alt={alt}
            width={800}
            height={600}
            className="w-auto h-auto"
          />
        </div>
      </div>

      <div className="container mt-10">
        <div className="mx-auto w-full max-w-lg">
          <h2 className="mb-5 text-4xl font-black md:mb-6">{eligibleAge}</h2>
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
};

export const Content7Defaults: Content7Props = {
  heading: "Enrolment 2025",
  children: (
    <div>
      <p>
        In 2024, a wonderful opportunity awaits as eligible-age children have
        the chance to experience the enriching environment of our kindy for 15
        hours a week, totalling 600 hours throughout the year – and it’s
        entirely cost-free! We encourage you to secure your child’s spot by
        enrolling now.
      </p>
      {/* <p>
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
      </p> */}
    </div>
  ),
  kindyDays: "Kindy Days",
  children2: (
    <div>
      <p>
        Our Kindy runs on a 5 day a fortnight cycle, giving the children in both
        groups an even amount of time at kindy over the year.
      </p>

      <ul className="list-disc marker:text-base-400">
        <li>
          Group A: Monday, Tuesday and alternate Wednesdays, 8:30am to 2:30pm
        </li>
        <li>
          Group B: Thursday, Friday and alternate Wednesdays, 8:30am to 2:30pm
        </li>
      </ul>
      <p>
        We operate during QLD school terms. We are closed for school holidays,
        public holidays and some pupil free days.
      </p>
      <p>
        A colour-coded timetable/calendar is given out to all families so that
        you know exactly when your child will attend each week throughout the
        coming year. You can also track your child&apos;s Kindy days by logging
        into the Kidsoft Parent Portal.
      </p>
    </div>
  ),
  eligibleAge: "Eligible Age",
  children3: (
    <div>
      <p>
        This table shows the year the Queensland government recommends your
        child attends kindergarten. Children aged 4 years old by June 30 in the
        year they attend kindy are also called ‘Eligible age’ or ‘Target age’.
      </p>
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th className="bg-base-cta-primary border border-base-400 px-4 py-2">Year Born</th>
            <th className="bg-base-cta-primary border border-base-400 px-4 py-2">Kindy Year</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-base-400 px-4 py-2">
              1 July 2019 to 30 June 2020
            </td>
            <td className="border border-base-400 px-4 py-2">2024</td>
          </tr>
          <tr>
            <td className="border border-base-400 px-4 py-2">
              1 July 2020 to 30 June 2021
            </td>
            <td className="border border-base-400 px-4 py-2">2025</td>
          </tr>
          <tr>
            <td className="border border-base-400 px-4 py-2">
              1 July 2021 to 30 June 2022
            </td>
            <td className="border border-base-400 px-4 py-2">2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
