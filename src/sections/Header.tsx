"use client";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import { useRef, useState } from "react";

export const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    console.log("clicked");
  };

  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScrollToSection = (
    sectionRef: React.RefObject<HTMLDivElement>
  ) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm">
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex item-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />

            <nav
              className={`hidden md:flex gap-6 text-black/60 items-center ${
                isDropdownOpen ? "block" : "hidden"
              }`}
            >
              <a
                href="#skills"
                className="text-white px-3 hover:text-gray-500"
                onClick={() => handleScrollToSection(skillsRef)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-white px-3 hover:text-gray-500"
                onClick={() => handleScrollToSection(projectsRef)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white px-3 hover:text-gray-500"
                onClick={() => handleScrollToSection(contactRef)}
              >
                Contact
              </a>
              {/* <a href="#" className="text-white px-3 hover:text-gray-500">
                Blog
              </a> */}
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
                Download Resume
              </button>
            </nav>
            <MenuIcon
              className="h-5 w-5 md:hidden"
              onClick={handleDropdownToggle}
            />
          </div>
        </div>
      </div>
    </header>

    // <div className="py-5">
    //   <div className="container">
    //     <Image src={Logo} alt="Saas Logo" height={40} width={}></Image>
    //   </div>
    // </div>
  );
};
