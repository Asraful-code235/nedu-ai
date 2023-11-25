import Image from "next/image";

export default function MakesUsDifferent() {
  return (
    <section className="dottedBackground p-6 md:p-12 xl:px-32 xl:py-16">
      <section className="relative rounded-2xl lg:rounded-[60px] bg-[#FFE000] py-9 lg:py-28">
        <div className="flex flex-col items-start lg:items-center justify-start lg:justify-center gap-2 lg:gap-8">
          <div className="text-xl px-4 lg:px-0 text-start lg:text-center lg:text-5xl xl:text-6xl font-normal leading-normal text-black text-opacity-90">
            What makes us{" "}
            <span className="font-semibold relative text-[#407BFF] text-opacity-100">
              different
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" absolute -top-4 -right-4 w-5 h-5 lg:w-9 lg:h-9 lg:-top-6 lg:-right-6"
              >
                <g clip-path="url(#clip0_723_883)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.19208 17.7503C9.4792 18.0437 9.91299 18.1138 10.292 17.9555C11.5138 17.4445 12.6781 16.7958 13.7705 16.0535C18.185 13.0555 20.0198 8.18361 15.8788 4.00899C11.8721 -0.0306042 6.76525 1.94445 3.94075 6.12969C3.19717 7.23185 2.53719 8.42806 2.02989 9.6726C1.88055 10.0397 1.94518 10.4574 2.22916 10.7337C2.75963 11.2503 3.76928 12.0478 5.17652 12.3462C5.60955 12.4381 6.0346 12.2095 6.26515 11.8318C6.70049 11.1183 7.41983 9.95248 7.88993 9.25611C9.2698 7.21153 11.1731 6.34069 12.3731 7.55038C13.5735 8.76046 12.8123 10.6856 10.7185 12.1079C10.0003 12.5955 8.77166 13.3317 8.06287 13.7506C7.72135 13.9526 7.48923 14.3139 7.54136 14.7074C7.71853 16.0515 8.61825 17.1638 9.19208 17.7503Z"
                    stroke="#212121"
                    stroke-opacity="0.9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3.19692 7.31407C4.25131 7.78594 5.98408 8.67482 7.43126 9.95778M9.9774 12.5887C11.201 14.0889 12.0401 15.8438 12.4717 16.8704"
                    stroke="#212121"
                    stroke-opacity="0.9"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g clip-path="url(#clip1_723_883)">
                    <path
                      d="M6.08179 16.9153C6.30717 16.7592 6.34903 16.4448 6.1666 16.2401C5.7886 15.8157 5.13023 15.1103 4.41134 14.4893C4.32635 14.416 4.2222 14.3684 4.11113 14.3523C4.00006 14.3361 3.88668 14.352 3.78432 14.3981C2.55934 14.9477 1.57863 15.6061 1.0764 15.9714C0.869235 16.1221 0.838646 16.4102 1.00683 16.6033C1.25761 16.891 1.65383 17.3256 2.14446 17.7968C1.73875 18.1027 1.13879 18.5955 0.48395 19.1437C0.153328 19.4204 0.343044 19.945 0.773936 19.9302C2.47597 19.8713 4.21135 19.6453 5.18621 19.5C5.54124 19.4468 5.68645 19.0375 5.43932 18.7771C5.15723 18.4809 4.86869 18.1908 4.57389 17.9072C5.05359 17.619 5.57857 17.2637 6.08179 16.9153Z"
                      fill="#212121"
                      fill-opacity="0.6"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_723_883">
                    <rect
                      width="19.9897"
                      height="19.9897"
                      fill="white"
                      transform="translate(20 19.9897) rotate(179.97)"
                    />
                  </clipPath>
                  <clipPath id="clip1_723_883">
                    <rect
                      width="7.99587"
                      height="7.99587"
                      fill="white"
                      transform="translate(3.02734 12.0325) rotate(45)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </span>
          </div>
          <p className="visionParagraph text-start lg:text-center px-4 lg:px-16 text-xs lg:text-xl xl:text-2xl font-medium text-black text-opacity-90 leading-[166.667%] lg:leading-[40px] lg:tracking-[0.4px] xl:tracking-[0.48px] ">
            Embark on a trailblazing journey with our AI-driven software,
            guiding you to the forefront of learning, job hunting, and
            recruiting. Explore our standout features!
          </p>
        </div>

        <div className="py-8 xl:px-60 xl:py-60 lg:p-[96px] p-6 border border-transparent rounded-lg">
          <div className="DashboardBefore relative flex items-center justify-center">
            <div className=" DashboardBefore1 relative">
              <div className=" DashboardBefore2 relative">
                <div className="w-[60vw] DashboardBefore3 relative">
                  <Image
                    src={"/icons/Dashboard.webp"}
                    width={1600}
                    height={1600}
                    className="w-full object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/callender.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute -bottom-[40%] -left-[24%] scale-[0.6] object-cover ease-out object-center rounded-xl cursor-pointer"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/Realtimejobtraking.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute bottom-[62%] left-[35%] scale-[0.5] object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/FollowUp.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute -top-[12%] right-[47%] scale-[0.4] object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                  <Image
                    src={"/icons/talentAssessment.webp"}
                    width={600}
                    height={600}
                    className="w-full absolute -bottom-[44%] left-[34%] scale-[0.6] object-cover object-center rounded-xl"
                    alt="Dashboard"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
