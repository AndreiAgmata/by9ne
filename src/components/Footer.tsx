"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setEmail("");
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };
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
        value={email}
        onChange={handleChange}
      />
      <button
        type="button"
        className="btn font-light text-center text-xs text-neutral-50 p-4 border w-full max-w-3xl active:bg-neutral-800"
        onClick={handleSubmit}
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
