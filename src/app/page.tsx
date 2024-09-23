import { Header5, Header5Defaults } from "@/components/homepage/Header";
import { Header36, Header36Defaults } from "@/components/homepage/Header2";
import { Layout423, Layout423Defaults } from "@/components/homepage/Features";
import { Layout77, Layout77Defaults } from "@/components/homepage/Programme";
import {
  Testimonial3,
  Testimonial3Defaults,
} from "../components/homepage/Testimonials";
import {
  Testimonial27,
  Testimonial27Defaults,
} from "../components/homepage/Testimonials2";
import Banner from "@/components/ui/Banner";

export default function Home() {
  //@ts-ignore
  return (
    <div>
      <Header5 {...Header5Defaults} />
     
      <Layout423 {...Layout423Defaults} />
      <Layout77 {...Layout77Defaults} />
      {/* <Testimonial3 {...Testimonial3Defaults} /> */}
      <Testimonial27 {...Testimonial27Defaults} />
    </div>
  );
}
