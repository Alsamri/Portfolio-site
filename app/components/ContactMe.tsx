import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
export const ContactMe: React.FC = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-no-repeat bg-center bg-[length:50%_auto]"
      style={{ backgroundImage: "url('/footer-bg-color.png')" }}
    >
      <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-Ovo">Get In Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Let&apos;s turn ideas into reality! Whether it&apos;s a quick question
        or a big project, I&apos;m here to help. Reach out using the form below,
        and let&apos;s make something awesome together.
      </p>

      <form className="max-w-2x1 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            type="text"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
          <input
            type="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
          />
        </div>
        <textarea
          rows={6}
          placeholder="Enter your messege"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit{" "}
          <Image
            src={assets.right_arrow_white}
            alt="rightarrow"
            className="w-4"
          />
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
