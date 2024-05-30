import { Header5, Header5Defaults } from "@/components/homepage/Header";
import { Layout423, Layout423Defaults } from "@/components/homepage/Features";
import { Layout77, Layout77Defaults } from "@/components/homepage/Programme";
import { Testimonial3, Testimonial3Defaults } from "../components/homepage/Testimonials";


export default function Home() {
  //@ts-ignore
  return (
    <>
      
      <Header5 {...Header5Defaults} />
      <Layout423 {...Layout423Defaults} />
      <Layout77 {...Layout77Defaults} />
      <Testimonial3 {...Testimonial3Defaults} />
    </>
  );
}
