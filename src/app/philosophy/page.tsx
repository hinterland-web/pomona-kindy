import { Header64, Header64Defaults } from "@/components/philosophy/Header";
import { Content9, Content9Defaults } from "@/components/philosophy/Content";
import React from "react";

export default function Philosopy() {
  return (
    <>
      
      <Header64 {...Header64Defaults} />
      <Content9 {...Content9Defaults} />
    </>
  );
}
