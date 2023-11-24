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
          className="w-12 h-12 object-center object-cover aspect-square"
        />
        <p className="text-white font-semibold text-[28px] leading-normal tracking-widest">
          NeduAI
        </p>
      </div>
      <nav className=" items-center gap-8 hidden lg:flex">
        <span className="bg-[#2121214D] py-4 px-6 rounded-[32px]">
          <Image
            src={"/icons/Social Media CTA.png"}
            width={32}
            height={32}
            alt="CellPhone_icon"
            className="w-8 h-8 object-center object-cover rounded-full cursor-pointer "
          />
        </span>
        <Button className="flex items-center gap-3 text-lg lg:text-xl leading-5 tracking-wider">
          <Image
            src={"/icons/IcRoundPhone.png"}
            width={32}
            height={32}
            alt="CellPhone_icon"
            className="w-8 aspect-square"
          />
          Contact Us
        </Button>
      </nav>
    </header>
  );
}
