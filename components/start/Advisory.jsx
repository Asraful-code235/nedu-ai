export default function Advisory() {
  return (
    <>
      <div className="Advisory p-[32px] lg:p-[40px] z-30 after:absolute after:content-[url('/images/threestars.svg')] after:bottom-8 after:right-8 relative before:absolute before:content-[url('/images/stars.svg')] before:top-4 before:left-5 bg-[#F5FDFF] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-2 lg:gap-5">
        <h3 className="text-xl  lg:text-[28px] font-bold leading-[32px]">
          Advisory board
        </h3>
        <div className="text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2 xl:gap-[10px]">
          <p className="font-extrabold ">AI Specialists </p>
          <p className="underline font-medium flex flex-wrap items-start gap-[10px]">
            Pasi Vuorio - LastBot
            <a href="https://www.linkedin.com/in/pasivuorio" target="_blank">
              <img
                src="/founders/FoundersLinkedIn.svg"
                alt="Linked In"
                className="w-[23px] h-[23px]"
              />
            </a>
          </p>
          <p className="underline font-medium flex flex-wrap items-start gap-[10px]">
            Tero Keski-Valkama - AI, ML , KAIKO
            <a
              href="https://www.linkedin.com/in/terokeskivalkama"
              target="_blank"
            >
              <img
                src="/founders/FoundersLinkedIn.svg"
                alt="Linked In"
                className="w-[23px] h-[23px]"
              />
            </a>
          </p>
        </div>
        <div className="relative text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2 xl:gap-[10px]">
          <p className="font-extrabold">Marketing & Branding</p>
          <p className="underline font-medium flex flex-wrap items-start w-full agp-1">
            Karen Freese - Freese Consulting{"  "}
            <span className="flex gap-[10px]">
              {" "}
              (ex. PepsiCo)
              <a href="https://www.linkedin.com/in/karenfreese" target="_blank">
                <img
                  src="/founders/FoundersLinkedIn.svg"
                  alt="Linked In"
                  className="w-[23px] h-[23px]"
                />
              </a>
            </span>
          </p>
        </div>
        <div className="relative text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2 xl:gap-[10px]">
          <p className="font-extrabold">Business, Tech & Network</p>
          <p className="underline font-medium flex flex-wrap gap-[10px] items-start">
            Henri Vass - WeAre Solutions
            <a href="https://www.linkedin.com/in/henrivass" target="_blank">
              <img
                src="/founders/FoundersLinkedIn.svg"
                alt="Linked In"
                className="w-[23px] h-[23px]"
              />
            </a>
          </p>
        </div>
        {/* <Image
                    src={"/images/stars.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute top-[-60%] scale-[0.1] left-[-40%]"
                  /> */}
      </div>
    </>
  );
}
