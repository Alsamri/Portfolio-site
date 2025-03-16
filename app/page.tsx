"use client";
import AboutMe from "./components/aboutMe";
import ContactMe from "./components/ContactMe";
import { Header } from "./components/header";
import Navbar from "./components/navbar";
import { Projects } from "./components/projects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Projects />
      <ContactMe />
    </>
  );
}
