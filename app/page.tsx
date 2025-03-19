"use client";
import { useEffect, useState } from "react";
import AboutMe from "./components/aboutMe";
import ContactMe from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import Navbar from "./components/navbar";
import { Projects } from "./components/projects";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);
  return (
    <>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer isDark={isDark} />
    </>
  );
}
