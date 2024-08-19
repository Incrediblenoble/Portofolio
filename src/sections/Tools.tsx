"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const tools = [
  {
    // text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    // text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    // text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    // text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    // text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    // text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    // text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    // text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordn",
    username: "@caseyj",
  },
  {
    // text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    // text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    // text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    // text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    // text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
];

const firstColumn = tools.slice(0, 3);
const secondColumn = tools.slice(3, 6);
const thirdColumn = tools.slice(6, 9);

// const TestimonialsColumn = (props: {
//   testimonials: typeof tools;
//   className?: string;
//   duration?: number;
// }) => (
//   <div className={props.className}>
//     <div
//       //   animate={{
//       //     translateY: "-50%",
//       //   }}
//       //   transition={{
//       //     duration: props.duration || 10,
//       //     repeat: Infinity,
//       //     ease: "linear",
//       //     repeatType: "loop",
//       //   }}
//       className="flex flex-col gap-15 pb-6"
//     >
//       {[...new Array(2)].fill(0).map((_, index) => (
//         <React.Fragment key={index}>
//           {props.testimonials.map(({ text, imageScr, name, username }) => (
//             <div className="card">
//               <div>{text}</div>
//               <div className="flex items-center gap-2 mt-5">
//                 <Image
//                   src={imageScr}
//                   alt=""
//                   width={40}
//                   height={40}
//                   className="h-10 w-10"
//                 />
//                 <div className="flex flex-col">
//                   <div className="font-medium tracking-tight leading-5">
//                     {name}
//                   </div>
//                   <div className="leading-5 tracking-tight">{username}</div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </React.Fragment>
//       ))}
//     </div>
//   </div>
// );

export const Tools = () => {
  const columns = [tools.slice(0, 3), tools.slice(3, 6), tools.slice(6, 9)];

  return (
    <section className="bg-white" id="skills">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Tools</div>
          </div>
          <h2 className="section-title mt-5">
            What tools and technology do you use?
          </h2>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <div className="flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {skillsData.map((skill, index) => (
                <motion.li
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center space-y-4">
              {firstColumn.map(({ imageSrc, name, username }) => (
                <div key={username} className="text-center">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <p className="mt-2 font-medium">{name}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              {secondColumn.map(({ imageSrc, name, username }) => (
                <div key={username} className="text-center">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <p className="mt-2 font-medium">{name}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center space-y-4">
              {thirdColumn.map(({ imageSrc, name, username }) => (
                <div key={username} className="text-center">
                  <Image
                    src={imageSrc}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-md"
                  />
                  <p className="mt-2 font-medium">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
