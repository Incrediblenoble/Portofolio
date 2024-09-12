import logo from "@/assets/logosaas.png";
import Image from "next/image";
// import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before:bg-[linear-gradient(to_righ,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]-500 before:absolute">
          <Image
            src={logo}
            width={40}
            height={40}
            alt="Saas logo"
            className="relative"
          />
        </div>

        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#">Skills</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
          {/* <a href="#">Pricing</a> */}
          <a href="#">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          {/* <SocialX /> */}
          <SocialInsta href="" />
          <SocialLinkedIn href="" />
          <SocialPin href="" />
          <SocialYoutube href="" />
        </div>
        <p className="mt-6">
          &copy; 2024 Software Developer, Inc. All right reserved.
        </p>
      </div>
    </footer>
  );
};
