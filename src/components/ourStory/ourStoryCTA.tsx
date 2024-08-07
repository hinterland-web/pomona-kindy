import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
};

export type Cta7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Cta7 = (props: Cta7Props) => {
  const { heading, description, buttons } = {
    ...Cta7Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="bg-base-300 text-base-cta-primary px-[5%] py-10 md:py-24 lg:py-12 md:px-[10%] lg:px-[20%] container flex w-full flex-col items-center justify-between gap-6 md:grid-cols-[1fr_max-content] md:gap-x-12 md:gap-y-8 lg:gap-x-20">
        <div className="md:mr-12 lg:mr-0 text-center">
          <div className="w-full max-w-lg">
            <h2 className="mb-3 text-6xl font-bold leading-[1.2] md:mb-4 md:text-6xl lg:text-6xl">
              {heading}
            </h2>
            <p className="md:text-md lg:text-2xl">{description}</p>
          </div>
        </div>
        <div className="flex items-start justify-start gap-4">
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
        </div>
      </div>
    </section>
  );
};

export const Cta7Defaults: Cta7Props = {
  heading: "Enroll now for 2025",
  description: "We are now accepting enrolments for 2025.",
  buttons: [{ title: "Enroll", variant: "secondary" }],
};

Cta7.displayName = "Cta7";
