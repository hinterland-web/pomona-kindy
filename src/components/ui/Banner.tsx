"use client";

import React, { useState } from "react";
import Image from "next/image";

const Banner: React.FC = () => {
  const bannerImage =
    "https://pub-31971714d5324882b00b0345130560dd.r2.dev/QLD-Gov-Tick-Logo-landscape-for-navbar.png";
  
  return (
    <div className="w-full bg-base-white py-2 my-2">
      <div className="container mx-auto flex justify-center items-center">
        <Image
          src={bannerImage} // Replace with your logo path
          alt="Company Logo"
          width={500}
          height={50}
          priority
        />
        {/* <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default Banner;
