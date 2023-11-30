import Image from "next/image";
import Button from "../shared/Button";

export default function YouthEmpowerment() {
  return (
    <div className="youthEmpowerment relative  overflow-hidden">
      <section className=" md:py-24 w-full relative bg-[#0979a7] bg-no-repeat bg-center bg-cover">
        <div className="youthBgTop absolute top-[0px] z-10 left-0 right-0  w-screen " />
        <div className="youthBgBottom absolute bottom-[0%] z-10 left-0 right-0 w-screen h-64" />
        <div className="py-24 md:py-40 flex flex-col-reverse xl:flex-row items-center justify-center place-items-center w-screen">
          <section className="px-4 lg:px-16 lg:py-16 2xl:px-32 2xl:py-16 w-full flex-[1] flex flex-col items-start md:gap-5 z-20">
            <Image
              src={"/images/unmilogo.svg"}
              width={750}
              height={500}
              alt="conversation Panel"
              className="w-[72px] h-[60px] hidden xl:block z-[5] opacity-80"
            />
            <p className="visionParagraph text-white w-full text-start md:text-center xl:text-start text-opacity-50 font-medium leading-8 text-sm md:text-4xl">
              #unms2023
            </p>
            <h1 className="text-white w-full text-xl md:text-5xl text-start md:text-center xl:text-start font-bold leading-8 md:leading-normal tracking-[1px] md:tracking-[2.4px] capitalize">
              United Nationalities Of Marbella Summit, 2023
            </h1>
            <article className="visionParagraph mx-auto max-w-[697px] flex flex-col gap-3 text-start md:text-center xl:text-start xl:max-w-full text-white font-normal md:font-medium text-xs md:text-xl leading-5 md:leading-[28px]">
              <p className="visionParagraph">
                NeduAI is committed to empowering the future, supporting
                non-profits in their mission.
              </p>
              <p className="visionParagraph">
                Through our Happy Helpline solution, designed for youth in need,
                this app not only facilitates access to educational and career
                opportunities but also encourages connection with like-minded
                peers for engaging activities, and offers professional support
                for those facing significant challenges. At our upcoming event,
                we&apos;ll showcase the Happy Helpline AI, a proactive and
                friendly AI-powered app aiding youth to navigate their
                challenges, promoting self-understanding and wellbeing.
              </p>
              <p className="visionParagraph">
                Together, we&apos;re dedicated to ensuring Marbella&apos;s youth
                have the support they need to realize their brightest future.
              </p>
            </article>
            <div className="w-full mt-8 md:mt-0 lg:mt-10 flex flex-col gap-1 lg:gap-3 xl:gap-6 items-start md:items-center xl:items-start justify-center xl:justify-start">
              <Button
                variant="light"
                className="bg-white hover:bg-[#dddddd] transition-colors duration-300 w-fit text-[#0081B5] px-8 py-[8px] md:px-8 md:py-[8px] lg:px-[64px] lg:py-[18px] rounded-md md:rounded-xl text-xs md:text-2xl tracking-[0.058px] leading-[140.18%] font-semibold border-none"
              >
                <a
                  href="https://happy-helpline-ai.vercel.app/"
                  target="_blank"
                  className=""
                >
                  Happy Helpline AI - demo
                </a>
              </Button>
              <div className="flex items-center gap-2 ">
                <img
                  className="w-4 h-4 md:w-6 md:h-6 overflow-hidden opacity-80"
                  alt=""
                  src="/icons/majesticonslock.svg"
                />
                <p className="visionParagraph text-white font-medium leading-9 text-xs md:text-sm text-opacity-80 lg:text-xl">
                  Restricted access for event only
                </p>
              </div>
              <Image
                src={"/images/unmilogo.svg"}
                width={750}
                height={500}
                alt="conversation Panel"
                className="w-[72px] h-[60px] hidden md:block xl:hidden z-[5] opacity-80"
              />
            </div>
          </section>
          <section className="z-10 flex-1 flex-grow  flex items-center justify-center">
            <Image
              src={"/icons/Conversation-pana.svg"}
              width={750}
              height={500}
              alt="conversation Panel"
              className="w-full scale-[0.8] lg:scale-[1]  z-[5]"
            />
            <Image
              src={"/images/unmilogo.svg"}
              width={750}
              height={500}
              alt="conversation Panel"
              className="w-full md:hidden grow z-[5] absolute bottom-[-4%] right-[-40%] scale-[0.08] opacity-90"
            />
          </section>
        </div>
      </section>
    </div>
  );
}
