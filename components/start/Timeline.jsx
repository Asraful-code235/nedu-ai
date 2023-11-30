import Image from "next/image";
export default function Timeline() {
  return (
    <section className=" py-20 px-16 2xl:px-32 bg-white">
      <h1 className="visionParagraph text-[40px] font-bold leading-[67px] tracking-[0.8px]">
        NeduAi Timeline
      </h1>

      <div className="relative mt-10 min-h-[80vh] max-w-[1440px] mx-auto flex items-center justify-center">
        <Image
          src={"/timeline/timeline.svg"}
          width={1000}
          height={1000}
          className="w-full  mx-auto h-full object-center object-cover"
        />
        {/* july 2023 */}
        <div className="absolute max-w-[226px] bottom-[9%]  xl:bottom-[6%] left-[-3%] xl:left-0 flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            July 2023
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Filip Bovin, Pasi Orovuo, and Kari Savolainen founded NeduAI,
            <span className="font-normal">
              {" "}
              marking the start of a new era in AI-assisted education and
              recruitment.
            </span>
          </p>
        </div>
        <div className="absolute max-w-[238px] top-[3%] xl:top-[1%] left-[14%] xl:left-[17%] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            August 2023
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Partnership formed with XAMK University{" "}
            <span className="font-normal">
              of Applied Sciences to enhance our service foundation and value
              proposition. Welcomed new members to our advisory board,{" "}
            </span>
            <span className="font-semibold">
              bringing diverse expertise and insights.
            </span>
          </p>
        </div>
        <div className="absolute max-w-[238px] bottom-[9%] xl:bottom-[6%] left-[30%] xl:left-[35%] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Quarter 3-4 2023
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Engaged in extensive networking and sales meetings,{" "}
            <span className="font-normal leading-normal">
              exploring potential partnerships.
            </span>
          </p>
        </div>
        <div className="absolute max-w-[238px] top-[9%] xl:top-[8%] left-[49%] xl:left-[51%] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            October 2023
          </h4>
          <p className="visionParagraph text-base leading-normal font-normal">
            Engaged in extensive networking and sales meetings,Began development
            of the{" "}
            <span className="font-semibold">
              Alpha version of the NeduAI platform.
            </span>
          </p>
        </div>
        <div className="absolute max-w-[238px] bottom-[15%] xl:bottom-[12%] right-[12%] xl:right-[14%] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Quarter 4 2023
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Achieved our first sales and strategic partnership with XAMK,{" "}
            <span className="font-normal leading-normal">
              a significant milestone in bringing our vision to life.
            </span>
          </p>
        </div>
        <div className="absolute max-w-[238px] top-[9vh] xl:top-[8vh] right-[-6vw] xl:right-[-3vw] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Quarter 1 2023
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Launching our first investment round,{" "}
            <span className="font-normal leading-normal">
              inviting investors to join us in our mission to redefine education
              and recruitment.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
