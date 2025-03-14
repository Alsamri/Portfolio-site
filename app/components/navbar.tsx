import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
const Navbar: React.FC = () => {
  const sideMenuREF = useRef<HTMLUListElement>(null);
  const openMenu = () => {
    if (sideMenuREF.current) {
      sideMenuREF.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuREF.current) {
      sideMenuREF.current.style.transform = "translateX(16rem)";
    }
  };
  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-65%]">
        <Image
          src={assets.header_bg_color}
          alt="navbar background"
          className="w-full"
        />
      </div>
      <nav
        className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
      flex items-center justify-between z-50"
      >
        <a href="#top">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex item-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50">
          <li>
            <a className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#work">
              My work
            </a>
          </li>
          <li>
            <a className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo"
          >
            Contact{" "}
            <Image src={assets.arrow_icon} alt="arrow-Logo" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>

        <ul
          ref={sideMenuREF}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-blue-50 transition duration-500"
        >
          <div className="absolute right-6 top-6" onClick={closeMenu}>
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#work">
              My work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-Ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
