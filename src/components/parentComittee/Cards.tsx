import Image from "next/image";
type ImageProps = {
  src: string;
  alt?: string;
};

type Testimonial = {
  image: ImageProps;
  testimonial: string;
  avatar: ImageProps;
  name: string;
  position: string;
  companyName: string;
};

type Props = {
  heading: string;
  description: string;
  testimonials: Testimonial[];
};

export type Testimonial3Props = React.ComponentPropsWithoutRef<"section"> &
  Partial<Props>;

export const Testimonial3 = (props: Testimonial3Props) => {
  const { heading, description, testimonials } = {
    ...Testimonial3Defaults,
    ...props,
  } as Props;
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-5xl">
            {heading}
          </h2>
          <p className="md:text-md">{description}</p>
        </div>
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-4 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center text-center">
             
              <Image
                src={testimonial.avatar.src}
                alt={testimonial.avatar.alt || "default alt text"}
                width={300}
                height={300}
                className={`mb-4 size-32 min-h-14 min-w-14 rounded-full object-cover ${
                  testimonial.name === "Kristina" ? "object-[center_90%]" : ""
                }`}
              />
              <p className="font-semibold">{testimonial.name}</p>
              <p>
                <span>{testimonial.position}</span>{" "}
                <span>{testimonial.companyName}</span>
              </p>
{/* 
              <blockquote
                className={`my-6 text-base before:content-['"'] after:content-['"'] md:my-8 md:text-xl`}
              >
                {testimonial.testimonial}
              </blockquote> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Testimonial3Defaults: Testimonial3Props = {
  heading: "Meet our 2024 Committee",
  description: "Committee's Motto.",
  testimonials: [
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial: "Say Something about what you want out of this",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1929%20Sarah.jpeg",
        alt: "2024 Committee President",
      },
      name: "Sarah B.",
      position: "President",
      companyName: ""
    },
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1932%20Kristina.jpeg",
        alt: "2024 Committee Vice President",
      },
      name: "Kristina R.",
      position: "Vice President",
      companyName: "",
    },
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1930%20Mel.jpeg",
        alt: "2024 Committee Secretary",
      },
      name: "Mel",
      position: "Secretary",
      companyName: "",
    },
    {
      image: {
        src: "",
        alt: "",
      },
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      avatar: {
        src: "https://pub-31971714d5324882b00b0345130560dd.r2.dev/IMG_1930%20Andre.jpeg",
        alt: "2024 Committee Treasurer",
      },
      name: "André Silva",
      position: "Treasurer",
      companyName: "",
    },
    // {
    //   image: {
    //     src: "",
    //     alt: "",
    //   },
    //   testimonial:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
    //   avatar: {
    //     src: "https://relume-assets.s3.amazonaws.com/placeholder-image.svg",
    //     alt: "Testimonial avatar 3",
    //   },
    //   name: "Name Surname",
    //   position: "Position",
    //   companyName: "Company name",
    // },
  ],
};

Testimonial3.displayName = "Testimonial3";