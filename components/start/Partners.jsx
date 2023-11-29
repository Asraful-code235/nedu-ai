import Image from "next/image";

const images = [
  {
    img: "/images/XAMK 2.webp",
    title: "xamk",
    width: "157px",
    height: "62px",
  },
  {
    img: "/images/google.webp",
    title: "google",
    width: "191.511px",
    height: "62.959px",
  },
  {
    img: "/images/pluralsight.webp",
    title: "pluralsight",
    width: "290px",
    height: "63px",
  },
  {
    img: "/images/microsoft.webp",
    title: "microsoft",
    width: "256px",
    height: "67px",
  },
  {
    img: "/images/edx.svg",
    title: "edx",
    width: "113.349px",
    height: "64px",
  },
  {
    img: "/images/coursera.png",
    title: "coursera",
    width: "238.124px",
    height: "33.812px",
  },

  {
    img: "/images/udemy.webp",
    title: "udemy",
    width: "170px",
    height: "64px",
  },
  {
    img: "/images/linkedin.webp",
    title: "linkedin",
    width: "253px",
    height: "64px",
  },

  {
    img: "/images/openai.webp",
    title: "openai",
    width: "233.471px",
    height: "63px",
  },
];

export default function Partners() {
  return (
    <section className="p-6 md:p-12 overflow-hidden lg:px-16 lg:py-16 2xl:px-32 md:mt-6 lg:mt-20 flex flex-col gap-6 lg:gap-32">
      <div className="flex items-center gap-3 justify-center relative">
        <h1 className="text-white flex items-center justify-center gap-1 flex-wrap text-sm lg:text-5xl text-opacity-80 leading-normal tracking-[0.7px] lg:tracking-[2.4px] text-center">
          <span className="relative flex items-center w-fit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="58"
              viewBox="0 0 52 58"
              fill="none"
              className="-mt-1 mr-1 lg:w-[52px] lg:h-[58px] w-5 h-5"
            >
              <path
                d="M49.9998 23.3677H46.229"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.26489 23.3677H11.0357"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M28.6321 2V5.77076"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5234 8.25977L16.1881 10.927"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M43.7407 8.25977L41.0735 10.927"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M30.2802 15.106C19.1954 24.7817 7.26097 36.9513 3.02137 41.3379C2.02841 42.3648 1.71166 43.8618 2.28356 45.169C2.59528 45.8792 2.96356 46.6547 3.3444 47.3146C3.72525 47.9745 4.21294 48.6808 4.67297 49.3055C5.51762 50.4556 6.97314 50.9282 8.35826 50.5826C14.2771 49.1032 30.7843 44.8535 44.7059 40.0923"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M23.7461 21.0967C23.7461 21.0967 26.3743 23.7262 30.8301 31.4437C35.2871 39.1612 36.2487 42.7522 36.2487 42.7522"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.1076 46.4409L25.8542 49.2288C26.0503 49.9608 26.1002 50.7243 26.0013 51.4757C25.9023 52.227 25.6563 52.9516 25.2773 53.6079C24.8983 54.2642 24.3938 54.8394 23.7925 55.3007C23.1912 55.762 22.505 56.1003 21.7729 56.2964C21.0409 56.4925 20.2774 56.5425 19.526 56.4435C18.7747 56.3446 18.0501 56.0986 17.3939 55.7196C16.7376 55.3406 16.1623 54.8361 15.701 54.2348C15.2397 53.6335 14.9014 52.9473 14.7053 52.2152L14.0844 49.8924"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M29.3188 13.438C29.3188 13.438 32.3317 16.7324 38.3259 27.1158C44.3215 37.498 45.6676 41.7552 45.6676 41.7552"
                stroke="white"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Joining
          </span>{" "}
          forces for a{" "}
          <span className="font-semibold text-darkYellow text-opacity-100">
            better future
          </span>
        </h1>
      </div>
      <div className="overflow-x-auto scrollbar-hidden">
        <div className="flex min-w-[400px] md:min-w-[800px] xl:min-w-full flex-col items-start xl:items-center justify-center gap-6 overflow-x-scroll scrollbar-hidden">
          <section className="flex items-center justify-center gap-5 lg:gap-16">
            {images.slice(0, 5).map((partners, key) => (
              <Image
                key={key}
                width={400}
                height={200}
                src={partners.img}
                alt={partners.title}
                className={`${
                  key === 4
                    ? "w-[32px] h-[17px] sm:w-[66px] sm:h-auto md:w-[113.349px] md:h-auto"
                    : "w-[58px]"
                } sm:w-32 md:w-44 aspect-auto`}
              />
            ))}
          </section>
          <section className="flex items-center justify-center gap-6 lg:gap-16">
            {images.slice(5, 9).map((partners, key) => (
              <Image
                key={key}
                width={400}
                height={200}
                src={partners.img}
                alt={partners.title}
                className={`w-16 sm:w-32 md:w-44 aspect-auto`}
              />
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
