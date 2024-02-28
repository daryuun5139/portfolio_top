import Image from "next/image";
import enVideoAppImage from "../../../public/site_thumbnail/en-video-app.png";
import Link from "next/link";
import Overview from "../Others/Overview";

type Props = {
  lng: string;
};

const Portfolio3 = ({ lng }: Props) => {
  const sectionName = "portfolio3";

  return (
    <>
      <section id="portfolio3" className="relative w-full snap-start">
        {/* レスポンシブ2xs〜md(portrait)=================================================================== */}
        <div className="absolute top-[50px] flex h-full w-full 2xs:top-[60px] xs:top-[65px] sm:top-[80px] md:hidden landscape:hidden">
          <div className="mx-auto flex h-full flex-col justify-between">
            {/* タイトル部分----------------------*/}
            <h1 className="flex pb-2 text-3xl 2xs:text-5xl xs:text-6xl sm:text-7xl">
              <span className="mx-auto flex cursor-default font-bold ">portfolio3</span>
            </h1>
            {/* 概要&画像部分-------------------- */}
            <div className="mx-auto flex h-[70%] flex-col items-center overflow-y-scroll pt-2">
              <div className="mx-auto flex cursor-default text-center text-sm leading-6 tracking-[3px] xs:leading-8 sm:text-base">
                <Overview lng={lng} ns={sectionName} />
              </div>
              <div className="flex pt-2 xs:pt-8 sm:pt-4">
                <Image
                  src={enVideoAppImage}
                  alt="en-video-app.png"
                  width="0"
                  height="0"
                  className=" w-[250px]  xs:h-[400px] xs:w-[300px] sm:h-[500px] sm:w-[350px]"
                />
              </div>
            </div>
            {/* リンク部分------------------------ */}
            <div className="mb-5 flex h-[20%] w-full justify-evenly pt-3 2xs:pt-5 xs:pt-8 sm:pt-5">
              <Link href="https://en-video-app.vercel.app/">
                <span className="text-xl font-semibold underline xs:text-2xl sm:text-3xl">
                  visit site
                </span>
              </Link>
              <Link href="https://github.com/daryuun5139/en-video-app">
                <span className="text-xl font-semibold underline xs:text-2xl sm:text-3xl">
                  github
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* レスポンシブ2xs〜md(portrait)終了===================================================================== */}
        {/* レスポンシブ2xs〜md(landscape)======================================================================== */}
        <div className="absolute top-3 flex h-full w-full md:hidden big-phone:flex portrait:hidden">
          <div className="mx-auto flex h-full flex-col justify-between">
            {/* タイトル部分------------------------*/}
            <h1 className="flex text-4xl md:pt-3 md:text-5xl">
              <span className="mx-auto flex cursor-default font-bold ">portfolio3</span>
            </h1>
            {/* 概要&Link部分-------------------- */}
            <div className="mx-auto flex h-[80%] w-[95%] gap-3 overflow-y-scroll 3xs:overflow-hidden md:h-[75%] md:w-[85%]">
              <div className="flex w-[60%] flex-col">
                <div className="flex cursor-default text-sm leading-6 tracking-[3px] xs:leading-8 md:text-lg">
                  <Overview lng={lng} ns={sectionName} />
                </div>
                <div className="flex w-full justify-evenly pt-1 md:pt-5">
                  <Link href="https://en-video-app.vercel.app/" className="flex">
                    <span className="text-2xl font-semibold underline md:text-3xl">visit site</span>
                  </Link>
                  <Link href="https://github.com/daryuun5139/en-video-app" className="flex">
                    <span className="text-2xl font-semibold underline md:text-3xl">github</span>
                  </Link>
                </div>
              </div>
              {/* 画像部分-------------------------- */}
              <div className="flex w-[35%]">
                <Image
                  src={enVideoAppImage}
                  alt="en-video-app.png"
                  width="0"
                  height="0"
                  className="h-[300px] w-[300px] sm:h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* レスポンシブ2xs〜md(landscape)終了===================================================================== */}
        {/* mdサイズ以上の画面===================================================================================== */}
        <div className="absolute top-[150px] hidden h-full w-full flex-col justify-between md:flex lg:hidden big-phone:hidden">
          <div className="mx-auto flex w-[90%] flex-col">
            {/* mdサイズ以上の上画面------------------------------ */}
            <h1 className="flex md:text-8xl ">
              <span className="mx-auto flex cursor-default font-bold ">portfolio3</span>
            </h1>
            {/* mdサイズ以上の下左画面---------------------------- */}
            <div className="flex gap-5 md:flex-row md:pt-8">
              <div className="mx-auto flex flex-col">
                <div className="flex cursor-default leading-10 tracking-[3px] md:text-start ">
                  <Overview lng={lng} ns={sectionName} />
                </div>
                <div className="flex w-full md:pt-5">
                  <Link href="https://en-video-app.vercel.app/" className="mx-auto md:mr-3 ">
                    <span className="text-3xl font-semibold underline">visit site⇛</span>
                  </Link>
                  <Link
                    href="https://github.com/daryuun5139/en-video-app"
                    className="mx-auto md:mr-3 "
                  >
                    <span className="text-3xl font-semibold underline">github⇛</span>
                  </Link>
                </div>
              </div>
              {/* mdサイズ以上の下右画面--------------------------- */}
              <div className="fle-col mx-auto md:pt-0">
                <Image
                  src={enVideoAppImage}
                  alt="en-video-app.png"
                  width="0"
                  height="0"
                  className="h-[450px] w-[300px] min-w-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* lgサイズ以上の画面===================================================================================== */}
        <div className="absolute top-[150px] hidden h-full w-full justify-center lg:flex lg:gap-5 xl:gap-8">
          <div className="mx-auto flex w-[85%] justify-between 2xl:w-[70%]">
            {/* lgサイズ以上の画面左半分------------------------------- */}
            <div className="flex w-[60%] flex-col">
              <h1 className="flex lg:text-8xl xl:text-9xl">
                <span className="mx-auto flex cursor-default font-bold lg:m-0">portfolio3</span>
              </h1>
              <div className="flex flex-col lg:pt-12 xl:pt-16">
                <div className="mx-auto flex cursor-default tracking-[3px] lg:text-start xl:ml-[70px]">
                  <Overview lng={lng} ns={sectionName} />
                </div>
                <div className="flex w-full justify-evenly lg:pt-5 xl:pt-10">
                  <Link href="https://en-video-app.vercel.app/" className="flex lg:mr-5">
                    <span className="text-3xl font-semibold underline">visit site⇛</span>
                  </Link>
                  <Link href="https://github.com/daryuun5139/en-video-app" className="flex lg:mr-5">
                    <span className="text-3xl font-semibold underline">github⇛</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* lgサイズ以上の画面右半分----------------------------- */}
            <div className="hidden w-[40%] pt-4 lg:flex">
              <Image
                src={enVideoAppImage}
                alt="en-video-app.png"
                width="0"
                height="0"
                className="h-[550px] w-[400px] xl:h-[700px] xl:w-[500px] "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio3;
