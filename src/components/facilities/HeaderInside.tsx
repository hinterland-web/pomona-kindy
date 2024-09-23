import Image from "next/image";

type ImageProps = {
    src: string;
    alt?: string;
  };
  
  type Props = {
    heading: string;
    description: string;
    image: ImageProps;
  };
  
  export type Layout90Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Layout90 = (props: Layout90Props) => {
    const { heading, description, image } = {
      ...Layout90Defaults,
      ...props,
    } as Props;
    return (
      <section className="px-[5%] py-10 md:py-24 lg:py-20">
        <div className="container mb-12 grid grid-cols-1 items-start justify-between gap-x-12 gap-y-8 md:mb-18 md:grid-cols-2 md:gap-x-12 md:gap-y-8 lg:mb-20 lg:gap-x-20">
          <h3 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl">{heading}</h3>
          <div>
            <p className="md:text-md mb-4">{description}</p>
            <h3 className="text-2xl font-semibold mb-2">Previous Incursions Include:</h3>
            <ul className="list-disc pl-5 md:text-md">
              <li>Evergreen Children&apos;s Theatre</li>
              <li>Ocean Life Education</li>
              <li>Rhythm Culture African Drumming</li>
              <li>Bulu Yabun Aboriginal Cultural Workshops</li>
              <li>Wilvo&apos;s (Wildlife Volunteer&apos;s Association)</li>
              <li>Qld Fire & Emergency Services</li>
            </ul>
          </div>
        </div>
        {/* <div>
          <Image src={image.src} className="w-full object-cover" alt={image.alt || "default alt text"} width={100} height={100}/>
        </div> */}
      </section>
    );
  };
  
  export const Layout90Defaults: Layout90Props = {
    heading: "Our Educational Incursions",
    description:
      "We have regular educational incursions ranging from presentations, to cultural showcases and hands-on workshops that align with the Early Years Learning Framework. Incursions are included as part of the Free Kindy program and there are no additional out-of-pocket expenses for parents/carers. Make sure to check upcoming incursions as advertised in the regular program newsletter.",
    image: {
      src: "https://relume-assets.s3.amazonaws.com/placeholder-image-landscape.svg",
      alt: "Placeholder image",
    },
  };
  
  Layout90.displayName = "Layout90";
