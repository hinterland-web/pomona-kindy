"use client";

import { Button } from "@relume_io/relume-ui";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  heading: string;
  description: string;
  buttons: ButtonProps[];
  image: ImageProps;
};

export type Header5Props = React.ComponentPropsWithoutRef<"section"> & Props;

const Modal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`fixed inset-0 bg-base-400 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`bg-base-white p-8 rounded-lg max-w-md w-full transition-all duration-300 ease-in-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <button onClick={onClose} className="float-right text-2xl">
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export const Header5 = (props: Header5Props) => {
  const { heading, description, buttons, image } = {
    ...Header5Defaults,
    ...props,
  } as Props;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="relative px-[5%]">
      <div className="container">
        <div className="flex max-h-[60rem] min-h-svh items-center py-16 md:py-24 lg:py-28">
          <div className="max-w-md">
            <h1 className="mb-5 text-6xl text-text-alternative md:mb-6 md:text-9xl lg:text-10xl">
              {heading}
            </h1>
            <p className="text-2xl text-text-alternative md:text-lg">
              {description}
            </p>
            <div className="mt-6 flex gap-x-4 md:mt-8">
              {buttons.map((button, index) => (
                <Button
                  key={`${button.title}-${index}`}
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                  className="text-lg bg-base-cta-secondary rounded-md  hover:bg-base-white hover:text-base-content"
                  onClick={() => setIsModalOpen(true)}
                >
                  {button.title}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src={image.src}
          className="size-full object-cover"
          alt={image.alt || "default alt text"}
          fill={true}
          loading="eager"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl mb-4">Enroll Now</h2>
        <p>
          Please fill out the enrollment form or contact us for more
          information.
        </p>
        <Link href="/contact">
          <Button className="mt-4">Contact Us</Button>
        </Link>
      </Modal>
    </header>
  );
};

export const Header5Defaults: Header5Props = {
  heading: "Where Imagination Moves Mountains",
  description:
    "We’re a not-for-profit community organisation proudly affiliated with the Crèche and Kindergarten Association of Queensland (C&K)",
  buttons: [{ title: "Enroll Now" }],
  // { title: "Button", variant: "secondary-alt" }],
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/kindy-playground-hero.png",
    alt: "Kindy-playground",
  },
};
