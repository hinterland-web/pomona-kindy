import { Gallery8, Gallery8Defaults } from "@/components/facilities/Gallery";
import { Layout90, Layout90Defaults } from "../../components/facilities/Header";
import React from "react";

export default function Teachers() {
  return (
    <>
      <Layout90 {...Layout90Defaults} />;
      <Gallery8 {...Gallery8Defaults} />
    </>
  );
}
