import Image from "next/image";

const items = [
  {
    img: "/images/Gamification.png",
    title: "Gamification",
    desc: "Level up your learning journey with rewards! Earn points for every step and turn them into premium access or extra learning goodies.",
  },
  {
    img: "/images/LearningTracker.png",
    title: "Learning Tracker",
    desc: "Level up your learning journey with rewards! Earn points for every step and turn them into premium access or extra learning goodies.",
  },
  {
    img: "/images/CareerCanvas.png",
    title: "Career Canvas",
    desc: "Elevate your career with an intricately tailored CV, meticulously shaped by our AI analysis. It's not just a resume; it's your key to unlocking the doors of your dream job.",
  },
  {
    img: "/images/Learning Hub.png",
    title: "Learning Hub",
    desc: "Tailor-made courses, seamless links to the best from Google, Coursera, and beyond. It's more than just learning; it's your path to brilliance!",
  },
  {
    img: "/images/Multilingual Platform.png",
    title: "Multilingual Platform",
    desc: "Go global with our multilingual platform—unlock possibilities for seamless communication and international success!",
  },
  {
    img: "/images/Personalized AI Chatbot.png",
    title: "Personalized AI Chatbot",
    desc: "Our AI chat transforms queries into tailored solutions. Elevate with personalized recommendations, course links, job opportunities, and more.",
  },
];

export default function GridItems() {
  return (
    <section className="px-32 py-40">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {items.map((item, key) => (
          <li
            key={key}
            className="flex p-8 bg-[#111010] rounded-2xl items-center justify-start flex-col gap-6"
          >
            <div className="flex flex-col gap-2 items-center justify-center">
              <Image
                width={100}
                height={100}
                src={item.img}
                alt={item.title}
                className="w-24 h-24 "
              />
              <h3 className="text-darkYellow font-semibold leading-normal tracking-[0.8px] text-4xl">
                {item.title}
              </h3>
            </div>
            <p className="visionParagraph text-[22px] leading-[40px] tracking-[0.44px] font-medium text-white text-opacity-80 text-center">
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
