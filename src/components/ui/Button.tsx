import { Button } from "@relume_io/relume-ui";
import type { ButtonProps, ImageProps } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";
import Link from "next/link";

type Props = {

  buttons: ButtonProps[];
};

export type LearnMoreButtonProps = React.ComponentPropsWithoutRef<"section"> & Props;

export const LearnMoreButtonDefaults: LearnMoreButtonProps = {
    buttons: [
      {
        title: "Learn More",
        variant: "link",
        size: "link",
        iconRight: <RxChevronRight className="size-6" />,
      },
    ],
  };

export const LearnMoreButton = (props: LearnMoreButtonProps) => {
  const { buttons } = {
    ...LearnMoreButtonDefaults,
    ...props,
  } as Props;
  return (
   
      <div className="mt-6 flex items-center gap-x-4 md:mt-8">
        <Link href="/story">
          {buttons.map((button, index) => (
            <Button
              key={`${button.title}-${index}`}
              variant={button.variant}
              size={button.size}
              iconRight={button.iconRight}
          
              className="text-base text-base-400 font-bold text-xl relative group"
            >
              <span className="relative">
                {button.title}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-base-400 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </Button>
          ))}
        </Link>
      </div>
    
  );
};


