import Image from "next/image";
export default function Founders({ founder }) {
  return (
    <div className="flex bg-[#fafafa] z-20 w-full max-w-[191px] h-full p-0 shadow-md  flex-col items-center  gap-2">
      <div className=" bg-[#edeae8] w-full min-h-[172px] relative overflow-hidden">
        <Image
          src={founder.img}
          width={400}
          height={400}
          alt={founder.name}
          className="w-full h-full aspect-square"
        />
      </div>
      <div className="flex p-[6px] flex-col w-full h-full items-center justify-between">
        <div className="flex flex-col w-full items-center justify-center gap-1 2xl:gap-2">
          <h4 className="font-bold flex flex-col items-center justify-center text-base 2xl:text-xl leading-normal flex-shrink-0 text-center">
            {founder.name}
            <span className="font-medium text-center text-base 2xl:text-xl leading-normal text-[#011B2E99]">
              {founder.position}
            </span>
          </h4>
          <p className="text-[11px] text-center 2xl:text-sm font-medium leading-[140%] text-[#011B2E]">
            {founder.division}
          </p>
        </div>
        <div className="flex items-center gap-3 justify-center sm:-mt-2">
          <a href={`${founder.linkedIn}`} target="_blank">
            <img
              src="/icons/LinkedIn.svg"
              alt="mail"
              className="w-[26px] h-[26px]"
            />
          </a>
          <a href={`mailto:${founder.mail}`} target="_blank">
            <img
              src="/icons/mailsmall.svg"
              alt="mail"
              className="w-[26px] h-[26px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
