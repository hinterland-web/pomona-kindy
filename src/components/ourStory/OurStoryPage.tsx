import { Content1 } from "./OurEnvironment";
import { Content2 } from "./OurHistory";
import { Content3 } from "./OurCurriculum";
import { Cta7 } from "./ourStoryCTA";
import { Header64 } from "../ui/PageHeader";

export default function OurStoryPage() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-base-white via-base-100 to-base-200"></div>
      <div className="relative z-10">
        {/* <Header64 heading="Our Story" description="The Pomona Kindergarten has been around for quite a while, learn a bit more about us!"/> */}
        <Content1 />
        <Content3 />

        <Content2 />
        <Cta7 />
      </div>
    </div>
  );
}
