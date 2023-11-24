"use client";
import Image from "next/image";

const withoutNeduAi = [
  {
    img: "/icons/findingCareer.svg",
    title: "Exploration",
    desc: "Finding a new career",
  },
  {
    img: "/icons/impressivecv.svg",
    title: "Designing",
    desc: "Creating an impressive CV",
  },
  {
    img: "/icons/notify.svg",
    title: "Notify",
    desc: "Inform recruiters/educators",
  },
  {
    img: "/icons/impact.svg",
    title: "Impact",
    desc: "Making a good impression",
  },
  {
    img: "/icons/beginning.svg",
    title: "Beginning",
    desc: "Starting the job search again",
  },
  {
    img: "/icons/lagging.svg",
    title: "Lagging",
    desc: "Getting left at the bottom",
  },
  {
    img: "/icons/downturn.svg",
    title: "Downturn",
    desc: "Jobseekers lack momentum",
  },
  {
    img: "/icons/connect.svg",
    title: "Connect",
    desc: "Get in touch for an interview",
  },
];
const withNeduAi = [
  {
    img: "/icons/perfecting.svg",
    title: "Perfecting",
    desc: "A blueprint for success",
  },
  {
    img: "/icons/strategize.svg",
    title: "Strategize",
    desc: "Set & refine goals with AI ",
  },
  {
    img: "/icons/Track.svg",
    title: "Track",
    desc: "Real-time application tracking",
  },
  {
    img: "/icons/Guide.svg",
    title: "Impress",
    desc: "Make your dream job a reality",
  },
  {
    img: "/icons/Impress.svg",
    title: "Guide",
    desc: "Goal setting with AI",
  },
];

export default function JobGrind({ isNedu, setIsNedu, ...props }) {
  return (
    <section className="w-full relative">
      <section className="p-[23px] md:p-10 xl:p-32 flex flex-col gap-5 lg:gap-8 xl:gap-16 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-2 lg:gap-6 xl:gap-8">
          <div className="relative w-full text-start lg:text-center">
            <h1 className="text-xl lg:text-2xl md:text-5xl xl:text-6xl font-normal text-white text-opacity-80 leading-normal tracking-[0.8px] lg:tracking-[2.4px] xl:tracking-[3.2px]">
              <span className="text-darkYellow text-opacity-100 font-bold">
                The
              </span>{" "}
              job application{" "}
              <span className="text-darkYellow text-opacity-100 font-bold">
                grind
              </span>{" "}
              is real
            </h1>
          </div>
          <p className="visionParagraph text-start lg:text-center text-xs lg:text-xl xl:text-2xl font-normal lg:font-medium text-white text-opacity-80 leading-5 lg:leading-[45px] tracking-tighter lg:tracking-[0.4px] ">
            NeduAI gets it – chasing that dream job is like navigating a puzzle.
            So, we&apos;re flipping the script, sparking an education and career
            revolution with our AI magic. Because your journey deserves the
            extraordinary!
          </p>
        </div>
        <div className="w-fit transition-colors duration-500 delay-500 flex justify-center items-center gap-6 xl:gap-10 p-1 lg:p-[10px] xl:p-4 rounded-full bg-[#2E2E2E] border md:border-2 border-[#595959]">
          <button
            onClick={() => setIsNedu(false)}
            className={`${
              !isNedu ? "bg-[#ff980e] text-white" : "text-white"
            } px-[14px] py-2 lg:px-8 lg:py-4 xl:px-[52px] xl:py-7 rounded-full text-[10px] lg:text-xl xl:text-3xl font-medium leading-normal tracking-[0.5px] lg:tracking-[1px] xl:tracking-[1.6px] `}
          >
            Without NeduAI
          </button>
          <button
            onClick={() => setIsNedu(true)}
            className={`${
              isNedu ? "bg-[#ff980e] text-white" : " text-white"
            } px-[14px] py-2 lg:px-8 lg:py-4 xl:px-[52px] xl:py-7 rounded-full text-[10px] lg:text-xl xl:text-3xl font-medium leading-normal tracking-[0.5px] lg:tracking-[1px] xl:tracking-[1.6px]  `}
          >
            With NeduAI
          </button>
        </div>

        <section className="">
          {!isNedu ? (
            <section className="max-w-screen-2xl flex items-center justify-center">
              <Image
                src={"/icons/withoutNedu.svg"}
                width={160}
                height={160}
                alt={"withoutNedu"}
                className="w-full object-cover object-center"
              />
            </section>
          ) : (
            <section className="max-w-screen-2xl flex items-center justify-center">
              <Image
                src={"/icons/With NudeAI.svg"}
                width={160}
                height={160}
                alt={"withoutNedu"}
                className="w-full object-cover object-center"
              />
            </section>
          )}
        </section>
      </section>
    </section>
  );
}
