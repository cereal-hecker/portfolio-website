import * as React from "react";
import { motion, useScroll } from "framer-motion";

export default function Projects() {
  const { scrollY } = useScroll();
  return (
    <div className="h-screen flex px-20 text-white">
      <div className="py-20 w-full">
        <div className="flex items-center">
        <div class="flex-1 w-full h-px bg-white"></div>
          <h1 className="flex pl-10 title-xl text-8xl font-extrabold">Projects</h1>
        </div>
        <div className="flex">
        <div className="items-bottom align-bottom w-64 flex-none ">

        </div>
          <p className="text-3xl flex-1 w-108 description text-right p-12 pl-56 ">
          Hey, I'm a 
          <span> Web Developer</span> and student 
          moonlighting as a computer science major. I'm playing with 
          React, and Tailwind CSS, but let's be real, who 
          isn't these days? I specialize in making websites that are not 
          only functional but also visually appealing, because let's face it, 
          no one wants to spend their time on a website that looks like it was 
          built in the 90s. My portfolio is a collection of my finest works 
          and proof that I'm not just a one-trick pony. So, if you're looking 
          to elevate your online presence, let's team up and create a website 
          that'll make your competition green with envy.
          </p>
        </div>
        <p></p>
      </div>
    </div>
  );
}
