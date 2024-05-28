import Image from "next/image";
import { Navbar1 } from "../components/NavBar";
import { Header5 } from "@/components/Header";
import { Layout423 } from "@/components/Features";
import { Layout77 } from "@/components/Programme";
import { Testimonial3 } from "@/components/Testimonials";

export default function Home() {
  //@ts-ignore
  return (
    <>
      <Header5 />
      <Layout423 />
      <Layout77 />
      <Testimonial3 />
    </>
  );
}
