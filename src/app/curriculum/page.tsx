import Curriculum from "@/components/curriculum/CurriculumPage";
import {Layout44, Layout44Defaults} from "@/components/curriculum/CurriculumHeader";
import EnrolNowCTA from "@/components/CTA/EnrolNowCTA";
import Banner from "@/components/ui/Banner";

export default function CurriculumPage() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10">
        <Layout44 {...Layout44Defaults} />
        <Curriculum />
          <div className="my-10">
          <Banner />
        </div>
        <EnrolNowCTA />
      </div>
    </div>
  );
}
