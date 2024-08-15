"use client";

import { Button, Input } from "@relume_io/relume-ui";
import Link from "next/link";
import type { ImageProps, ButtonProps } from "@relume_io/relume-ui";
import { FaXTwitter } from "react-icons/fa6";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import Image from "next/image";

type Links = {
  title: string;
  url: string;
};

type ColumnLinks = {
  title: string;
  links: Links[];
};

type SocialMediaLinks = {
  url: string;
  icon: React.ReactNode;
};

type FooterLink = {
  title: string;
  url: string;
};

type Props = {
  image: ImageProps;
  newsletterHeading: string;
  newsletterDescription: string;
  inputPlaceholder?: string;
  button: ButtonProps;
  termsAndConditions: React.ReactNode;
  columnLinks: ColumnLinks[];
  socialMediaLinks: SocialMediaLinks[];
  footerText?: string;
  acknowledgements?: string;
  footerLinks: FooterLink[];
};

export type Footer2Props = React.ComponentPropsWithoutRef<"section"> & Props;

export const Footer2 = (props: Footer2Props) => {
  const {
    image,
    newsletterHeading,
    newsletterDescription,
    inputPlaceholder,
    button,
    termsAndConditions,
    columnLinks,
    socialMediaLinks,
    footerText,
    acknowledgements,
    footerLinks,
  } = {
    ...Footer2Defaults,
    ...props,
  } as Props;
  return (
    <footer className="px-[2%] py-20 md:py-18 lg:py-12 bg-base-content">
      <div className="container">
        <div className=" text-base-white grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 pb-12 md:gap-y-16 md:pb-18 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4 lg:pb-4">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <div className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto">
              <Image src={image.src} alt={image.alt || "default alt text"} width={100} height={100} />
            </div>
            {columnLinks.map((column, index) => (
              <div
                key={`${column.title}-${index}`}
                className="flex flex-col items-start justify-start text-md"
              >
                <h2 className="mb-3 font-semibold md:mb-4">{column.title}</h2>
                <ul>
                  {column.links.map((link, linkIndex) => (
                    <li key={`${link.title}-${linkIndex}`} className="py-2 text-sm">
                      <a
                        href={link.url}
                        className="flex items-center gap-3 focus-visible:outline-none"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col text-base-white">
            <h1 className="mb-3 text-2xl font-semibold md:mb-4">{newsletterHeading}</h1>
            <p className="mb-3 text-sm md:mb-4">{newsletterDescription}</p>
            <div className="max-w-md">
              <div className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4">
                {/* <Input placeholder={inputPlaceholder} /> */}
                <Link href="/contact">
                <Button
                  variant={button.variant}
                  size={button.size}
                  iconRight={button.iconRight}
                  iconLeft={button.iconLeft}
                  className="w-full bg-base-cta-secondary rounded-md  hover:bg-base-white hover:text-base-content "
                 
                >
                  {button.title}
                </Button>
                </Link>
              </div>
             
            </div>
            
          </div>
          <p className="text-lg font-bold">{acknowledgements}</p>
        </div>
        <div className="h-px w-full bg-black " />
        <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-row items-start md:flex-row md:gap-6 lg:items-center">
            <p className="mt-8 md:mt-0">Made with ❤️ by <Link className="underline font-bold" href="https://hinterlandweb.com" target="_blank" rel="noopener noreferrer">Hinterland Web</Link>{footerText}</p>
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-x-0 gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              {footerLinks.map((link, index) => (
                <p key={`${link.title}-${index}`} className="underline">
                  <a href={link.url} className="focus-visible:outline-none">
                    {link.title}
                  </a>
                </p>
              ))}
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            {socialMediaLinks.map((link, index) => (
              <a
                key={`${link.icon}-${index}`}
                href={link.url}
                className="focus-visible:outline-none"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export const Footer2Defaults: Footer2Props = {
  image: {
    src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/C%26A_Logo_HI-RES_no_bg.png",
    alt: "Logo image",
  },
  newsletterHeading: "Make an Enquiry",
  newsletterDescription: "If you have any questions, please feel free to contact us or book a visit to our Kindy:",
  inputPlaceholder: "Enter your email",
  button: {
    title: "Get in Touch",
    variant: "secondary",
    size: "sm",
  },
  termsAndConditions: (
    <p className="text-xs">
      By subscribing you agree to with our{" "}
      <a href="#" className="underline decoration-border-primary focus-visible:outline-none">
        Privacy Policy
      </a>{" "}
      and provide consent to receive updates from our company.
    </p>
  ),
  columnLinks: [
    {
      title: "Our Kindy",
      links: [
        { title: "Our Teachers", url: "/teachers" },
        { title: "Our Philosophy", url: "/philosophy" },
        { title: "Parent Committee", url: "/parent-committee" },
        
      ],
    },
    {
      title: "Facilities",
      links: [
        { title: "Image Gallery", url: "/facilities" },
       
      ],
    },
    {
      title: "Getting Involved",
      links: [
        { title: "Contact Us", url: "/getting-involved" },
        { title: "FAQ", url: "/faq" },
        
      ],
    },
  ],
  socialMediaLinks: [
    { url: "#", icon: <BiLogoFacebookCircle className="size-6" /> },
    { url: "#", icon: <BiLogoInstagram className="size-6" /> },
    // { url: "#", icon: <FaXTwitter className="size-6 p-0.5" /> },
    // { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    // { url: "#", icon: <BiLogoYoutube className="size-6" /> },
  ],
  footerText: " © 2024 All rights reserved.",
  acknowledgements: "We acknowledge the Gubbi Gubbi people, the Traditional Custodians of the land upon which we stand, teach and learn. We pay our respects to their Elders, past and present.",
  footerLinks: [
    { title: "Privacy Policy", url: "#" },
    { title: "Terms of Service", url: "#" },
    { title: "Cookies Settings", url: "#Header" },
  ],
};
