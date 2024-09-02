import { Content7 } from "@/components/enrolment/Enrolment";
import { Content8 } from "@/components/enrolment/Fees";
import { Cta7 } from "@/components/ourStory/ourStoryCTA";

export default function Enrolment() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-to-b from-base-white to-base-200"></div>
      <div className="relative z-10">
        <Content7 />
        <Content8 />
        <Cta7 />
      </div>
    </div>
  );
}
