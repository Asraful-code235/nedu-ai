import Image from "next/image";
import Button from "../shared/Button";

export default function YouthEmpowerment() {
  return (
    <div className="youthEmpowerment relative  md:py-14 overflow-hidden">
      <section className=" md:py-24 w-full relative [background:url('/icons/youthEmpowermentDesktop.svg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute top-[0px] z-10 left-0 right-0 [background:linear-gradient(180deg,_#000,_rgba(0,_0,_0,_0.6)_51.98%,_rgba(0,_0,_0,_0))] w-screen h-64" />
        <div className="absolute bottom-[0px] z-10 left-0 right-0 [background:linear-gradient(0deg,_#000,_rgba(0,_0,_0,_0.6)_51.98%,_rgba(0,_0,_0,_0))] w-screen h-64" />
        <div className="py-24 md:py-40 flex flex-col-reverse xl:flex-row items-center justify-center place-items-center w-screen">
          <section className="p-4 xl:pl-32 w-full flex-[0.75] flex flex-col items-start md:gap-5 z-20">
            <Image
              src={"/images/unmilogo.svg"}
              width={750}
              height={500}
              alt="conversation Panel"
              className="w-[72px] h-[60px] hidden xl:block z-[5] opacity-80"
            />
            <p className="text-white w-full text-start md:text-center xl:text-start text-opacity-50 font-medium leading-8 text-sm md:text-4xl">
              #unms2023
            </p>
            <h1 className="text-white w-full text-xl md:text-5xl text-start md:text-center xl:text-start font-bold leading-8 md:leading-normal tracking-[1px] md:tracking-[2.4px] capitalize">
              United Nationalities <br />
              Of Marbella Summit, 2023
            </h1>
            <p className="visionParagraph mx-auto max-w-[697px] flex flex-col gap-4 text-start md:text-center xl:text-start xl:max-w-full text-white font-normal md:font-medium text-xs md:text-xl leading-5 md:leading-9">
              Diving into youth well-being, boosting fun and education. exciting
              news — our Happy Helpline gears up for suicide prevention. Join us
              at the event where support, growth, and happiness party together.{" "}
              <br />
              <span className="font-medium leading-5 text-xs">
                Let&apos;s paint a vibrant future for Marbella&apos;s youth!
              </span>
            </p>
            <div className="w-full mt-8 md:mt-0 flex flex-col gap-2 items-start md:items-center xl:items-start justify-center xl:justify-start">
              <Button
                variant="light"
                className="bg-white w-fit text-[#0081B5] px-8 py-[10px] md:px-8 md:py-[8px] rounded-md md:rounded-xl text-xs md:text-2xl tracking-[0.058px] leading-[140.18%] font-semibold border-none"
              >
                <a
                  href="https://happy-helpline-ai.vercel.app/"
                  target="_blank"
                  className=""
                >
                  Get Access
                </a>
              </Button>
              <div className="flex items-center gap-2 ">
                <img
                  className=" w-6 h-6 overflow-hidden opacity-80"
                  alt=""
                  src="/icons/majesticonslock.svg"
                />
                <p className="visionParagraph text-white font-medium leading-9 text-sm text-opacity-80 lg:text-xl">
                  Restricted to registered users
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
              className="w-full grow z-[5]"
            />
            <Image
              src={"/images/unmilogo.svg"}
              width={750}
              height={500}
              alt="conversation Panel"
              className="w-full md:hidden grow z-[5] absolute bottom-[-1%] right-[-40%] scale-[0.1] opacity-50"
            />
          </section>
        </div>
      </section>
    </div>
  );
}
