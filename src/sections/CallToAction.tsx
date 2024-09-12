"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import SocialMail from "@/assets/mail.jpeg";
import { motion, useScroll, useTransform } from "framer-motion";
// import {  } from "react";
import { useRef } from "react";

interface CallToActionProps {
  starImageSrc: string;
  springImageSrc: string;
}

export const CallToAction: React.FC<CallToActionProps> = ({
  starImageSrc,
  springImageSrc,
}) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const handleScrollToSection = () => {
    if (sectionRef.current) {
      (sectionRef.current as HTMLElement).scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      className="bg-gradient-to-b from-white to-[#D2DCFF] py-24"
      id="contact"
      ref={sectionRef}
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">
            Ready to take your digital presence to the next level
          </h2>
          <p className="section-description mt-5">
            Reach out to me today and let&apos;s discuss how i can help you
            achieve your goals
            {/* Celebrate the joy of accomplishment with anapp designed to track
            your progress and motivate your efforts */}
          </p>
          <motion.img
            src={starImageSrc}
            alt="Star Image"
            width={360}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={springImageSrc}
            alt="Spring Image"
            width={360}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY,
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <a href="mailto:tumson1000000@gmail.com">
            <button className="btn btn-primary">
              <Image src={SocialMail} alt="Social Mail" width={30} height={5} />
            </button>
          </a>
          {/* <button className="btn btn-text gap-1">
            <span>Learn more</span>
            <ArrowRight className="h-5 w-5" />
          </button> */}
        </div>
      </div>
    </section>
  );
};
