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
      <section className="p-32 flex flex-col gap-16 items-center justify-center">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative">
            <h1 className="text-6xl font-normal text-white text-opacity-80 leading-normal tracking-[3.2px]">
              <span className="text-darkYellow text-opacity-100 font-bold">
                The
              </span>{" "}
              job application{" "}
              <span className="text-darkYellow text-opacity-100 font-bold">
                grind
              </span>{" "}
              is real
            </h1>
            <Image
              src={"/icons/machine.svg"}
              width={40}
              height={40}
              alt="grind__svg"
              className="w-16 h-16 absolute -top-10 right-44"
            />
          </div>
          <p className="visionParagraph text-2xl font-medium text-white leading-[45px] tracking-[0.48px] ">
            NeduAI gets it – chasing that dream job is like navigating a puzzle.
            So, we&apos;re flipping the script, sparking <br />
            an education and career revolution with our AI magic. Because your
            journey deserves the extraordinary!
          </p>
        </div>
        <div className="w-fit transition-colors duration-500 delay-500 flex justify-center items-center gap-10 p-4 rounded-full bg-[#2E2E2E] border-2 border-[#595959]">
          <button
            onClick={() => setIsNedu(false)}
            className={`${
              !isNedu ? "bg-[#ff980e] text-white" : "text-white"
            } px-[52px] py-7 rounded-full text-3xl font-medium leading-normal tracking-[1.6px] `}
          >
            Without NeduAI
          </button>
          <button
            onClick={() => setIsNedu(true)}
            className={`${
              isNedu ? "bg-[#ff980e] text-white" : " text-white"
            } px-[52px] py-7 rounded-full text-3xl font-medium leading-normal tracking-[1.6px] `}
          >
            With NeduAI
          </button>
        </div>

        <section className="mt-32">
          {!isNedu ? (
            <section className="max-w-screen-2xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16">
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
            <section className="max-w-[1050px] flex flex-wrap items-center justify-center  gap-16">
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
