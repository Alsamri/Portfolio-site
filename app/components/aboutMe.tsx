import React from "react";
import Image from "next/image";
import { infoList, toolsData } from "@/assets/assets";

const AboutMe: React.FC = () => {
  return (
    <div id="about" className="w-full px-[12%] py-20 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-10">
        <div className="flex-1 text-center">
          <p className="mb-10 max-w-2xl mx-auto font-Ovo">
            I&apos;m a Junior Software Developer with a deep passion for
            learning and continuously improving my skills. I enjoy working on
            both frontend and backend development, with a strong focus on
            JavaScript, TypeScript, React, and Next.js. I&apos;m committed to
            writing clean, efficient code and paying close attention to the
            details that make applications not just functional, but
            user-friendly and seamless.
            <br />
            <br />
            I believe in the power of Test-Driven Development (TDD) to create
            reliable, maintainable software, and I love diving into testing
            frameworks like Jest and Supertest. My experience with databases
            like PostgreSQL, combined with tools like Git and CI/CD, helps me
            build scalable and performant applications that deliver real value.
            <br />
            <br />
            With a keen eye for detail and a collaborative mindset, I thrive in
            Agile environments, always eager to tackle new challenges and learn
            from others to improve the projects I&apos;m working on.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-3xl mx-auto ">
            {infoList.map(({ icon, title, description }, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-400 dark:bg-white/70"
              >
                <Image src={icon} alt={title} className="w-7 mb-5" />
                <div className="flex flex-col items-center">
                  <h3 className="my-2 font-semibold text-gray-700">{title}</h3>
                  <p className="text-gray-600 text-sm text-center">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <h4 className="text-center mb-4 my-6">What I use</h4>
          <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-5">
            {toolsData.map((tool, index) => (
              <li
                className="flex items-center justify-center w-14 h-14 sm:w-15 sm:h-15 md:w-17 md:h-17 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-white/70"
                key={index}
              >
                <Image src={tool} alt="tool" className="w-11 sm:w-13 md:w-12" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
