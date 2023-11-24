import Image from "next/image";
export default function WhoWeServe() {
  return (
    <section className="lg:px-[70px] xl:px-32 px-4 py-12 xl:py-24">
      <div className="lg:px-[70px] flex flex-col items-start lg:items-center justify-center text-center gap-6 lg:gap-[34px]">
        <h1 className="visionParagraph text-start lg:text-center text-xl lg:text-5xl xl:text-6xl font-normal leading-normal text-white text-opacity-80">
          Who we <span className="text-darkYellow font-extrabold">serve</span>
        </h1>
        <p className="text-white lg:px-14 text-start lg:text-center text-opacity-80 text-xl lg:text-2xl font-medium lg:leading-[40px] lg:tracking-[0.4px] xl:tracking-[0.48px]">
          Tailored for students, job seekers, and recruiters, our AI-powered
          platform transforms learning, job searches, and talent recruitment
          into an unforgettable experience!
        </p>
      </div>
      <div className="mt-[64px] md:mt-[128px] lg:mt-[196px] flex flex-col-reverse xl:flex-row items-start justify-start gap-24 lg:gap-44 xl:gap-20">
        <article className="visionParagraph  max-w-[733px] mx-auto  xl:flex-[0.75] xl:max-w-[770px] flex flex-col items-start justify-center gap-1 lg:gap-6">
          <h3 className=" text-white text-start lg:text-center w-full text-xs  xl:text-start text-opacity-60 lg:text-4xl font-medium leading-4 lg:leading-[30px]">
            For Recruitment
          </h3>
          <h2 className="text-white w-full text-start text-base lg:text-center xl:text-start font-bold lg:leading-[60px] tracking-[0.34px] lg:text-[40px]">
            Identify the best candidates using
            <br />
            our AI-talent hunt solution
          </h2>
          <p className="text-xs lg:text-xl xl:max-w-full w-full text-start lg:text-center xl:text-start text-white font-medium leading-4 tracking-[0.12px] lg:leading-[40px] mt-4 lg:-mt-2">
            Level up your recruitment game with NeduAI! Unlock innovative
            methods to attract top talents globally. Better understanding,
            better results — our 2-way translation ensures profiles speak the
            right language every time. Elevate your hiring experience
            effortlessly!
          </p>
        </article>
        <div className="w-full aspect-[16/10] flex-1">
          <div className="dashboard2Before relative">
            <div className="dashboard3Before relative">
              <Image
                src={"/images/Dashboard2.png"}
                width={843}
                height={590}
                alt="dashboard2"
                className="w-full h-full"
              />
              <Image
                src={"/icons/dashboard2Before1.png"}
                width={843}
                height={590}
                alt="dashboard2"
                className="w-full scale-[0.36] absolute bottom-[64%] -right-20"
              />
              <Image
                src={"/icons/dashboard2Before2.png"}
                width={843}
                height={590}
                alt="dashboard2"
                className="w-full scale-[0.5] absolute top-[75%] -left-[28%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
