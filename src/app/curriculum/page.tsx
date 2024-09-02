import Curriculum from "@/components/curriculum/CurriculumPage";
import {Layout44, Layout44Defaults} from "@/components/curriculum/CurriculumHeader";
import {Cta7, Cta7Defaults} from "@/components/ourStory/ourStoryCTA";
import Banner from "@/components/ui/Banner";

export default function CurriculumPage() {
  return (
    <div className=" bg-base-white text-base-400">
      <Layout44 {...Layout44Defaults}/>
      <Curriculum />
      <div className="my-10">
        <Banner />
      </div>
      <Cta7 {...Cta7Defaults} />
      
    </div>
  );
}
