import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full mx-auto flex flex-col items-center justify-center px-4 pb-4">
      <div className="top w-full flex items-center justify-between mb-8">
        <p className="text-xs font-light">BY9NE</p>
        <div className="image-wrapper w-[3rem] h-[3rem] aspect-square relative">
          <Image
            src={"/hero-assets/svg-logo.svg"}
            fill
            sizes="100vh"
            className="object-cover"
            alt="background image"
          />
        </div>
      </div>
      <input
        type="text"
        className="bg-neutral-950 border-t border-gray-500 w-full max-w-3xl font-thin text-center p-4 text-xs"
        placeholder="EMAIL ADDRESS"
      />
      <button
        type="button"
        className="btn font-light text-center text-xs text-neutral-50 p-4 border w-full max-w-3xl"
      >
        NEVER MISS A DROP
      </button>
      <div className="bottom w-full flex font-light text-xs pt-8 justify-between mt-12 lg:mt-0">
        <div className="links flex flex-col lg:flex-row gap-2">
          <p>SIZE GUIDE</p>
          <p>PRIVACY</p>
          <p>TERMS</p>
          <p>FAQ</p>
          <p>TERMS OF SERVICE</p>
          <p>REFUND POLICY</p>
          <p>DO NOT SELL MY PERSONAL INFORMATION</p>
          <p className="lg:ms-8 mt-6 lg:mt-0">CANADA (CAD $)</p>
        </div>
        <div className="social-media">
          <Link
            href={"https://instagram.com/by9ne"}
            className="text-xs font-light"
          >
            INSTAGRAM
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
