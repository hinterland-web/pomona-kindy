import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import Image from "next/image";
import Link from "next/link";

type ImageProps = {
  src: string;
  alt?: string;
};

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header36Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Header36 = (props: Header36Props) => {
  const { heading, description, buttons, image } = {
    ...Header36Defaults,
    ...props,
  } as Props;
  return (
    <header className="grid grid-cols-1 items-center gap-y-16 pt-16 md:pt-24 lg:grid-cols-2 lg:pt-0 bg-base-cta-secondary">
      <div className="mx-[5%] sm:max-w-md md:justify-self-start lg:ml-[5vw] lg:mr-20 lg:justify-self-end">
        <h1 className="text-base-white mb-5 text-6xl font-black md:mb-6 md:text-9xl lg:text-10xl">
          {heading}
        </h1>
        <p className="md:text-md">Hello! We are currently redesigning our website with the help of <Link href="https://hinterlandweb.com" className="font-bold bg-base-content text-base-white p-1">Hinterland Web</Link>. In the meanwhile feel free to write us an email, in case you have any enquiries</p>
        <div className="mt-6 flex gap-x-4 md:mt-8">
          <Link href="tel:+610754851381">
            {buttons.map((button, index) => (
              <Button
                key={index}
                {...button}
                className="text-lg bg-base-content rounded-md  hover:bg-base-white hover:text-base-content"
              >
                {button.title}
              </Button>
            ))}
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={image.src}
          alt={image.alt || "default alt text"}
          width={200}
          height={300}
          className="w-full object-cover lg:h-screen lg:max-h-[60rem]"
        />
      </div>
    </header>
  );
};

export const Header36Defaults: Header36Props = {
  heading: "Where Imagination Moves Mountains",
  description:
    "Hello! We are currently redesigning our website with the help of Hinterland Web. In the meanwhile feel free to write us an email, in case you have any enquiries",
  buttons: [{ title: "Get in Touch" }],
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/C%26A_Logo_HI-RES_no_bg.png",
    alt: "Placeholder image",
  },
};

Header36.displayName = "Header36";
