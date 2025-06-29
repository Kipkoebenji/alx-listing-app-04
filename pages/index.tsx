import React from "react";
import bgImage from "@/constants/bg.jpg"; // Ensure this path is correct
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="relative h-[60vh] w-full">
        <Image
          src={bgImage}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center">
          <h1 className="text-4xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg mt-4">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>
    </>
  );
}
