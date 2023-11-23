import Image from "next/image";
export default function ForIndividuals() {
  return (
    <div className="px-32 py-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="w-full ">
        <Image
          src={"/images/Dashboard3.png"}
          width={843}
          height={590}
          alt="dashboard2"
          className="w-full h-full"
        />
      </div>
      <article className="visionParagraph flex flex-col items-start justify-center gap-6">
        <h3 className=" text-white text-opacity-60 text-4xl font-medium leading-[30px]">
          For Individuals
        </h3>
        <h2 className="text-white font-bold leading-[60px] text-[40px]">
          Shine Bright, Stand Out!
        </h2>
        <p className="text-xl text-white font-medium leading-[40px] -mt-2">
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
