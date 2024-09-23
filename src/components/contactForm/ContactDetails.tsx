import { BiEnvelope, BiMap, BiMessageDetail, BiPhone } from "react-icons/bi";

type LinkProps = {
  label: string;
  url: string;
};

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: LinkProps;
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  contacts: ContactProps[];
};

export type Contact24Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Contact24 = (props: Contact24Props) => {
  const { tagline, heading, description, contacts } = {
    ...Contact24Defaults,
    ...props,
  } as Props;
  return (
    
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <p className="mb-3 text-lg font-semibold md:mb-4">{tagline}</p>
          <h2 className="rb-5 mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">
            {heading}
          </h2>
          <p className="text-lg">{description}</p>
        </div>
        <div className="grid grid-cols-1 items-start justify-start gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          {contacts.map((contact, index) => (
            <div key={index}>
              <div className="rb-5 mb-5 md:mb-6">{contact.icon}</div>
              <h3 className="mb-3 text-2xl font-bold md:mb-4 md:text-3xl md:leading-[1.3] lg:text-4xl">
                {contact.title}
              </h3>
              <p className="mb-5 md:mb-6 text-md">{contact.description}</p>

              <a className="underline" href={contact.link.url}>
                {contact.link.label}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact24Defaults: Contact24Props = {
  tagline: "We are here to help",
  heading: "Get in Touch",
  description:
    "We’re here to answer your questions, provide information, and assist you in any way we can. Whether you’re a prospective parent interested in enrolling your child or a valued member of our community, your feedback, enquiries, and suggestions are important to us. Feel free to reach out using the form below.",
  contacts: [
    {
      icon: <BiEnvelope className="size-12" />,
      title: "Email",
      description:
        "Make sure to add your phone number, your child's name and your child's date of birth to ensure we can process your enquiry as quickly as possible.",
      link: {
        label: "admin@pomonakindy.com.au",
        url: "mailto:admin@pomonakindy.com.au?subject=Enquiry via your website&body=Phone: %0D%0AChild's Name: %0D%0AChild's Date of Birth:",
      },
    },

    {
      icon: <BiPhone className="size-12" />,
      title: "Phone",
      description:
        "We are mostly available during kindy hours, if we don't answer please leave a message or try again later.",
      link: {
        label: "+61 7 5485 1381",
        url: "tel:+61754851381",
      },
    },
    {
      icon: <BiMap className="size-12" />,
      title: "Office",
      description:
        "We are located in the heart of Pomona on the Stan Topper Park. If you want to take a tour make sure to book an appointment beforehand",
      link: {
        label: "21 Reserve St, Pomona QLD 4568",
        url: "https://maps.app.goo.gl/iFsos2VrScKMWCGW8",
      },
    },
  ],
};
