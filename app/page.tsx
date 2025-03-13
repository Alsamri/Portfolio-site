"use client";
import AboutMe from "./components/aboutMe";
import { Header } from "./components/header";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
    </>
  );
}
