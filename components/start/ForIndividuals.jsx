import Image from "next/image";
export default function ForIndividuals() {
  return (
    <div className="px-4 py-3 lg:p-12 xl:px-32 xl:py-24 flex flex-col xl:flex-row gap-6 lg:gap-16 xl:gap-10">
      <div className="w-full flex-1 aspect-square relative">
        <Image
          src={"/icons/Dashboard3.svg"}
          width={1600}
          height={1600}
          alt="dashboard2"
          className="w-full h-full"
        />
        <Image
          src={"/icons/compliance.png"}
          width={843}
          height={590}
          alt="dashboard2"
          className="w-full scale-[0.6] absolute bottom-[72%] -right-[26%]"
        />
        <Image
          src={"/icons/talentcard.svg"}
          width={843}
          height={590}
          alt="dashboard2"
          className="w-full scale-[0.7] absolute -bottom-[7%] right-[18%]"
        />
      </div>
      <article className="visionParagraph flex-[0.75] flex flex-col items-start lg:items-center xl:items-start justify-center gap-1 lg:gap-6 py-16 lg:py-0">
        <h3 className=" text-white text-opacity-60 text-xs lg:text-4xl font-normal lg:font-medium leading-4 lg:leading-[30px]">
          For Individuals
        </h3>
        <h2 className="text-white font-bold leading-6 lg:leading-[60px] text-base lg:text-[40px] tracking-[0.34px]">
          Shine Bright, Stand Out!
        </h2>
        <p className="text-xs lg:text-xl text-start lg:text-center max-w-full lg:max-w-[704px] xl:max-w-full xl:text-start text-white font-medium leading-4 tracking-[0.12px] lg:leading-[40px] mt-4 lg:-mt-2">
          Your career&apos;s BFF! Chat your dream career into existence and
          watch NeduAI turn it into reality! It&apos;s not just planning;
          it&apos;s your GDPR-compliant magic wand. Pick, print, and power up
          with AI-crafted CVs and applications. Reimagined, reinvented, and
          ready for the future!
        </p>
      </article>
    </div>
  );
}
