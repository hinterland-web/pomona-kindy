import { Content2, Content2Defaults } from "@/components/parentComittee/Header";
import {
  Testimonial3,
  Testimonial3Defaults,
} from "@/components/parentComittee/Cards";
import { Cta7 } from "@/components/parentComittee/CTA";

export default function ParentCommittee() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10">
        <Content2 />
        <Testimonial3 />
        {/* <Cta7 /> */}
      </div>
    </div>
  );
}
