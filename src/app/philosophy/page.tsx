import { Header64, Header64Defaults } from "@/components/philosophy/Header";
import { Content9, Content9Defaults } from "@/components/philosophy/Content";
import React from "react";

export default function Philosopy() {
  return (
    <div className="bg-base-white text-base-400">
      
      {/* <Header64 {...Header64Defaults} /> */}
      <Content9 {...Content9Defaults} />
    </div>
  );
}
