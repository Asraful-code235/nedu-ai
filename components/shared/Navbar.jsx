import Image from "next/image";
import Button from "./Button";
export default function Navbar() {
  return (
    <header className="p-6 md:p-12 lg:px-16 lg:py-16 2xl:px-32 flex items-center justify-start lg:justify-between">
      <div className="hidden lg:flex items-center justify-center lg:justify-start gap-3.5">
        <Image
          src={"/images/logo.png"}
          width={49}
          height={49}
          alt="Logo"
          className="w-9 h-9 lg:w-12 lg:h-12 object-center object-cover aspect-square"
        />
        <p className="text-white font-medium lg:font-semibold text-base lg:text-[28px] leading-normal tracking-[0.32px] lg:tracking-widest">
          NeduAI
        </p>
      </div>
      <nav className=" items-center gap-[30px] hidden lg:flex">
        <span className="bg-[#2121214D] py-4 px-6 rounded-[32px]">
          <a
            href="https://www.linkedin.com/company/neduai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_597_8566)">
                <path
                  d="M15 0C6.71563 0 0 6.71565 0 15.0001C0 23.2845 6.71563 30.0001 15 30.0001C23.2844 30.0001 30 23.2845 30 15.0001C30 6.71565 23.2844 0 15 0ZM11.3281 21.2173H8.29063V11.4422H11.3281V21.2173ZM9.79063 10.2422C8.83126 10.2422 8.21094 9.56254 8.21094 8.72191C8.21094 7.86409 8.85001 7.20472 9.8297 7.20472C10.8094 7.20472 11.4094 7.86409 11.4281 8.72191C11.4281 9.56254 10.8094 10.2422 9.79063 10.2422ZM22.4219 21.2173H19.3844V15.8001C19.3844 14.5391 18.9438 13.6829 17.8453 13.6829C17.0063 13.6829 16.5078 14.2626 16.2875 14.8204C16.2063 15.0188 16.186 15.3001 16.186 15.5798V21.2157H13.1469V14.5594C13.1469 13.3391 13.1078 12.3188 13.0672 11.4407H15.7063L15.8453 12.7985H15.9063C16.3063 12.161 17.286 11.2204 18.925 11.2204C20.9235 11.2204 22.4219 12.5594 22.4219 15.4376V21.2173Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_597_8566">
                  <rect width="30" height="30.0001" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </a>
        </span>
        <Button className="flex px-8 py-4 tracking-[0.64px] 2xl:tracking-[0.8px] items-center font-semibold leading-[21.6px] gap-3 text-lg lg:text-xl hover:bg-[#FFA937]">
          <Image
            src={"/icons/IcRoundPhone.png"}
            width={32}
            height={32}
            alt="CellPhone_icon"
            className="w-6 2xl:w-8  aspect-square"
          />

          <a href="mailto:info@nedu.ai" target="_blank">
            Contact Us
          </a>
        </Button>
      </nav>
    </header>
  );
}
