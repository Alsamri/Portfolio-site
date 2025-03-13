import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

export const Header: React.FC = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div>
        <Image
          src={assets.profile_img}
          alt=""
          className="rounded-full w-35 h-35"
        />
      </div>
      <h3 className="flex items-center gap-2 text-xl md:text-2x1 mb-3 font-Ovo">
        Hey! I'm Alois Alamri{" "}
        <Image src={assets.hand_icon} alt="" className="rounded-full w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Junior Full-stack developer based in london
      </h1>
      <p className="max-w-2x1 mx-auto font-Ovo">
        I'm a Junior Software Developer passionate about solving problems
        creatively and delivering client-centric products. I’ve contributed to
        both backend and frontend development, ensuring smooth functionality and
        excellent user experiences.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2"
        >
          Contact me{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};
