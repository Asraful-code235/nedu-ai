import Image from "next/image";
export default function WhoWeServe() {
  return (
    <section className="px-32 py-24">
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <h1 className="visionParagraph text-6xl font-normal leading-normal text-white text-opacity-80">
          Who we <span className="text-darkYellow font-extrabold">serve</span>
        </h1>
        <p className="text-white text-opacity-80 text-2xl font-medium leading-[40px] tracking-[0.48px]">
          Tailored for students, job seekers, and recruiters, our AI-powered
          platform transforms <br />
          learning, job searches, and talent recruitment into an unforgettable
          experience!
        </p>
      </div>
      <div className="mt-[196px] grid grid-cols-1 lg:grid-cols-2 gap-10">
        <article className="visionParagraph flex flex-col items-start justify-center gap-6">
          <h3 className=" text-white text-opacity-60 text-4xl font-medium leading-[30px]">
            For Recruitment
          </h3>
          <h2 className="text-white font-bold leading-[60px] text-[40px]">
            Identify the best candidates using <br />
            our AI-talent hunt solution
          </h2>
          <p className="text-xl text-white font-medium leading-[40px] -mt-2">
            Level up your recruitment game with NeduAI! Unlock innovative
            methods to attract top talents globally. Better understanding,
            better results — our 2-way translation ensures profiles speak the
            right language every time. Elevate your hiring experience
            effortlessly!
          </p>
        </article>
        <div className="w-full aspect-[16/10]">
          <Image
            src={"/images/Dashboard2.png"}
            width={843}
            height={590}
            alt="dashboard2"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}
