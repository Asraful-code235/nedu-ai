import Image from "next/image";
import Button from "../shared/Button";

export default function Hero() {
  return (
    <section className="w-full px-32 h-[70vh] flex items-center justify-start text-start">
      <div className="text-5xl flex flex-col gap-2 font-semibold leading-10 tracking-[2.4px]">
        <div className="flex text-white items-center gap-3">
          <h1 className="text-white text-opacity-80">
            The AI-powered future of
          </h1>
          <span className="text-darkYellow">learning</span>
        </div>
        <div className="flex items-center text-[28px] leading-[45px]">
          <p className="text-white text-opacity-80 font-bold">
            The future is now:
          </p>
          <p className="text-white text-opacity-40 font-normal ">
            Your journey, our AI canvas!
          </p>
        </div>
        <Button className="w-fit px-[72px] py-4 flex items-center gap-3 mt-[32px]">
          <Image
            src={"/icons/IcRoundPhone.png"}
            width={40}
            height={40}
            alt="CellPhone_icon"
            className="w-10 aspect-square"
          />
          Contact Us
        </Button>
      </div>
    </section>
  );
}
