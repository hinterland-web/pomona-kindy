import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta7Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Cta7 = (props: Cta7Props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="bg-base-200 text-base-400 px-[5%] py-10 md:py-24 lg:py-12 md:px-[10%] lg:px-[20%] container flex w-full flex-col items-center justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-4xl font-bold leading-[1.2] md:mb-4 md:text-3xl lg:text-4xl">
              {heading}
            </h2>
            <p className="md:text-md lg:text-3xl text-center font-bold">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
          <Link
            href="https://drive.google.com/file/d/1aYRMYePPchEVSvFzv3Veo4y2ZbYnxewK/view?usp=sharing"
            target="_blank"
          >
            {buttons.map((button, index) => (
              <Button
                key={index}
                variant={button.variant}
                size={button.size}
                iconRight={button.iconRight}
                iconLeft={button.iconLeft}
                className="text-lg bg-base-cta-secondary rounded-md  hover:bg-base-white hover:text-base-content"
              >
                {button.title}
              </Button>
            ))}
          </Link>
        </div>
      </div>
    </section>
  );
};

export const Cta7Defaults: Cta7Props = {
  heading: "",
  description:
    "If you want to know more about the Parent Committee, click the button below to view the C&K's Handbook.",
  buttons: [{ title: "Learn more", variant: "secondary" }],
};

Cta7.displayName = "Cta7";
