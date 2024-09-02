import Image from "next/image";

type Props = {
  heading: string;
  children: React.ReactNode;
};

export type Content8Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Content8 = (props: Content8Props) => {
  const { heading, children } = {
    ...Content8Defaults,
    ...props,
  } as Props;

  const image =
    "https://pub-31971714d5324882b00b0345130560dd.r2.dev/Enrolment%202025%20brochure.png";
  const alt = "Enrolment 2025 brochure";
  return (
    <section className="">
      <div className="container">
        <div className="mx-auto w-full max-w-lg p-4 md:p-0">
          <h2 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <div className="prose text-lg">{children}</div>
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

export const Content8Defaults: Content8Props = {
  heading: "Our Fees",
  children: (
    <div>
      <p>
        With the exception of our one-off enrolment fee, payable per child per
        year, there should be no out-of-pocket fees for eligible-aged kindy
        children from 2025 onwards.{" "}
      </p>
      <p>
        The enrolment fee is payable upon acceptance of this position, this fee
        is for your child’s enrolment and administration.
      </p>
      <p>
        Term Fees are fully subsidised by the QLD government for eligible-aged
        children in 2024. Children who are not eligible for subsidised
        placements (unfunded) are charged at 10% increase on the daily rate.
      </p>
      <table className="min-w-full text-center">
        <thead>
          <tr>
            <th className="bg-base-cta-primary border font-bold border-base-400 px-4 py-2">
              What
            </th>
            <th className="bg-base-cta-primary border font-bold border-base-400 px-4 py-2">
              How much
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-base-400 px-4 py-2">Enrolment fee</td>
            <td className="border border-base-400 px-4 py-2">$100</td>
          </tr>
          <tr>
            <td className="border border-base-400 px-4 py-2">
              Daily fee
            </td>
            <td className="border border-base-400 px-4 py-2">$56.21</td>
          </tr>
          <tr>
            <td className="border border-base-400 px-4 py-2">
              Total Term fee
            </td>
            <td className="border border-base-400 px-4 py-2">$1,405</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};
