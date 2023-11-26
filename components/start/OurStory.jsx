import Image from "next/image";
import Button from "../shared/Button";
import Form from "./Form";

const founders = [
  {
    img: "/founders/filip.png",
    name: "Filip Bovin",
    position: "CEO",
    division: "Strategy and Edu Vision",
    mail: "filip@nedu.ai",
  },
  {
    img: "/founders/pasi_o_mc.png",
    name: "Pasi Orovuo",
    position: "CTO",
    division: "Dev. Security Specialist",
    mail: "pasi@nedu.ai",
  },
  {
    img: "/founders/kari_mc.png",
    name: "Kari Savolainen",
    position: "COO, CMO",
    division: "Sales & Partnerships",
    mail: "kari@nedu.ai",
  },
];

export default function OurStory() {
  return (
    <section className="relative !overflow-hidden">
      <Image
        src={"/icons/storysvg1st.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute right-[-25%] md:right-[0%] top-[0%] z-50"
      />
      <Image
        src={"/icons/outteamtop.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute left-[-25%] md:left-[0%] top-[35%] z-50"
      />
      <Image
        src={"/icons/outteambot.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute left-[-25%] md:left-[0%] bottom-[20%] md:bottom-[12%] z-50"
      />
      <Image
        src={"/icons/requestinfo.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute right-[-25%] md:right-[0%] bottom-[0%] z-10"
      />
      <section className="visionParagraph relative py-12 px-4 lg:p-12 xl:px-32 xl:py-32 space-y-6 md:space-y-9 bg-white">
        <h1 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[67px] tracking-[0.6] lg:tracking-[0.96px]">
          Our{" "}
          <span className="text-darkYellow relative">
            Story
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="absolute -top-1 -right-3"
            >
              <g clip-path="url(#clip0_639_8554)">
                <path
                  d="M3.71848 11.6485C5.32185 11.6509 6.89666 11.2242 8.27941 10.4125C8.46125 10.3059 8.44621 10.0439 8.25727 9.95013L7.27344 9.46095C8.1766 9.46095 10.0078 9.09537 10.0078 9.09537C11.9621 7.19552 12.9555 4.45513 12.7006 1.75576C12.6897 1.63835 12.638 1.52847 12.5547 1.44509C12.4713 1.36171 12.3614 1.31008 12.244 1.29912C10.8347 1.16423 9.41349 1.36078 8.09375 1.87306C8.09375 1.87306 7.64203 2.93728 7.54687 3.44533L6.99344 2.67505C6.95419 2.61974 6.89546 2.58135 6.82905 2.5676C6.76264 2.55385 6.69349 2.56577 6.63551 2.60095C4.06438 4.18005 2.35156 6.82501 2.35156 10.418"
                  stroke="#212121"
                  stroke-width="0.8125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1.25781 12.7422C2.625 8.77734 7 5.35937 10.5547 3.44531"
                  stroke="#212121"
                  stroke-width="0.8125"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_639_8554">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
        </h1>
        <article className="grid grid-cols-1 xl:grid-cols-3 ">
          <section className="col-span-2">
            <div className=" flex flex-col gap-4 lg:gap-10 justify-between h-full">
              <div className=" flex flex-col gap-4 lg:gap-10 text-xs lg:text-xl font-medium leading-5 lg:leading-[40px]">
                <p>
                  Picture Spring 2023: NeduAI bursts onto the scene, riding the
                  exhilarating AI wave to forge connections across knowledge
                  realms. With over a decade in tandem with educational
                  institutions and global talents, we&apos;ve been in the
                  trenches, understanding the grind of job seekers, especially
                  those exploring new territories.
                </p>
                <p>
                  Now, with our AI magic in play, it&apos;s not just
                  transformation; we&apos;re rewriting the script on skill
                  recognition—fueled by unbridled curiosity and unwavering
                  ambition. Venture into our tech sanctuary, where the alchemy
                  of talent discovery, seamless communication, and rapid growth
                  unfolds seamlessly!
                </p>
                <div className="hidden xl:flex items-center gap-4">
                  <Button
                    variant="light"
                    className="text-2xl px-10 w-fit font-semibold leading-normal tracking-[0.72px]"
                  >
                    Meet our team
                  </Button>
                  <div className="p-2 bg-black rounded-full">
                    <Image
                      src={"/icons/arrowright.svg"}
                      width={56}
                      height={56}
                      alt="arrow right"
                      className="w-12 h-12 "
                    />
                  </div>
                </div>
                <div className="mt-[114px] md:mt-[65px] flex xl:hidden items-start gap-4 justify-start w-full">
                  <span className="text-2xl lg:px-10 w-full font-semibold leading-normal tracking-[0.72px] border-b border-[#C7C7C7]">
                    Meet our team
                  </span>
                </div>
              </div>
              <section className=" xl:hidden overflow-x-scroll scrollbar-hidden">
                <div className=" flex min-w-[800px] gap-4 lg:gap-14 py-6 items-start lg:items-center justify-start lg:justify-center">
                  {founders.map((founder, key) => (
                    <a
                      href={`mailto:${founder.mail}`}
                      target="_blank"
                      key={key}
                      className=" flex drop-shadow-lg shadow-md rounded-lg flex-col p-4 items-center justify-center gap-3"
                    >
                      <div className="border-[0.8px] border-black rounded-2xl w-[84px] h-[84px] p-4 relative overflow-hidden mb-2">
                        <Image
                          src={founder.img}
                          width={180}
                          height={180}
                          alt={founder.name}
                          className="w-full aspect-square absolute inset-0"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center gap-2">
                        <h4 className="font-bold text-xl xl:text-2xl leading-4 ">
                          {founder.name}
                        </h4>
                        <h3 className="font-medium text-xl lg:text-2xl leading-4 text-[#011B2E99]">
                          {founder.position}
                        </h3>
                        <p className="text-xs xl:text-sm font-medium leading-4 text-[#011B2E]">
                          {founder.division}
                        </p>
                        <div className="flex text-[#011B2E] items-center gap-2 text-xs xl:text-sm font-medium leading-5">
                          <img
                            src="/icons/mail.svg"
                            alt="mail"
                            className="w-5 h-5"
                          />
                          <span className="underline">{founder.mail}</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </section>
              <section className="grid grid-cols-1  mt-6 md:mt-0 md:grid-cols-2 col-span-2 gap-6 lg:gap-10">
                <div className="p-10 relative bg-[#E4EAF5] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-16">
                  <h3 className="text-xl lg:text-[28px] font-bold leading-[32px]">
                    Strategic partnership
                  </h3>
                  <div className="w-44 text-sm font-bold flex flex-col items-center justify-center">
                    <Image
                      src={"/images/XAMK 2.webp"}
                      width={177}
                      height={109}
                      className="w-full h-full"
                    />
                    <p>Kaakkois-Suomen</p>
                    <p>ammattikorkeakoulu</p>
                  </div>
                  <Image
                    src={"/images/stars.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute top-[-50%] scale-[0.1] left-[-40%]"
                  />
                  <Image
                    src={"/images/threestars.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute bottom-[-50%] scale-[0.1] right-[-40%]"
                  />
                  <Image
                    src={"/images/foundermail.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute bottom-[10%] scale-[0.2] right-[-30%]"
                  />
                </div>
                <div className="p-10 relative bg-[#F5FDFF] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-2 lg:gap-5">
                  <h3 className="text-xl lg:text-[28px] font-bold leading-[32px]">
                    Advisory board
                  </h3>
                  <div className="text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2">
                    <p className="font-extrabold">AI Specialists</p>
                    <p className="underline font-medium">
                      Pasi Vuorio - LastBot
                    </p>
                    <p className="underline font-medium">
                      Tero Keski-Valkama - AI, ML , KAIKO
                    </p>
                  </div>
                  <div className=" text-sm lg:text-lg leading-5 lg:leading-6 flex flex-col items-start justify-center gap-[6px] lg:gap-2">
                    <p className="font-extrabold">Business, Tech & Network</p>
                    <p className="underline font-medium">Henri Vass</p>
                  </div>
                  <Image
                    src={"/images/stars.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute top-[-60%] scale-[0.1] left-[-40%]"
                  />
                  <Image
                    src={"/images/threestars.svg"}
                    width={177}
                    height={109}
                    className="w-full absolute bottom-[-50%] scale-[0.1] right-[-40%]"
                  />
                </div>
              </section>
            </div>
          </section>
          <section className=" hidden xl:flex flex-col gap-14 items-center justify-center">
            {founders.map((founder, key) => (
              <div
                key={key}
                className=" flex flex-col items-center justify-center gap-3"
              >
                <div
                  className={`${
                    key == 0
                      ? "bg-[#27AE60]"
                      : key == 1
                      ? "bg-[#30b8e1]"
                      : "bg-[#9c27b0]"
                  } rounded-full w-44 h-44 p-4 relative overflow-hidden mb-2`}
                >
                  <Image
                    src={founder.img}
                    width={180}
                    height={180}
                    alt={founder.name}
                    className="w-full aspect-square absolute inset-0"
                  />
                </div>
                <h4 className="font-bold text-2xl leading-4 ">
                  {founder.name}
                </h4>
                <h3 className="font-medium text-2xl leading-4">
                  {founder.position}
                </h3>
                <p className="text-sm font-medium leading-4">
                  {founder.division}
                </p>
                <div className="flex items-center gap-2 text-sm font-medium leading-5">
                  <img src="/icons/mail.svg" alt="mail" className="w-5 h-5" />
                  <a href={founder.mail} className="underline">
                    {founder.mail}
                  </a>
                </div>
              </div>
            ))}
          </section>
        </article>
        <section className="flex pt-24 flex-col xl:flex-row items-start lg:items-center xl:items-start justify-center xl:justify-between z-50 gap-10 lg:gap-28 ">
          <section className="flex flex-col items-start lg:items-center xl:items-start justify-center gap-2 lg:gap-8 xl:gap-6">
            <div className="flex mt-[66px] w-full items-start lg:items-center justify-start lg:justify-center xl:justify-start gap-3.5">
              <Image
                src={"/images/logo.png"}
                width={49}
                height={49}
                alt="Logo"
                className="w-7 h-7 lg:w-12 lg:h-12 object-center object-cover aspect-square"
              />
              <p className="text-black font-medium lg:font-semibold text-base lg:text-[28px] leading-normal tracking-[0.32px] lg:tracking-widest">
                NeduAI
              </p>
            </div>
            <h3 className="text-lg lg:text-3xl text-center xl:text-start leading-5 lg:leading-3 xl:leading-10 font-semibold ">
              So what are you waiting for?
            </h3>
            <div className="visionParagraph max-w-[448px] text-start lg:text-center xl:text-start text-sm lg:text-xl font-normal leading-[19.6px] lg:leading-8 flex flex-col gap-4 xl:gap-4">
              <p>Interested to join our story?</p>
              <p>
                Leave your details and we’ll send you the link to our investment
                materials.
              </p>
            </div>
          </section>
          <Form />
        </section>
        <footer className="py-3 flex items-center justify-start border-t border-[#7E7E7E]">
          &copy; 2023 NeduAI Oy
        </footer>
      </section>
    </section>
  );
}
