import Image from "next/image";

export default function ForEducation() {
  return (
    <section className="visionParagraph p-4 lg:p-12 lg:px-16 lg:py-16 2xl:px-32 ">
      <div className="visionParagraph bg-[#2B44E7] rounded-xl lg:rounded-[64px] py-6 lg:py-[82px] xl:py-16 px-3 lg:px-[84px] 2xl:px-[150px] grid grid-cols-1 xl:grid-cols-2 place-content-center place-items-center gap-8 lg:gap-14 xl:gap-10">
        <article className="flex flex-col items-start lg:items-center xl:items-start justify-center gap-1 lg:gap-6">
          <h3 className="visionParagraph text-white w-full text-start lg:text-center xl:text-start text-opacity-60 text-[10px] lg:text-[38px] xl:text-[1.8vw] font-medium leading-5 lg:leading-[30px]">
            For Education
          </h3>
          <h2 className="visionParagraph text-white text-start lg:text-center xl:text-start font-bold lg:font-bold text-[19px] lg:text-[44px] leading-[27.55px] lg:leading-[136.364%] tracking-[-1.32px] ">
            NeduAI empowers students to be self-driven and customize their
            education
          </h2>
          <p className="visionParagraph lg:text-xl text-start lg:text-center tracking-[0.24px] lg:tracking-tight leading-[17.4px] lg:leading-[200%] text-xs xl:text-start text-white font-medium lg:font-medium mt-3 lg:-mt-2">
            Our data-driven course selection helps reduce dropouts and
            accelerate graduation. Active students are rewarded with premium
            content, enabling them to tailor their education to future needs.
            Take advantage of advanced profiling technology and access an
            extensive online library filled with educational resources and the
            latest trends. With NeduAI, education is not just enhanced –
            it&apos;s reimagined.
          </p>
        </article>
        <div className="w-full  aspect-square flex items-center justify-center ">
          <Image
            src={"/images/foreducation.png"}
            width={843}
            height={590}
            alt="dashboard2"
            className="w-full h-full  "
          />
        </div>
      </div>
    </section>
  );
}
