import Image from "next/image";
export default function Timeline() {
  return (
    <section className="visionParagraph py-6 lg:py-20 px-6 lg:px-16 2xl:px-32 bg-white ">
      {/* <h1 className="visionParagraph text-[40px] font-bold leading-[67px] tracking-[0.8px]">
        NeduAi Timeline
      </h1> */}
      {/* laptop */}
      <div className="relative mt-10 min-h-[80vh] max-w-[1440px] mx-auto hidden lg:flex items-center justify-center">
        <Image
          src={"/timeline/timeline.svg"}
          width={1000}
          height={1000}
          className="w-full  mx-auto h-full object-center object-cover"
        />
        {/* july 2023 */}
        <div className="absolute max-w-[226px] bottom-[9%]  xl:bottom-[4%] left-[-3%] xl:left-0 flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            July ‘23
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
            August ‘23
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
        <div className="absolute max-w-[238px] bottom-[10%] xl:bottom-[11%] left-[34%] xl:left-[35%] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Q3-4 ‘23
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
            October ‘23
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
            Q4 ‘23
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
            Q1 ‘24
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
      {/* mobile */}
      <div className="relative my-10 h-fit mx-auto flex lg:hidden items-center justify-center gap-3 sm:gap-5">
        <Image
          src={"/timeline/mobiletimeline.svg"}
          width={1000}
          height={1000}
          className="w-fit max-[372px]:h-[664px] max-[388px]:h-[70%] h-[698px] max-w-[393px]"
        />
        {/* july 2023 */}
        <div className="flex flex-col max-[387px]:gap-5 gap-7 h-fit -my-2">
          <div className="px-[7px] py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              July ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Filip Bovin, Pasi Orovuo, and Kari Savolainen founded NeduAI,
              <span className="font-normal">
                {" "}
                marking the start of a new era in AI-assisted education and
                recruitment.
              </span>
            </p>
          </div>
          <div className="px-[7px] py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              August ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
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
          <div className="px-[7px] py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              Q3-4 ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Engaged in extensive networking and sales meetings,{" "}
              <span className="font-normal leading-normal">
                exploring potential partnerships.
              </span>
            </p>
          </div>
          <div className="px-[7px] py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              October ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-normal">
              Engaged in extensive networking and sales meetings,Began
              development of the{" "}
              <span className="font-semibold">
                Alpha version of the NeduAI platform.
              </span>
            </p>
          </div>
          <div className="px-[7px] py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              Q4 ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Achieved our first sales and strategic partnership with XAMK,{" "}
              <span className="font-normal leading-normal">
                a significant milestone in bringing our vision to life.
              </span>
            </p>
          </div>
          <div className="px-[7px] py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              Q1 ‘24
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Launching our first investment round,{" "}
              <span className="font-normal leading-normal">
                inviting investors to join us in our mission to redefine
                education and recruitment.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
