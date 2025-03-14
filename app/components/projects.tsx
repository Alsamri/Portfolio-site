import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
export const Projects = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my portfolio! As a passionate full-stack developer, I thrive
        on turning ideas into reality. Here, you'll find a selection of projects
        that showcase my journey, skills, and dedication to building impactful
        solutions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {workData.map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div
              key={index}
              className="w-full h-60 bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            >
              <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                <div>
                  <h2 className="font-semibold">{project.title}</h2>
                  <p className="text-sm text-blue-400">{project.description}</p>
                </div>
                <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_1px_0_#000] group-hover:bg-blue-300 transition">
                  <Image src={assets.send_icon} alt="sending" className="w-5" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};
