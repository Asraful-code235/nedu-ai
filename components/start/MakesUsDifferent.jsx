import Image from "next/image";

export default function MakesUsDifferent() {
  return (
    <section className="dottedBackground px-32">
      <section className=" rounded-[60px] bg-[#FFE000] py-28">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="text-6xl text-center font-normal leading-normal text-black text-opacity-90">
            What makes us{" "}
            <span className="font-semibold text-[#407BFF] text-opacity-100">
              different
            </span>
          </div>
          <p className="visionParagraph text-center text-2xl font-medium text-black text-opacity-90 leading-[40px] tracking-[0.48px] ">
            Embark on a trailblazing journey with our AI-driven software,
            guiding you to the <br />
            forefront of learning, job hunting, and recruiting. Explore our
            standout features!
          </p>
        </div>

        <div className="px-60 py-60 border border-transparent rounded-lg">
          <Image
            src={"/icons/Dashboard.png"}
            width={1600}
            height={1600}
            className="w-full h-full object-cover object-center rounded-xl"
            alt="Dashboard"
          />
        </div>
      </section>
    </section>
  );
}
