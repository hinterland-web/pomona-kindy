import { Faq4, Faq4Defaults } from "../../components/faq/FAQ";
import React from "react";

export default function Faq() {
  return (
    <div className="relative text-base-400">
      <div className="absolute inset-0 bg-gradient-primary"></div>
      <div className="relative z-10">
        <Faq4 {...Faq4Defaults} />
        </div>
    </div>
  );
}
