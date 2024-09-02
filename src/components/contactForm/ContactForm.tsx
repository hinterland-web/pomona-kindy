"use client";

import { useState } from "react";
import { Input, Label, Checkbox, Textarea, Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import Link from "next/link";
import emailjs from "@emailjs/browser";

type Props = {
  tagline: string;
  heading: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  button: ButtonProps;
};

export type Contact5Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact5 = (props: Contact5Props) => {
  const { tagline, heading, description, email, phone, address, button } = {
    ...Contact5Defaults,
    ...props,
  } as Props;

  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [messageInput, setMessageInput] = useState("");
  const [acceptTerms, setAcceptTerms] = useState<boolean | "indeterminate">(
    false
  );
  const [yourPhoneNr, setYourPhoneNr] = useState("");
  const [childsName, setChildsName] = useState("");
  const [childsDOB, setChildsDOB] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = "New Contact Form Submission";
    const body = `
      Name: ${nameInput}
      Email: ${emailInput}
      Message: ${messageInput}
      Childs Name: ${childsName}
      Childs DOB: ${childsDOB}
      Your Phone Nr: ${yourPhoneNr}
    `;

    const mailtoLink = `mailto:hello@hinterlandweb.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28 bg-base-white text-base-400">
      <div className="container grid grid-cols-1 items-start gap-y-12 md:grid-flow-row md:grid-cols-2 md:gap-x-12 lg:grid-flow-col lg:gap-x-20 lg:gap-y-16">
        <div>
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <div className="mb-6 md:mb-8">
            <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              {heading}
            </h2>
            <p className="md:text-md">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 py-2">
            <div className="flex items-center gap-4">
              <BiEnvelope className="size-6 flex-none" />
              <Link href={`mailto:${email}`}>{email}</Link>
            </div>
            <div className="flex items-center gap-4">
              <BiPhone className="size-6 flex-none" />
              <Link href={`tel:${phone}`}>{phone}</Link>
            </div>
            <div className="flex items-center gap-4">
              <BiMap className="size-6 flex-none" />
              <p>{address}</p>
            </div>
          </div>
        </div>

        <form
          className="grid grid-cols-1 grid-rows-[auto_auto] gap-6"
          onSubmit={handleSubmit}
        >
          <div className="grid w-full items-center">
            <Label htmlFor="name" className="mb-2">
              Your Name
            </Label>
            <Input
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full items-center">
              <Label htmlFor="childsName" className="mb-2">
                Your Child&apos;s Name
              </Label>
              <Input
                type="text"
                id="childsName"
                value={childsName}
                onChange={(e) => setChildsName(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="childsDOB" className="mb-2">
                Your Child&apos;s Date of Birth
              </Label>
              <Input
                type="date"
                id="childsDOB"
                value={childsDOB}
                onChange={(e) => setChildsDOB(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-2">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="yourPhoneNr" className="mb-2">
                Your Phone Nr
              </Label>
              <Input
                type="text"
                id="yourPhoneNr"
                value={yourPhoneNr}
                onChange={(e) => setYourPhoneNr(e.target.value)}
              />
            </div>
          </div>
          <div className="grid w-full items-center">
            <Label htmlFor="message" className="mb-2">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[11.25rem] overflow-auto"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
            />
          </div>

          <div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
            <Checkbox
              id="terms"
              checked={acceptTerms}
              onCheckedChange={setAcceptTerms}
            />
            <Label htmlFor="terms" className="cursor-pointer">
              I accept the{" "}
              <Link
                className="text-link-primary underline focus-visible:outline-none"
                href="/terms"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms.
              </Link>{" "}
              Clicking the button will forward you to your inbox first.
            </Label>
          </div>
          <div>
            <Button
              variant={button.variant}
              size={button.size}
              iconRight={button.iconRight}
              iconLeft={button.iconLeft}
              className="bg-base-cta-secondary text-base-400 rounded-md text-lg hover:bg-base-white hover:text-base-content "
              disabled={!acceptTerms}
            >
              {button.title}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export const Contact5Defaults: Contact5Props = {
  tagline: "We are here to help",
  heading: "Get in Touch",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  email: "admin@pomonakindy.com.au",
  phone: "+07 5485 1381",
  address: "21 Reserve Street, Pomona QLD 4568",
  button: { title: "Submit" },
};

Contact5.displayName = "Contact5";
