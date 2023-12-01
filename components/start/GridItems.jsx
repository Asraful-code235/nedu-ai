"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    img: "/images/Gamification.png",
    title: "Gamification",
    desc: "Engage and excel with our gamification feature – unlock premium content and earn certificates to be recognized as a top candidate.",
  },
  {
    img: "/images/LearningTracker.png",
    title: "Dream Tracker",
    desc: "Navigate your career path with Dream Tracker – tailored learning for your goals",
  },
  {
    img: "/images/Multilingual Platform.png",
    title: "NeduAI Advisor",
    desc: "Personalize your career path with AI-driven feedback from NeduAI Advisor. ",
  },
  {
    img: "/images/CareerCanvas.png",
    title: "Magic Profile",
    desc: "Create your CV in any language; Magic Profile ensures it resonates with recruiters worldwide.  ",
  },
  {
    img: "/images/Learning Hub.png",
    title: "One-Platform Solution ",
    desc: "Skill enhancement and job search unified – One-Platform Solution connects education with job market opportunities.",
  },
  {
    img: "/images/Personalized AI Chatbot.png",
    title: "Market Trends",
    desc: "Stay ahead with Market Trends – find key skills and courses aligned with market needs.",
  },
];
const firstContainer = [
  {
    img: "/features/noun-coin-812714.svg",
    title: "Gamification",
    excerpt: "Engage and excel with our gamification feature",
    desc: "Unlock premium content and earn certificates to be recognized as a top candidate.",
  },
  {
    img: "/features/Profile.svg",
    title: "Magic Profile",
    excerpt: "Create your CV in any language",
    desc: "Magic Profile ensures it resonates with recruiters worldwide.",
  },
  {
    img: "/features/noun-progress-3835265.svg",
    title: "Dream Tracker",
    excerpt: "Navigate your career path with Dream Tracker",
    desc: "Tailored learning for your goals.",
  },
  {
    img: "/features/Solution.svg",
    title: "One-Platform Solution ",
    excerpt: "Skill enhancement and job search unified",
    desc: "One-Platform Solution connects education with job opportunities.",
  },
  {
    img: "/features/Message.svg",
    title: "NeduAI Advisor",
    excerpt: "Personalize your career path with AI-driven feedback",
    desc: "Elevate with personalized recommendations of courses, job opportunities from NeduAI Advisor. ",
  },
  {
    img: "/features/Market Trend.svg",
    title: "Market Trends",
    excerpt: "Stay ahead with Market Trends ",
    desc: "Find key skills and courses aligned with market needs.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function GridItems() {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  return (
    <motion.section className="p-6 lg:px-16 lg:py-[50px]">
      <h1 className=" text-start md:text-center w-full text-2xl md:text-5xl text-opacity-80 xl:text-6xl font-normal text-white py-8 lg:py-[50px] leading-[160%] tracking-[0.72px]">
        Core{" "}
        <span className="text-[#FFA937] font-semibold text-opacity-100">
          features
        </span>
      </h1>
      <div className=" max-w-[1440px] mx-auto h-full hidden md:flex gap-4 lg:gap-7 justify-center">
        <motion.ul
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-col gap-4 lg:gap-7"
        >
          {firstContainer.slice(0, 2).map((item, key) => (
            <motion.li
              key={key}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 * key }}
              className={`${
                key === 1
                  ? "xl:px-[42px] xl:py-[48px] lg:px-6 lg:py-9 px-[32px] py-[38px] h-fit"
                  : "xl:px-[42px] xl:py-[64px] lg:px-6 lg:py-11 px-[32px] py-[54px] h-full"
              } flex hover:bg-opacity-80 max-w-full p-4 lg:p-0 lg:max-w-[419px] transition-colors duration-300  bg-[#111010] rounded-2xl items-center justify-start flex-col gap-1`}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 lg:w-[72px] lg:h-[72px] "
                />
                <h3 className="text-darkYellow text-center font-semibold leading-[160%] tracking-[0.4px] lg:tracking-[0.56px] text-xl lg:text-[28px]">
                  {item.title}
                </h3>
              </div>
              <div className="max-w-[342px] mx-auto flex flex-col gap-[10px] items-center justify-center">
                <p className="visionParagraph text-sm text-opacity-80 lg:text-xl leading-5 lg:leading-[145%] lg:tracking-[0.4px] font-semibold text-white  text-center">
                  {item.excerpt}
                </p>
                <p className="visionParagraph text-xs lg:text-base leading-5 lg:leading-[145%] lg:tracking-[0.32px] font-normal text-white text-opacity-80 text-center">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.ul
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-col gap-4 lg:gap-7"
        >
          {firstContainer.slice(2, 4).map((item, key) => (
            <motion.li
              key={key}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 * key }}
              className={`${
                key === 0
                  ? "xl:px-[42px] xl:py-[48px] lg:px-6 lg:py-9 px-[32px] py-[38px] h-fit"
                  : "xl:px-[42px] xl:py-[64px] lg:px-6 lg:py-11 px-[32px] py-[54px] h-full"
              } flex hover:bg-opacity-80 max-w-full p-4 lg:p-0 lg:max-w-[419px] transition-colors duration-300  bg-[#111010] rounded-2xl items-center justify-start flex-col gap-1`}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 lg:w-[72px] lg:h-[72px] "
                />
                <h3 className="text-darkYellow text-center font-semibold leading-[160%] tracking-[0.4px] lg:tracking-[0.56px] text-xl lg:text-[28px]">
                  {item.title}
                </h3>
              </div>
              <div className="max-w-[342px] mx-auto flex flex-col gap-[10px] items-center justify-center">
                <p className="visionParagraph text-sm text-opacity-80 lg:text-xl leading-5 lg:leading-[145%] lg:tracking-[0.4px] font-medium text-white  text-center">
                  {item.excerpt}
                </p>
                <p className="visionParagraph text-xs lg:text-base leading-5 lg:leading-[145%] lg:tracking-[0.32px] font-normal text-white text-opacity-80 text-center">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.ul
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-col justify-between gap-4 lg:gap-7 "
        >
          {firstContainer.slice(4, 6).map((item, key) => (
            <motion.li
              key={key}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 * key }}
              className={`${
                key === 1
                  ? "xl:px-[42px] xl:py-[48px] lg:px-6 lg:py-9 px-[32px] py-[38px] h-fit"
                  : "xl:px-[42px] xl:py-[64px] lg:px-6 lg:py-11 px-[32px] py-[54px] h-full"
              } flex hover:bg-opacity-80 max-w-full p-4 lg:p-0 lg:max-w-[419px] transition-colors duration-300  bg-[#111010] rounded-2xl items-center justify-start flex-col gap-1`}
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={item.img}
                  alt={item.title}
                  className="w-10 h-10 lg:w-[72px] lg:h-[72px] "
                />
                <h3 className="text-darkYellow text-center font-semibold leading-[160%] tracking-[0.4px] lg:tracking-[0.56px] text-xl lg:text-[28px]">
                  {item.title}
                </h3>
              </div>
              <div className="max-w-[342px] mx-auto flex flex-col gap-[10px] items-center justify-center">
                <p className="visionParagraph text-sm text-opacity-80 lg:text-xl leading-5 lg:leading-[145%] lg:tracking-[0.4px] font-medium text-white  text-center">
                  {item.excerpt}
                </p>
                <p className="visionParagraph text-xs lg:text-base leading-5 lg:leading-[145%] lg:tracking-[0.32px] font-normal text-white text-opacity-80 text-center">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <div className=" mx-auto h-full md:hidden flex flex-col items-center gap-5 justify-center">
        <motion.ul
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="flex flex-col justify-between gap-4 lg:gap-7 "
        >
          {firstContainer.map((item, key) => (
            <motion.li
              key={key}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 * key }}
              className={`flex hover:bg-opacity-80 px-6 py-16 transition-colors duration-300 bg-[#111010] rounded-2xl items-center justify-start flex-col`}
            >
              <div className="flex flex-col gap-1 items-center justify-center">
                <Image
                  width={100}
                  height={100}
                  src={item.img}
                  alt={item.title}
                  className="w-[35.481px] h-[40px] lg:w-[72px] lg:h-[72px] "
                />
                <h3 className="text-darkYellow text-center font-semibold leading-[160%] tracking-[0.4px] lg:tracking-[0.56px] text-xl lg:text-[28px]">
                  {item.title}
                </h3>
              </div>
              <div className=" mx-auto flex flex-col items-center justify-center gap-1">
                <p className="visionParagraph text-[15px] text-opacity-80 lg:text-xl leading-[145%] tracking-[0.3px] font-medium text-white  text-center">
                  {item.excerpt}
                </p>
                <p className="visionParagraph text-xs lg:text-base leading-[145%] tracking-[0.24px] font-normal text-white text-opacity-80 text-center">
                  {item.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.section>
  );
}
