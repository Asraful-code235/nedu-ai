import Image from "next/image";
export default function Timeline() {
  return (
    <section className="visionParagraph bg-gradient-to-l from-[rgba(223,222,222,0.1)] to-transparent min-h-[70vh] relative py-6 lg:py-20 px-6 lg:px-16 2xl:px-32 bg-white ">
      <h1 className="visionParagraph z-50 backdrop-blur-sm text-3xl lg:text-5xl font-bold leading-10 lg:leading-[67px] tracking-[0.6] lg:tracking-[0.96px]">
        NeduAI{" "}
        <span className="text-[#FF980E] relative">
          Timeline
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            className="absolute w-7 h-7 lg:w-[48px] lg:h-[48px] -top-3 -right-3 lg:-top-6 lg:-right-6"
          >
            <path
              d="M11.5788 38.1523C13.838 38.5667 16.0246 37.0061 16.4524 34.6733C16.6298 33.7064 16.4736 32.7584 16.0736 31.9478L21.9008 27.3344C22.454 27.8516 23.1473 28.2231 23.9383 28.3681C24.8023 28.5266 25.6547 28.3945 26.4031 28.0428L27.9374 30.3438C27.3539 30.9427 26.932 31.7202 26.7684 32.6121C26.3405 34.9449 27.831 37.1799 30.0909 37.5944C32.3508 38.0089 34.5373 36.4483 34.9652 34.1155C35.1425 33.1484 34.9864 32.2003 34.5863 31.3896L40.4138 26.7764C40.967 27.2934 41.6603 27.6649 42.4511 27.8099C44.7103 28.2243 46.8968 26.6637 47.3246 24.3312C47.7525 21.9984 46.2621 19.7635 44.0029 19.3491C41.743 18.9346 39.5564 20.4952 39.1286 22.828C38.9512 23.7951 39.1075 24.7432 39.5077 25.554L33.6803 30.167C33.1272 29.6498 32.4337 29.2783 31.6427 29.1332C30.7788 28.9747 29.9264 29.1067 29.1781 29.4584L27.6438 27.1573C28.2272 26.5584 28.649 25.781 28.8126 24.8892C29.2404 22.5564 27.75 20.3214 25.4901 19.9069C23.2302 19.4924 21.0437 21.053 20.6158 23.3858C20.4384 24.353 20.5947 25.3011 20.9949 26.1119L15.168 30.7251C14.6148 30.2077 13.9215 29.8362 13.1307 29.6911C10.8708 29.2767 8.68422 30.8373 8.25636 33.1701C7.82851 35.5029 9.31891 37.7378 11.5788 38.1523ZM43.7235 20.8721C45.1694 21.1373 46.123 22.5678 45.8492 24.0606C45.5754 25.5535 44.1763 26.5521 42.7304 26.2869C41.2838 26.0216 40.3301 24.5915 40.604 23.0986C40.8778 21.6057 42.277 20.6068 43.7235 20.8721ZM33.4898 33.8449C33.2159 35.3381 31.8168 36.3367 30.3702 36.0714C28.9236 35.8061 27.9699 34.3759 28.2438 32.8827C28.5177 31.3895 29.9168 30.3909 31.3634 30.6562C32.81 30.9215 33.7637 32.3516 33.4898 33.8449ZM25.2108 21.4299C26.6574 21.6952 27.611 23.1257 27.3372 24.6186C27.0634 26.1115 25.6642 27.1104 24.2176 26.8451C22.771 26.5798 21.8174 25.1493 22.0912 23.6564C22.365 22.1636 23.7642 21.1646 25.2108 21.4299ZM12.8513 31.2141C14.2972 31.4793 15.2509 32.9094 14.977 34.4027C14.7032 35.8959 13.304 36.8945 11.8582 36.6294C10.4116 36.364 9.45788 34.9339 9.73175 33.4407C10.0056 31.9474 11.4048 30.9488 12.8513 31.2141Z"
              fill="black"
            />
            <path
              d="M27.4064 37.8343C27.5332 37.8576 27.6695 37.8127 27.7603 37.7032C27.8959 37.5406 27.879 37.2961 27.7218 37.1581C27.4396 36.9104 27.1848 36.6269 26.9654 36.3168C26.8438 36.1439 26.6096 36.1094 26.4411 36.236C26.2733 36.3636 26.2356 36.6057 26.3568 36.7771C26.6106 37.1349 26.9044 37.4617 27.2307 37.7491C27.2826 37.7947 27.343 37.8227 27.4064 37.8343Z"
              fill="black"
            />
            <path
              d="M32.7716 37.8985C32.5815 37.9851 32.4933 38.2141 32.576 38.4091C32.6274 38.5308 32.7326 38.6108 32.8507 38.6325C32.9221 38.6455 32.9979 38.6379 33.0695 38.6049C34.7706 37.8277 35.9919 36.2439 36.3361 34.3669C36.4391 33.8054 36.4615 33.2369 36.4021 32.6756C36.3798 32.464 36.1962 32.312 35.9882 32.3376C35.7818 32.3628 35.6332 32.5561 35.6554 32.7678C35.7072 33.2531 35.6876 33.7453 35.5984 34.2316C35.3005 35.8557 34.2442 37.2262 32.7716 37.8985Z"
              fill="black"
            />
            <path
              d="M23.5139 18.5509C21.7311 18.978 20.2551 20.2738 19.5645 22.0173C19.4864 22.2159 19.5778 22.4406 19.7696 22.5192C19.7939 22.529 19.8186 22.5362 19.8431 22.5407C20.0146 22.5722 20.1908 22.4761 20.2599 22.3024C20.8566 20.7946 22.1337 19.6737 23.6766 19.3041C23.8792 19.2555 24.0067 19.0475 23.9621 18.8399C23.9164 18.6305 23.7142 18.5023 23.5139 18.5509Z"
              fill="black"
            />
            <path
              d="M42.7344 28.5105C41.914 28.4323 41.1131 28.1382 40.4357 27.65C40.2648 27.5299 40.0323 27.5715 39.9121 27.7477C39.7921 27.9232 39.8314 28.1637 40.0004 28.2858C40.6549 28.7568 41.3898 29.0695 42.1852 29.2154C42.3422 29.2442 42.4991 29.2656 42.6557 29.2809C42.862 29.3007 43.0471 29.1444 43.0682 28.9319C43.0895 28.7183 42.9251 28.5305 42.7344 28.5105Z"
              fill="black"
            />
            <path
              d="M42.8478 17.8517C42.6414 17.8685 42.4844 18.0545 42.4983 18.2673C42.5121 18.48 42.6902 18.6418 42.8985 18.6228C43.302 18.5903 43.7115 18.6112 44.1163 18.6855C46.7257 19.1641 48.4461 21.7445 47.9522 24.4376C47.9019 24.7116 47.829 24.983 47.7358 25.2438C47.6639 25.4447 47.7633 25.6662 47.9579 25.738C47.9782 25.7452 47.998 25.7508 48.0189 25.7546C48.1954 25.787 48.3759 25.684 48.4402 25.5037C48.5476 25.2024 48.6318 24.8893 48.6899 24.5729C49.2608 21.46 47.2716 18.4771 44.256 17.924C43.7892 17.8384 43.3156 17.8142 42.8478 17.8517Z"
              fill="black"
            />
            <path
              d="M11.337 39.4708C11.7678 39.5498 12.2051 39.577 12.6366 39.5508C12.8437 39.5381 13.0038 39.3553 12.9938 39.1421C12.9845 38.929 12.8092 38.7639 12.601 38.7787C12.2283 38.8011 11.8498 38.7778 11.4767 38.7093C8.86736 38.2308 7.14613 35.6506 7.64013 32.9571C7.6831 32.7229 7.74304 32.4894 7.81787 32.2641C7.88488 32.0612 7.78044 31.8429 7.58432 31.7754C7.38797 31.7133 7.17516 31.818 7.10729 32.0216C7.02087 32.2817 6.95208 32.5511 6.90244 32.8218C6.33151 35.9347 8.32066 38.9176 11.337 39.4708Z"
              fill="black"
            />
          </svg>
        </span>
      </h1>
      {/* laptop */}
      <Image
        src={"/icons/storysvg1st.svg"}
        width={1600}
        height={1600}
        alt={"story_svg"}
        className="w-[600px] absolute right-[-25%] md:right-[0%] top-[0%] z-50 opacity-40"
      />
      <div className="relative mt-40 min-h-[600px] max-w-[1440px] mx-auto hidden lg:flex items-center justify-center">
        <Image
          src={"/timeline/timeline.svg"}
          width={1000}
          height={1000}
          className="w-full mx-auto h-full object-center object-cover"
        />
        {/* july 2023 */}
        <div className="absolute bottom-2 xl:-bottom-4 2xl:-bottom-6 left-0 max-w-[226px] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            July ‘23
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Filip Bovin, Pasi Orovuo, and Kari Savolainen founded NeduAI,
            <span className="font-normal">
              {" "}
              marking the start of a new era in AI-assisted education and
              recruitment.
            </span>
          </p>
        </div>
        <div className="absolute -top-10 2xl:-top-16 left-[15%] 2xl:left-64 max-w-[238px] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            August ‘23
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Partnership formed with XAMK University{" "}
            <span className="font-normal">
              of Applied Sciences to enhance our service foundation and value
              proposition. Welcomed new members to our advisory board,{" "}
            </span>
            <span className="font-semibold">
              bringing diverse expertise and insights.
            </span>
          </p>
        </div>
        <div className="absolute bottom-14 xl:bottom-8 left-[35%] max-w-[238px]  flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Q3-Q4 ’23
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Engaged in extensive networking and sales meetings,{" "}
            <span className="font-normal leading-normal">
              exploring potential partnerships.
            </span>
          </p>
        </div>
        <div className="absolute top-[14%] right-[25%] xl:right-[30%] 2xl:top-[10%] max-w-[238px] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leadig-normal text-[#FF980E]">
            October ‘23
          </h4>
          <p className="visionParagraph text-base leading-normal font-normal">
            Began development of the{" "}
            <span className="font-semibold">
              Alpha version of the NeduAI platform.
            </span>
          </p>
        </div>
        <div className="absolute bottom-16 xl:bottom-8 right-[7%] 2xl:right-[14%] max-w-[238px] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Q4 ‘23
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Achieved our first sales and strategic partnership with XAMK,{" "}
            <span className="font-normal leading-normal">
              a significant milestone in bringing our vision to life.
            </span>
          </p>
        </div>
        <div className="absolute top-[6%] xl:top-[3%] -right-[6%] max-w-[238px] flex flex-col gap-2 items-start justify-start text-start">
          <h4 className="font-semibold text-[30px] w-full leading-normal text-[#FF980E]">
            Q1 ‘24
          </h4>
          <p className="visionParagraph text-base leading-normal font-semibold">
            Launching our first investment round,{" "}
            <span className="font-normal leading-normal">
              inviting investors to join us in our mission to redefine education
              and recruitment.
            </span>
          </p>
        </div>
      </div>
      {/* mobile */}
      <div className="relative max-[370px]:my-16 my-10 h-fit mx-auto flex lg:hidden items-center justify-center gap-3 sm:gap-5">
        <Image
          src={"/timeline/mobiletimeline.svg"}
          width={1000}
          height={1000}
          alt="nedu_timeline"
          className="w-fit max-[370px]:h-[735px] max-[372px]:h-[664px] max-[388px]:h-[70%] h-[698px] max-w-[393px] max-[370px]:-mt-2 -mt-3"
        />
        {/* july 2023 */}
        <div className="flex flex-col gap-4 h-fit max-[370px]:mt-8 ">
          <div className="px-[7px] max-[370px]:-mt-14 -mt-6 py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              July ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Filip Bovin, Pasi Orovuo, and Kari Savolainen founded NeduAI,
              <span className="visionParagraph font-normal">
                {" "}
                marking the start of a new era in AI-assisted education and
                recruitment.
              </span>
            </p>
          </div>
          <div className="px-[7px] max-[370px]:my-2 mt-1 py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              August ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Partnership formed with XAMK University{" "}
              <span className="visionParagraph font-normal">
                of Applied Sciences to enhance our service foundation and value
                proposition. Welcomed new members to our advisory board,{" "}
              </span>
              <span className="visionParagraph font-semibold">
                bringing diverse expertise and insights.
              </span>
            </p>
          </div>
          <div className="px-[7px] max-[370px]:-mt-2 mt-3 py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              Q3-Q4 ’23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Engaged in extensive networking and sales meetings,{" "}
              <span className="visionParagraph font-normal leading-normal">
                exploring potential partnerships.
              </span>
            </p>
          </div>
          <div className="px-[7px] max-[370px]:mt-8 mt-8 py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              October ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-normal">
              Began development of the{" "}
              <span className="visionParagraph font-semibold">
                Alpha version of the NeduAI platform.
              </span>
            </p>
          </div>
          <div className="px-[7px] max-[370px]:mt-7 mt-6 py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              Q4 ‘23
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Achieved our first sales and strategic partnership with XAMK,{" "}
              <span className="visionParagraph font-normal leading-normal">
                a significant milestone in bringing our vision to life.
              </span>
            </p>
          </div>
          <div className="px-[7px] max-[370px]:my-4 mt-3 py-[11px] bg-[#FF980E] max-w-[258px] bg-opacity-10 border border-[#FF980E] rounded-[10px]  flex flex-col gap-1 items-start justify-start text-start">
            <h4 className="font-semibold text-[12px] w-full leading-normal text-[#FF980E]">
              Q1 ‘24
            </h4>
            <p className="visionParagraph text-[10px] leading-normal font-semibold">
              Launching our first investment round,{" "}
              <span className="visionParagraph font-normal leading-normal">
                inviting investors to join us in our mission to redefine
                education and recruitment.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
