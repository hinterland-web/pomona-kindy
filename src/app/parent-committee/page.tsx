import { Content2, Content2Defaults } from "@/components/parentComittee/Header";
import {
  Testimonial3,
  Testimonial3Defaults,
} from "@/components/parentComittee/Cards";
import { Cta7 } from "@/components/parentComittee/CTA";

export default function ParentCommittee() {
  return (
    <div className="bg-base-white text-base-400">
      <Content2 />
      <Testimonial3 />
      <Cta7 />
    </div>
  );
}
