"use client";

import Image from "next/image";
import React, { ChangeEvent, useEffect, useState } from "react";

function EmailPopUp() {
  const [email, setEmail] = useState("");
  const [hide, setHide] = useState(true);

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
        setHide(true);
      } else {
        setHide(true);
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      setHide(true);
      console.error("Network error:", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(false);
    }, 4000);
  }, []);

  return (
    <section className="email-popUp" hidden={hide}>
      <div className="modal-container fixed h-screen w-screen z-50 top-0 inset-0 flex items-center justify-center ">
        <div className="background-overlay w-full h-full absolute z-10 bg-black opacity-80"></div>
        <div className="modal w-[20rem] h-[28rem] bg-neutral-950 flex flex-col items-center justify-start p-7 relative">
          <Image
            src={"/modal-assets/girl-model.jpeg"}
            alt="modal-image"
            fill
            className="object-cover absolute z-10 opacity-90"
          />
          <div className="content z-40 flex flex-col items-center justify-center mt-14 w-full">
            <p className="font-medium text-xl">NEVER MISS A DROP</p>
            <p className="font-extralight text-xs">JOIN THE LIST</p>
            <div className="image-wrapper w-[3rem] h-[3rem] relative mt-8">
              <Image
                src={"/modal-assets/png-logo-transparent.png"}
                fill
                sizes="100vh"
                className="object-contain"
                alt="background image"
              />
            </div>
            <input
              type="text"
              className="bg-black border border-neutral-50 w-full font-thin text-center p-2 text-xs mb-3 mt-20"
              placeholder="EMAIL ADDRESS"
              onChange={handleChange}
            />

            <button
              type="button"
              className="btn font-light text-center text-xs bg-black text-neutral-50 p-2 border w-full max-w-3xl active:bg-neutral-800"
              onClick={handleSubmit}
            >
              GET ON THE LIST
            </button>
            <p
              className="cursor-pointer text-[0.65rem] font-light underline mt-10"
              onClick={() => setHide(true)}
            >
              NO THANKS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EmailPopUp;
