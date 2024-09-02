import Curriculum from "@/components/curriculum/CurriculumPage";
import {Layout44, Layout44Defaults} from "@/components/curriculum/CurriculumHeader";

export default function CurriculumPage() {
  return (
    <div className=" bg-base-white text-base-400">
      <Layout44 {...Layout44Defaults}/>
      <Curriculum />
    </div>
  );
}
