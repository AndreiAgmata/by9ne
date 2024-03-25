import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section className="hero-section max-h-screen h-screen overflow-hidden relative">
      <div className="static-overlay absolute bg-red-400 z-20"></div>
      <div className="image-wrapper w-full h-full aspect-square relative">
        <Image
          src={"/hero-assets/png-logo.png"}
          fill
          sizes="100vh"
          className="object-contain"
          alt="background image"
        />
      </div>
      <div className="bottom absolute bottom-0 w-full px-4 pb-6 ">
        <div className="text-container border-t pt-4">
          <p className="text-xs font-light">COMING SOON</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
