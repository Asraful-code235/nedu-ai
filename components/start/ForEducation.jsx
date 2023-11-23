import Image from "next/image";

export default function ForEducation() {
  return (
    <section className="px-32 py-14">
      <div className="visionParagraph bg-[#2B44E7] rounded-[64px] px-[150px] py-16 grid grid-cols-1 lg:grid-cols-2 gap-32">
        <article className="flex flex-col items-start justify-center gap-6">
          <h3 className=" text-white text-opacity-60 text-4xl font-medium leading-[30px]">
            For Education
          </h3>
          <h2 className="text-white font-bold leading-[60px] text-[40px]">
            Unlock brilliance in education <br />
            with expert guidance
          </h2>
          <p className="text-xl text-white font-medium leading-[40px] -mt-2">
            Slash dropouts, fast-track graduation, and explore data-driven
            courses. Our AI magic? Turbocharged profiling, an open-access
            treasure trove of trends, and an expanded course selection in our
            online library! Education reimagined!
          </p>
        </article>
        <div className="w-full">
          <Image
            src={"/images/foreducation.png"}
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
