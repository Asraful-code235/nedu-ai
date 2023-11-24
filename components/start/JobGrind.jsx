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
    <section className="grindGradient w-full relative">
      <section className="p-6 md:p-10 xl:p-32 flex flex-col gap-5 lg:gap-8 xl:gap-16 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center gap-2 lg:gap-6 xl:gap-8">
          <div className="relative">
            <h1 className="text-xl lg:text-2xl md:text-5xl xl:text-6xl font-normal text-white text-opacity-80 leading-normal tracking-[1px] lg:tracking-[2.4px] xl:tracking-[3.2px]">
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
          <p className="visionParagraph text-start lg:text-center text-xs lg:text-xl xl:text-2xl font-normal lg:font-medium text-white leading-5 lg:leading-[45px] tracking-[0.4px] ">
            NeduAI gets it – chasing that dream job is like navigating a puzzle.
            So, we&apos;re flipping the script, sparking an education and career
            revolution with our AI magic. Because your journey deserves the
            extraordinary!
          </p>
        </div>
        <div className="w-fit transition-colors duration-500 delay-500 flex justify-center items-center gap-6 xl:gap-10 p-1 lg:p-[10px] xl:p-4 rounded-full bg-[#2E2E2E] border-2 border-[#595959]">
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

        <section className="mt-16 xl:mt-32">
          {!isNedu ? (
            <section className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-[18px] lg:gap-[57px] xl:gap-[88px]">
              {withoutNeduAi.map((item, key) => (
                <div
                  key={key}
                  className="grindItemBox z-50 flex items-center justify-center flex-col gap-4 px-16 py-7 bg-white"
                >
                  <Image
                    src={item.img}
                    width={160}
                    height={160}
                    alt={item.title}
                    className="w-full aspect-square"
                  />
                  <div className="visionParagraph text-center flex flex-col gap-1 text-xl font-bold leading-normal">
                    <h3 className="">{item.title}</h3>
                    <p className="font-normal text-opacity-70 italic whitespace-nowrap">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          ) : (
            <section className="max-w-[1050px] flex flex-wrap items-center justify-center gap-[18px] lg:gap-[57px] xl:gap-[88px]">
              {withNeduAi.map((item, key) => (
                <div
                  key={key}
                  className="grindItemBoxWithNedu w-72 z-50 flex items-center justify-center flex-col gap-4 px-16 py-7 bg-white"
                >
                  <Image
                    src={item.img}
                    width={160}
                    height={160}
                    alt={item.title}
                    className="w-full aspect-square"
                  />
                  <div className="visionParagraph text-center flex flex-col gap-1 text-xl font-bold leading-normal">
                    <h3 className="">{item.title}</h3>
                    <p className="font-normal text-opacity-70 italic whitespace-nowrap">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </section>
          )}
        </section>
      </section>
    </section>
  );
}
