import Image from "next/image";

export default function ForEducation() {
  return (
    <section className="visionParagraph p-4 lg:p-12 xl:px-32 xl:py-16">
      <div className="visionParagraph bg-[#2B44E7] rounded-xl lg:rounded-[64px] py-6 lg:py-[82px] xl:py-16 px-3 lg:px-[84px] xl:px-[150px] grid grid-cols-1 xl:grid-cols-2 place-content-center place-items-center gap-8 lg:gap-14 xl:gap-32">
        <article className="flex flex-col items-start lg:items-center xl:items-start justify-center gap-1 lg:gap-6">
          <h3 className=" text-white w-full text-start lg:text-center xl:text-start text-opacity-60 text-[10px] lg:text-[38px] xl:text-[1.8vw] font-medium leading-5 lg:leading-[30px]">
            For Education
          </h3>
          <h2 className="text-white text-start lg:text-center xl:text-start font-medium lg:font-bold text-lg lg:text-4xl leading-7 lg:leading-10 xl:leading-normal xl:text-[2vw]">
            Unlock brilliance in education with expert guidance
          </h2>
          <p className="lg:text-xl text-start lg:text-center tracking-[0.66px] lg:tracking-[0.24px] leading-4 lg:leading-10 xl:leading-normal text-xs xl:text-[1.3vw] xl:text-start text-white font-normal lg:font-medium mt-3 lg:-mt-2">
            Slash dropouts, fast-track graduation, and explore data-driven
            courses. Our AI magic? Turbocharged profiling, an open-access
            treasure trove of trends, and an expanded course selection in our
            online library! Education reimagined!
          </p>
        </article>
        <div className="w-full aspect-square flex items-center justify-center ">
          <Image
            src={"/images/foreducation.png"}
            width={843}
            height={590}
            alt="dashboard2"
            className="w-full max-w-[776px]  "
          />
        </div>
      </div>
    </section>
  );
}
