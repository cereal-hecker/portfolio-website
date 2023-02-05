import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {

  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);

  return (
    <div className="h-screen flex px-20 text-white">
      <motion.img
        className="fixed right-32 w-28"
        src="/images/lamp.svg"
        alt="lamp"
        whileHover={{
    scale: 1.3,
    transition: { duration: 1 },
  }}
      />
      <h1 className="text-8xl font-extrabold title-xl mt-16">HEY</h1>
      <motion.img
      className="absolute explore-text"
      src="/images/explore-text.svg" 
      style={{rotate}}
  />

      <img
        src=" /images/space-circle.svg"
        alt="a vv pretty space circle"
        className="mx-auto flex-1 p-12 -ml-32 space"
      />
      <div className="h-full py-28 flex justify-end items-end">
        <h1 className="text-8xl font-extrabold text-right name-header">
          I'M
          <br />
          RIYA
        </h1>

        {/* <p class="text-xl absolute font-medium text-center" style="writing-mode: vertical-rl;">Curved Text</p> */}
      </div>
    </div>
  );
}
