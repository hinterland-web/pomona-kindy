import Image from "next/image";


type Props = {
    heading: string;
    children: React.ReactNode;
  };
  
  export type Content7Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;
  
  export const Content7 = (props: Content7Props) => {
    const { heading, children } = {
      ...Content7Defaults,
      ...props,
    } as Props;

    const image = "https://pub-31971714d5324882b00b0345130560dd.r2.dev/Enrolment%202025%20brochure.png";
    const alt = "Enrolment 2025 brochure";
    return (
      <section className="px-[5%] py-16 md:py-24 lg:py-28">
       
        
        <div className="container">
          <div className="mx-auto w-full max-w-lg">
            <h2 className="mb-5 text-5xl font-black md:mb-6 md:text-7xl lg:text-8xl">{heading}</h2>
            <div className="prose text-lg">{children}</div>
          </div>
        </div>

        <div className="flex justify-center p-5">
         
          <div className="bg-base-200 p-4 rounded-lg">
            <Image src={image} alt={alt} width={800} height={600} className="w-auto h-auto" />
          </div>
        
        </div>
        
      </section>
    );
  };
  
  export const Content7Defaults: Content7Props = {
    heading: "Enrolment 2025",
    children: (
      <div>
        <p>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est
          ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique
          consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.
        </p>
        <p>
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In
          tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis
          lobortis at sit dictum eget nibh tortor commodo cursus.
        </p>
        <p>
          Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna
          nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget
          consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla
          adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.
        </p>
      </div>
    ),
  };
  