import Image from "next/image";
import Button from "../shared/Button";
import TextChange from "./TextChange";

export default function Hero() {
  return (
    <section className="p-6 -mt-[38px] md:px-12 xl:px-32 xl:py-16 h-[80vh] flex items-center lg:items-end xl:items-center justify-start lg:justify-center xl:justify-start text-start xl:text-center">
      <div className="text-xl lg:text-2xl xl:text-5xl flex flex-col items-center lg:items-center justify-center lg:justify-center xl:items-start xl:justify-start gap-3 lg:gap-1 xl:gap-4 font-semibold leading-[30px] lg:leading-[57px] tracking-[1.2px] lg:tracking-[2.4px]">
        <div className="flex lg:hidden items-center justify-start w-full gap-[10px]">
          <Image
            src={"/images/logo.png"}
            width={49}
            height={49}
            alt="Logo"
            className="w-9 h-9 lg:w-12 lg:h-12 object-center object-cover aspect-square"
          />
          <p className="text-white font-semibold text-lg lg:text-[28px] leading-normal tracking-[0.4px] lg:tracking-widest">
            NeduAI
          </p>
        </div>
        <div className="flex text-white items-start lg:items-center gap-3 w-full">
          <h1 className="text-white text-xl lg:text-5xl xl:text-5xl text-opacity-80  whitespace-nowrap flex flex-col items-start lg:items-center lg:flex-row justify-start lg:justify-between lg:gap-4 tracking-[1.2px]">
            The AI-powered
            <span className="whitespace-nowrap flex items-center gap-1">
              future of <TextChange />
            </span>
          </h1>
        </div>
        <div className="visionParagraph flex items-start lg:items-center xl:items-start justify-start lg:justify-center xl:justify-start text-start lg:text-center xl:text-start text-sm lg:text-[28px] leading-[20px] tracking-[1px] lg:leading-[45px] -mt-2 lg:mt-1">
          <p className="text-white text-opacity-70 lg:text-opacity-80 font-normal">
            Enabling talents to offer their true potential and get discovered
          </p>
        </div>
        <Button className="hidden text-lg lg:text-xl lg:flex w-fit px-[32px] py-[16px] leading-[108%] tracking-[0.8px] items-center gap-[10px] hover:bg-[#FFA937]">
          <Image
            src={"/icons/IcRoundPhone.png"}
            width={40}
            height={40}
            alt="CellPhone_icon"
            className=" w-8 aspect-square"
          />
          <a href="mailto:info@nedu.ai" target="_blank">
            Contact Us
          </a>
        </Button>
        <div className="w-full items-center justify-start gap-3 flex lg:hidden">
          <Button className="flex px-4 py-0 md:px-[12px] md:py-[7px] lg:px-[16px] lg:py-[5px] items-center gap-[10px] text-xs md:text-sm lg:text-xl leading-8 lg:leading-5 tracking-[0.48px] lg:tracking-wider hover:bg-[#FFA937]">
            <Image
              src={"/icons/IcRoundPhone.png"}
              width={32}
              height={32}
              alt="CellPhone_icon"
              className="w-[10px] lg:w-8 h-4 lg:h-8 aspect-square"
            />
            <a href="mailto:info@nedu.ai" target="_blank">
              Contact Us
            </a>
          </Button>
          <span className=" ">
            <a
              href="https://www.linkedin.com/company/neduai"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="33"
                viewBox="0 0 32 33"
                fill="none"
              >
                <g clip-path="url(#clip0_639_5838)">
                  <path
                    d="M16 0.723145C7.16333 0.723145 0 7.88648 0 16.7231C0 25.5598 7.16333 32.7231 16 32.7231C24.8367 32.7231 32 25.5598 32 16.7231C32 7.88648 24.8367 0.723145 16 0.723145ZM12.0833 23.3548H8.84333V12.9281H12.0833V23.3548ZM10.4433 11.6481C9.42 11.6481 8.75833 10.9231 8.75833 10.0265C8.75833 9.11148 9.44 8.40814 10.485 8.40814C11.53 8.40814 12.17 9.11148 12.19 10.0265C12.19 10.9231 11.53 11.6481 10.4433 11.6481ZM23.9167 23.3548H20.6767V17.5765C20.6767 16.2315 20.2067 15.3181 19.035 15.3181C18.14 15.3181 17.6083 15.9365 17.3733 16.5315C17.2867 16.7431 17.265 17.0431 17.265 17.3415V23.3531H14.0233V16.2531C14.0233 14.9515 13.9817 13.8631 13.9383 12.9265H16.7533L16.9017 14.3748H16.9667C17.3933 13.6948 18.4383 12.6915 20.1867 12.6915C22.3183 12.6915 23.9167 14.1198 23.9167 17.1898V23.3548Z"
                    fill="#BBBBBB"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_639_5838">
                    <rect
                      width="32"
                      height="32"
                      fill="white"
                      transform="translate(0 0.723145)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
