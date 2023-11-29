"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const items = [
  {
    img: "/images/Gamification.png",
    title: "Gamification",
    desc: "Unlock your potential with our gamification feature - engage actively to access premium content and earn certificates. Stay current, and get rewarded by being highlighted as a top candidate.",
  },
  {
    img: "/images/LearningTracker.png",
    title: "Dream Tracker",
    desc: "Chart your career, follow your aspirations and enhance your journey with tailored learning materials, taking strategic steps towards your future goals.",
  },
  {
    img: "/images/Personalized AI Chatbot.png",
    title: "Market Trends",
    desc: "Key insights for career-seekers and businesses. Discover in-demand skills & courses and align them with evolving market needs.",
  },
  {
    img: "/images/CareerCanvas.png",
    title: "Magic Profile",
    desc: "Effortlessly create your CV in your preferred language. Our tool not only structures it professionally but also ensures it can be reviewed by recruiters in their language of choice, effectively conveying your expertise and boosting your chances of being hired.",
  },
  {
    img: "/images/Multilingual Platform.png",
    title: "NeduAI Advisor",
    desc: "Engage in an intuitive conversation with our AI-driven system to receive personalized feedback on your profile. This guidance not only uncovers unexpected career opportunities but also helps you to articulate your unique strengths and strategically design your career path.",
  },
  {
    img: "/images/Learning Hub.png",
    title: "One-Platform Solution ",
    desc: "Discover the convenience of enhancing your skills and finding work all in one place. Our platform uniquely integrates formal and informal education with leading job market platforms, making it effortlessly simple to keep your profile updated. Sync with our partners to receive the best job offers, tailored just for you.",
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
    <motion.section className="p-6 lg:p-10 lg:px-16 lg:py-16 2xl:px-32 2xl:py-16">
      <h1 className="text-center w-full text-base lg:text-5xl xl:text-6xl font-bold text-white py-8 lg:py-14 xl:py-24 leading-normal tracking-[0.8px]">
        Core features
      </h1>
      <motion.ul
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-12"
      >
        {items.map((item, key) => (
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
            className="flex hover:bg-opacity-80 transition-colors duration-300 p-8 bg-[#111010] rounded-2xl items-center justify-start flex-col gap-3 lg:gap-6"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image
                width={100}
                height={100}
                src={item.img}
                alt={item.title}
                className="w-10 h-10 lg:w-24 lg:h-24 "
              />
              <h3 className="text-darkYellow text-center font-semibold leading-normal tracking-[0.4px] lg:tracking-[0.64px] xl:tracking-[0.8px] text-xl lg:text-[32px] xl:text-4xl">
                {item.title}
              </h3>
            </div>
            <p className="visionParagraph text-xs lg:text-xl xl:text-[22px] leading-5 lg:leading-[40px] lg:tracking-[0.4px] xl:tracking-[0.44px] font-medium text-white text-opacity-80 text-center">
              {item.desc}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
