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
    desc: "Inform recruiters/ educators",
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
      <section className="p-[23px] md:p-10 xl:p-32 flex flex-col gap-5 lg:gap-8 xl:gap-16 items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center text-center gap-2 lg:gap-6 xl:gap-8">
          <div className="relative w-full text-start lg:text-center">
            <h1 className="text-xl lg:text-5xl xl:text-6xl font-normal text-white text-opacity-80 lg:leading-normal tracking-[1px] lg:tracking-[2.4px] xl:tracking-[3.2px]">
              <span className="text-darkYellow text-opacity-100 font-bold">
                The{" "}
              </span>
              job application{" "}
              <span className="text-darkYellow relative text-opacity-100 font-bold">
                grind{" "}
                <Image
                  src={"/images/gearset.svg"}
                  width={100}
                  height={100}
                  alt="gearset"
                  className="absolute w-7 lg:w-14 top-[-120%] lg:top-[-80%] right-[-20%] lg:right-[-15%] xl:right-[-10%] xl:top-[-60%]"
                />
              </span>
              is real
            </h1>
          </div>
          <p className="visionParagraph max-w-[1316px] mx-auto text-start lg:text-center text-xs lg:text-xl xl:text-2xl font-normal lg:font-medium text-white text-opacity-80 leading-5 lg:leading-[45px] tracking-tighter lg:tracking-[0.4px] ">
            At NeduAI, we recognize the challenges faced by both applicants and
            recruiters – the inundation of applications, the struggle for
            recruiters to thoroughly review each one, and the often impersonal
            nature of the process.
          </p>
        </div>
        <div className="w-fit transition-colors duration-500 delay-500 flex justify-center items-center gap-6 xl:gap-10 p-1 lg:p-[10px] xl:p-4 rounded-full bg-[#2E2E2E] border  md:border-2 border-[#595959]">
          <button
            onClick={() => setIsNedu(false)}
            className={`${
              !isNedu ? "bg-[#ff980e] text-white" : "text-white"
            } px-[14px] py-1.5 lg:px-8 lg:py-4 xl:px-[52px] xl:py-7 rounded-full text-[10px] lg:text-xl xl:text-3xl font-medium leading-normal tracking-[0.5px] lg:tracking-[1px] xl:tracking-[1.6px] `}
          >
            Without NeduAI
          </button>
          <button
            onClick={() => setIsNedu(true)}
            className={`${
              isNedu ? "bg-[#ff980e] text-white" : " text-white"
            } px-[14px] py-1.5 lg:px-8 lg:py-4 xl:px-[52px] xl:py-7 rounded-full text-[10px] lg:text-xl xl:text-3xl font-medium leading-normal tracking-[0.5px] lg:tracking-[1px] xl:tracking-[1.6px]  `}
          >
            With NeduAI
          </button>
        </div>

        <section className=" w-full">
          {!isNedu ? (
            <div className="neduAiGrind  ">
              <section className="max-w-[1248px] mx-auto hidden md:flex items-center justify-center">
                <Image
                  src={"/icons/withoutNedu.svg"}
                  width={160}
                  height={160}
                  alt={"withoutNedu"}
                  className="w-full object-cover object-center"
                />
              </section>
              <section className=" py-6 p-3 block md:hidden scrollbar-hidden overflow-x-scroll ">
                <div className="flex items-start justify-start gap-8 min-w-[1150px] ">
                  {withoutNeduAi.map((item, key) => (
                    <div
                      key={key}
                      className={`flex w-fit relative flex-shrink-0 flex-col justify-center items-end ${
                        key % 2 !== 0 ? "mt-20" : ""
                      }`}
                    >
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
                          <Image
                            src={item.img}
                            width={160}
                            height={160}
                            alt={"withoutNedu"}
                            className="w-full h-full scale-[0.8] rounded-full"
                          />
                        </div>
                        <span className="text-white absolute top-[-10%] left-[-48%] text-opacity-30 text-xl font-bold leading-normal">
                          0{key + 1}
                        </span>
                      </div>
                      <div className="visionParagraph text-white flex flex-col justify-center items-end">
                        <h3 className="text-xs leading-normal font-bold text-right">
                          {item.title}
                        </h3>
                        <p className="text-right max-w-[96px] text-opacity-70 text-[10px] italic tracking-[0.01px] font-normal leading-normal">
                          {item.desc}
                        </p>
                      </div>
                      <Image
                        src={"/images/arrowdown.svg"}
                        width={4}
                        height={400}
                        className="w-1 h-full absolute -right-[20%] top-0 bottom-0"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          ) : (
            <div className="neduAiGrind overflow-hidden ">
              <section className="max-w-[1248px] mx-auto  hidden md:flex items-center justify-center">
                <Image
                  src={"/icons/With NudeAI.svg"}
                  width={160}
                  height={160}
                  alt={"withoutNedu"}
                  className="w-full object-cover object-center"
                />
              </section>
              <section className="py-6 p-3 block md:hidden scrollbar-hidden overflow-x-scroll ">
                <div className="flex items-start justify-start gap-8 min-w-[700px] ">
                  {withNeduAi.map((item, key) => (
                    <div
                      key={key}
                      className={`flex w-fit relative flex-shrink-0 flex-col justify-center items-end ${
                        key % 2 !== 0 ? "mt-20" : ""
                      }`}
                    >
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-white overflow-hidden">
                          <Image
                            src={item.img}
                            width={160}
                            height={160}
                            alt={"withoutNedu"}
                            className="w-full h-full scale-[0.8]"
                          />
                        </div>
                        <span className="text-[#FF980E] absolute top-[-10%] left-[-48%]  text-xl font-bold leading-normal">
                          0{key + 1}
                        </span>
                      </div>
                      <div className="visionParagraph text-white  flex flex-col justify-center items-end">
                        <h3 className="text-xs leading-normal font-bold text-right">
                          {item.title}
                        </h3>
                        <p className="text-right max-w-[84px] text-[10px] italic font-normal leading-normal">
                          {item.desc}
                        </p>
                      </div>
                      <Image
                        src={"/icons/arroworangedown.svg"}
                        width={4}
                        height={400}
                        className="w-1 h-full absolute -right-[20%] top-0 bottom-0"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </section>
      </section>
    </section>
  );
}
