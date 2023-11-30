"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function Founders({ founder, key }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: 0.3 * key }}
      className="flex bg-[#fafafa] z-20 w-full max-w-[191px] h-full p-0 shadow-md  flex-col items-center  gap-2"
    >
      <div className=" bg-[#edeae8] w-full min-h-[172px] relative overflow-hidden flex items-end justify-end">
        <div className="w-[172px] relative overflow-hidden">
          <Image
            src={founder.img}
            width={400}
            height={400}
            alt={founder.name}
            className="w-full h-full hover:scale-[1.05] transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex p-[6px] flex-col w-full h-full items-center justify-between">
        <div className="flex flex-col w-full items-center justify-center gap-1 2xl:gap-2">
          <h4 className="font-bold flex flex-col items-center justify-center text-base 2xl:text-xl leading-normal flex-shrink-0 text-center">
            {founder.name}
            <span className="font-medium text-center text-base 2xl:text-xl leading-normal text-[#011B2E99]">
              {founder.position}
            </span>
          </h4>
          <p className="text-[11px] text-center 2xl:text-sm font-medium leading-[140%] text-[#011B2E]">
            {founder.division}
          </p>
        </div>
        <motion.div className="flex items-center gap-3 justify-center mt-1 sm:mt-2 lg:mt-0 xl:mt-0">
          <a href={`${founder.linkedIn}`} target="_blank">
            <motion.img
              whileHover={{
                scale: [1, 1.1],
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src="/icons/LinkedIn.svg"
              alt="mail"
              className="w-[26px] h-[26px] hover:shadow-sm"
            />
          </a>
          <a href={`mailto:${founder.mail}`} target="_blank">
            <motion.img
              whileHover={{
                scale: [1, 1.1],
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src="/icons/mailsmall.svg"
              alt="mail"
              className="w-[26px] h-[26px] hover:shadow-sm"
            />
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}
