import Image from "next/image";

export default function MakesUsDifferent() {
  return (
    <section className="dottedBackground p-6 md:p-12 xl:px-32 xl:py-16">
      <section className="relative rounded-2xl lg:rounded-[60px] bg-[#FFE000] py-9 lg:py-28">
        <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center gap-2 lg:gap-8">
          <div className="text-xl px-4 lg:px-0 text-start lg:text-center lg:text-5xl xl:text-6xl font-normal leading-normal text-black text-opacity-90">
            What makes us{" "}
            <span className="font-semibold text-[#407BFF] text-opacity-100">
              different
            </span>
          </div>
          <p className="visionParagraph text-start lg:text-center px-4 lg:px-16 text-xs lg:text-xl xl:text-2xl font-medium text-black text-opacity-90 leading-[166.667%] lg:leading-[40px] lg:tracking-[0.4px] xl:tracking-[0.48px] ">
            Embark on a trailblazing journey with our AI-driven software,
            guiding you to the forefront of learning, job hunting, and
            recruiting. Explore our standout features!
          </p>
        </div>

        <div className="py-8 xl:px-60 xl:py-60 lg:p-[96px] p-6 border border-transparent rounded-lg">
          <div className="DashboardBefore relative flex items-center justify-center">
            <div className=" DashboardBefore1 relative">
              <div className=" DashboardBefore2 relative">
                <div className="w-[60vw] DashboardBefore3 relative">
                  <Image
                    src={"/icons/Dashboard.webp"}
                    width={1600}
                    height={1600}
                    className="w-full object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/callender.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute -bottom-[40%] -left-[24%] scale-[0.6] object-cover ease-out object-center rounded-xl cursor-pointer"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/Realtimejobtraking.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute bottom-[62%] left-[35%] scale-[0.5] object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/FollowUp.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute -top-[12%] right-[47%] scale-[0.4] object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/talentAssessment.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute -bottom-[44%] left-[34%] scale-[0.6] object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
