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
    <section className="visionParagraph px-32 py-32 space-y-9 bg-white">
      <h1 className=" text-5xl font-bold leading-[67px] tracking-[0.96px]">
        Our <span className="text-darkYellow">Story</span>
      </h1>
      <article className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section>
          <div className=" flex flex-col gap-10 text-xl font-medium leading-[40px]">
            <p>
              Picture Spring 2023: NeduAI bursts onto the scene, riding the
              exhilarating AI wave to forge connections across knowledge realms.
              With over a decade in tandem with educational institutions and
              global talents, we&apos;ve been in the trenches, understanding the
              grind of job seekers, especially those exploring new territories.
            </p>
            <p>
              Now, with our AI magic in play, it&apos;s not just transformation;
              we&apos;re rewriting the script on skill recognition—fueled by
              unbridled curiosity and unwavering ambition. Venture into our tech
              sanctuary, where the alchemy of talent discovery, seamless
              communication, and rapid growth unfolds seamlessly!
            </p>
            <div className="flex items-center gap-4">
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
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="p-10 bg-[#E4EAF5] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-16">
                <h3 className="text-[28px] font-bold leading-[32px]">
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
              <div className="p-10 bg-[#F5FDFF] border-2 border-[#7D7D7D] rounded-xl flex flex-col items-start justify-start gap-5">
                <h3 className="text-[28px] font-bold leading-[32px]">
                  Advisory board
                </h3>
                <div className="text-lg leading-6 flex flex-col items-start justify-center gap-2">
                  <p className="font-extrabold">AI Specialists</p>
                  <p className="underline font-medium">Pasi Vuorio - LastBot</p>
                  <p className="underline font-medium">
                    Tero Keski-Valkama - AI, ML , KAIKO
                  </p>
                </div>
                <div className="text-lg leading-6 flex flex-col items-start justify-center gap-2">
                  <p className="font-extrabold">Business, Tech & Network</p>
                  <p className="underline font-medium">Henri Vass</p>
                </div>
              </div>
            </section>
          </div>
        </section>
        <section className="flex flex-col gap-14 items-center justify-center">
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
              <h4 className="font-bold text-2xl leading-4 ">{founder.name}</h4>
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
    </section>
  );
}
