import Image from "next/image";
import Button from "../shared/Button";

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
    mail: "Kari@nedu.ai",
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
      <section className="visionParagraph relative py-3 px-4 lg:p-12 xl:px-32 xl:py-32 space-y-6 md:space-y-9 bg-white">
        <h1 className="text-3xl lg:text-5xl font-bold leading-10 lg:leading-[67px] tracking-[0.6] lg:tracking-[0.96px]">
          Our <span className="text-darkYellow">Story</span>
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
                <div className="mt-[114px] md:mt-[65px] flex xl:hidden items-center gap-4 justify-center w-full">
                  <span className="text-2xl px-10 w-fit font-semibold leading-normal tracking-[0.72px] border-b border-[#C7C7C7]">
                    Meet our team
                  </span>
                </div>
              </div>
              <section className=" xl:hidden overflow-x-scroll scrollbar-hidden">
                <div className=" flex min-w-[800px] gap-14 items-center justify-center">
                  {founders.map((founder, key) => (
                    <div
                      key={key}
                      className="flex flex-col items-center justify-center gap-1"
                    >
                      <div className="bg-[#27AE60] rounded-full w-44 h-44 p-4 relative overflow-hidden mb-2">
                        <Image
                          src={founder.img}
                          width={180}
                          height={180}
                          alt={founder.name}
                          className="w-full aspect-square absolute inset-0"
                        />
                      </div>
                      <h4 className="font-bold text-xl xl:text-2xl leading-4 ">
                        {founder.name}
                      </h4>
                      <h3 className="font-medium text-xl lg:text-2xl leading-4">
                        {founder.position}
                      </h3>
                      <p className="text-xs xl:text-sm font-medium leading-4">
                        {founder.division}
                      </p>
                      <div className="flex items-center gap-2 text-xs xl:text-sm font-medium leading-5">
                        <img
                          src="/icons/mail.svg"
                          alt="mail"
                          className="w-5 h-5"
                        />
                        <a href={founder.mail} className="underline">
                          {founder.mail}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section className="grid grid-cols-1  mt-6 md:mt-0 md:grid-cols-2 col-span-2 gap-6 lg:gap-10">
                <div className="p-10 bg-[#E4EAF5] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-16">
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
                </div>
                <div className="p-10 bg-[#F5FDFF] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-2 lg:gap-5">
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
                </div>
              </section>
            </div>
          </section>
          <section className=" hidden xl:flex flex-col gap-14 items-center justify-center">
            {founders.map((founder, key) => (
              <div
                key={key}
                className="flex flex-col items-center justify-center gap-3"
              >
                <div className="bg-[#27AE60] rounded-full w-44 h-44 p-4 relative overflow-hidden mb-2">
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
        <section className="flex flex-col  xl:flex-row items-start lg:items-center xl:items-start justify-center z-50 gap-28 xl:gap-64">
          <section className="flex flex-col items-start lg:items-center xl:items-start justify-center gap-2 lg:gap-8 xl:gap-6">
            <div className="flex mt-[66px] w-full items-start lg:items-center justify-start lg:justify-center xl:justify-start gap-3.5">
              <Image
                src={"/images/logo.png"}
                width={49}
                height={49}
                alt="Logo"
                className="w-12 h-12 object-center object-cover aspect-square"
              />
              <p className="text-black font-semibold text-[28px] leading-normal tracking-widest">
                NeduAI
              </p>
            </div>
            <h3 className="text-lg lg:text-3xl text-center xl:text-start leading-5 lg:leading-3 xl:leading-10 font-semibold ">
              So what are you waiting for?
            </h3>
            <div className="visionParagraph max-w-[448px] text-start lg:text-center xl:text-start text-sm lg:text-xl font-normal leading-5 lg:leading-8 flex flex-col gap-4 xl:gap-4">
              <p>Interested to join our story?</p>
              <p>
                Leave your details and we’ll send you the link to our investment
                materials.
              </p>
            </div>
          </section>
          <form className="py-10 z-50 w-full max-w-[827px] xl:max-w-[550px] px-6 lg:px-16 flex flex-col gap-7 bg-[#25252599] backdrop-blur rounded-2xl lg:rounded-[32px]">
            <div className="border-b border-opacity-40 w-full flex-col flex items-start">
              <label
                className="text-sm lg:text-base font-semibold text-white leading-5 tracking-[0.7px  ] lg:tracking-[0.8px]"
                htmlFor="firstname"
              >
                First Name*
              </label>
              <input
                type="text"
                id="firstname"
                placeholder="John"
                className="w-full bg-transparent text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
              />
            </div>
            <div className="border-b border-opacity-40 w-full flex-col flex items-start">
              <label
                className="text-base font-semibold text-white leading-5 tracking-[0.8px]"
                htmlFor="lastname"
              >
                Last Name*
              </label>
              <input
                type="text"
                id="lastname"
                placeholder="Doe"
                className="w-full bg-transparent  text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
              />
            </div>
            <div className="border-b border-opacity-40 w-full flex-col flex items-start">
              <label
                className="text-base font-semibold text-white leading-5 tracking-[0.8px]"
                htmlFor="email"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                placeholder="johndoe@mail.xyz"
                className="w-full bg-transparent text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
              />
            </div>
            <div className="border-b border-opacity-40 w-full flex-col flex items-start">
              <label
                className="text-base font-semibold text-white leading-5 tracking-[0.8px]"
                htmlFor="message"
              >
                Message*
              </label>
              <input
                type="text"
                id="message"
                placeholder="Write your message..."
                className="w-full bg-transparent  text-sm font-semibold leading-5 focus-within:border-none focus-within:outline-none outline-none border-none placeholder:text-white placeholder:text-opacity-40"
              />
            </div>
            <div className="w-full flex items-center justify-end">
              <Button
                variant="light"
                className="px-8 py-2 md:py-[12px] lg:py-[18px] w-full sm:w-fit text-sm rounded font-semibold leading-6 tracking-[0.7px] bg-white border-none outline-none"
              >
                Request Info
              </Button>
            </div>
          </form>
        </section>
      </section>
    </section>
  );
}
