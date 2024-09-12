"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import Image from "next/image";
import cogImage from "@/assets/cog.png";
import banjoImage from "@/assets/Banjo.jpg";
import secondImage from "@/assets/bjsoft.png";
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from "@/assets/noodle.png";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  // useMotionValueEvent(scrollYProgress, "change", (latestValue) =>
  //   console.log(latestValue)
  // );
  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]"
    >
      <div className="container">
        <div className="md:flex item-center">
          <div className="md:w-[478px]">
            {/* <div className="tag">Version 2.0 is Here</div> */}
            <h1 className="text-2xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              ADEBANJO ADEFAYE <br /> BJSOFT
            </h1>
            <h5 className="text-1xl md:text-2xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              UX designer in a front-end developer’s body
            </h5>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              I enjoy making things look beautiful and engaging while
              maintaining functionality. Along side this, I specialize in
              working in collaborative environments to accomplish an
              all-encompassing goal. I contribute to this dynamic by
              meticulously considering user needs and project objectives. I then
              bring these concepts to life by translating them into elegant and
              efficient code, ensuring that the final product not only meets but
              exceeds expectations. For more info, check out my resume here.
            </p>
            <div className="flex gap-1 ites-center mt-[30px]">
              <a href="/CV.pdf" download>
                <button className="btn btn-primary">Download Resume</button>
              </a>
              <button className="btn btn-text gap-1">
                <Link href="#contact">
                  <span>Contact now</span>
                  <ArrowIcon className="h-5 w-5" />
                </Link>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={banjoImage.src}
              alt="Cog image"
              className="md:absolute md:h-full md:w-auto md-max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
            {/* <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -top-20 -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            /> */}
            <motion.img
              src={secondImage.src}
              width={220}
              height={220}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
