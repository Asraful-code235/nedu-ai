import Image from "next/image";
import Button from "./Button";
export default function Navbar() {
  return (
    <header className="p-12 xl:px-32 xl:py-16 flex items-center justify-center lg:justify-between">
      <div className="flex items-center justify-center lg:justify-start gap-3.5">
        <Image
          src={"/images/logo.png"}
          width={49}
          height={49}
          alt="Logo"
          className="w-7 h-7 lg:w-12 lg:h-12 object-center object-cover aspect-square"
        />
        <p className="text-white font-medium lg:font-semibold text-base lg:text-[28px] leading-normal tracking-[0.32px] lg:tracking-widest">
          NeduAI
        </p>
      </div>
      <nav className=" items-center gap-8 hidden lg:flex">
        <span className="bg-[#2121214D] py-4 px-6 rounded-[32px]">
          <a
            href="https://www.linkedin.com/company/neduai/?trk=similar-pages&originalSubdomain=fi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="hover:bg-[#89adcc] hover:bg-opacity-100 transition-all duration-500 bg-white bg-opacity-40 px-1.5 py-1.5 text-xl font-semibold leading-5 tracking-[0.8px] rounded-full">
              in
            </div>
          </a>
        </span>
        <Button className="flex items-center gap-3 text-lg lg:text-xl leading-5 tracking-wider hover:bg-[#FFA937]">
          <Image
            src={"/icons/IcRoundPhone.png"}
            width={32}
            height={32}
            alt="CellPhone_icon"
            className="w-8 aspect-square"
          />

          <a href="mailto:info@nedu.ai" target="_blank">
            Contact Us
          </a>
        </Button>
      </nav>
    </header>
  );
}
