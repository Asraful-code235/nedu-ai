import Image from "next/image";
import Button from "../shared/Button";
import TextChange from "./TextChange";

export default function Hero() {
  return (
    <section className="p-12 px-6 md:px-12 xl:px-32 xl:py-16 h-[80vh] flex items-end xl:items-center justify-center xl:justify-start text-start xl:text-center">
      <div className="text-2xl lg:text-5xl flex flex-col items-center justify-center xl:items-start xl:justify-start gap-3 lg:gap-4 font-semibold leading-[30px] lg:leading-[57px] tracking-[1.2px] lg:tracking-[2.4px]">
        <div className="flex text-white items-start lg:items-center gap-3 w-full">
          <h1 className="text-white text-opacity-80 whitespace-nowrap flex flex-col items-start lg:items-center lg:flex-row justify-start lg:justify-between lg:gap-4">
            The AI-powered
            <span className="whitespace-nowrap flex items-center gap-4">
              future of <TextChange />
            </span>
          </h1>
        </div>
        <div className="visionParagraph flex items-start lg:items-center justify-start lg:justify-center text-start lg:text-center text-sm lg:text-[28px] leading-[20px] lg:leading-[45px]">
          <p className="text-white text-opacity-40 font-normal ">
            Enabling your path to{" "}
            <span className="text-white text-opacity-80 font-semibold lg:font-bold">
              learn, succeed,
            </span>{" "}
            and{" "}
            <span className="text-white text-opacity-80 font-semibold lg:font-bold">
              lead
            </span>{" "}
            globally!
          </p>
        </div>
        <Button className="hidden lg:flex w-fit px-[72px] py-4 items-center gap-3 mt-[32px]">
          <Image
            src={"/icons/IcRoundPhone.png"}
            width={40}
            height={40}
            alt="CellPhone_icon"
            className="w-10 aspect-square"
          />
          Contact Us
        </Button>
        <div className="w-full items-center justify-start gap-3 flex lg:hidden">
          <Button className="flex px-[16px] py-[5px] items-center gap-[10px] text-xs lg:text-xl leading-8 lg:leading-5 tracking-[0.48px] lg:tracking-wider">
            <Image
              src={"/icons/IcRoundPhone.png"}
              width={32}
              height={32}
              alt="CellPhone_icon"
              className="w-4 lg:w-8 h-4 lg:h-8 aspect-square"
            />
            Contact Us
          </Button>
          <span className="rounded-[32px]">
            <Image
              src={"/icons/Social Media CTA.png"}
              width={32}
              height={32}
              alt="CellPhone_icon"
              className="w-8 h-8 object-center object-cover rounded-full cursor-pointer "
            />
          </span>
        </div>
      </div>
    </section>
  );
}
