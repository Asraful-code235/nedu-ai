"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function ForIndividuals() {
  return (
    <motion.div className="px-4 py-12 lg:px-16 lg:py-16 2xl:px-32 flex flex-col xl:flex-row gap-6 lg:gap-16 xl:gap-10">
      <div className="w-full 2xl:flex-1 xl:flex-[0.65] flex-1 aspect-square relative">
        <Image
          src={"/icons/Dashboard3.svg"}
          width={1600}
          height={1600}
          alt="dashboard2"
          className="w-full h-full"
        />
        <motion.div
          whileInView={{
            x: [200, 0],
          }}
          whileHover={{ scale: [null, 1.1, 1.14] }}
          transition={{ duration: 0.3 }}
          className="w-full  absolute bottom-[72%] -right-[26%]"
        >
          <Image
            src={"/icons/compliance.png"}
            width={843}
            height={590}
            alt="dashboard2"
            className="scale-[0.4] sm:scale-[0.6] w-full"
          />
        </motion.div>
        <motion.div
          whileInView={{
            x: [-200, 0],
          }}
          whileHover={{ scale: [null, 1.1, 1.14] }}
          transition={{ duration: 0.3 }}
          className="w-full  absolute -bottom-[5%] right-[22%]"
        >
          <Image
            src={"/icons/talentcard.svg"}
            width={843}
            height={590}
            alt="dashboard2"
            className="w-full scale-[0.48]"
          />
        </motion.div>
      </div>
      <article className="visionParagraph flex-[0.75] flex flex-col items-start lg:items-center xl:items-start justify-center gap-1 lg:gap-6 py-8 lg:py-0">
        <h3 className="visionParagraph text-white text-opacity-60 text-xs lg:text-4xl font-normal lg:font-medium leading-4 lg:leading-[30px]">
          For Individuals
        </h3>
        <h2 className="visionParagraph text-white font-bold lg:font-bold leading-[23.8px] lg:leading-[44px] lg:tracking-[-1.32px]  text-[17px] lg:text-[40px] tracking-[0.34px]">
          Take Control, Shape Your Future!
        </h2>
        <p className="visionParagraph text-xs lg:text-xl text-start lg:text-center max-w-full lg:max-w-[704px] xl:max-w-full xl:text-start text-white font-medium lg:font-medium leading-[17.4px] tracking-tight lg:leading-[32px] mt-4 lg:-mt-2">
          Embark on a transformative career journey with NeduAI. Through
          interactive, AI-assisted conversations, we help you define and pursue
          your dream career. NeduAI guides you in setting achievable goals,
          selecting the right educational paths, and incorporating informal
          learning to stay in sync with the ever-changing job market. Utilize
          our GDPR-compliant platform to create AI-optimized, personalized CVs
          and applications that truly stand out. With NeduAI, it’s not just
          about planning your career; it’s about actively shaping it to turn
          your aspirations into tangible opportunities, preparing you for the
          future.
        </p>
      </article>
    </motion.div>
  );
}
