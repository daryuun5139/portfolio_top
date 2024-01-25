"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <>
      <section id="about" className="flex w-full snap-start items-center justify-center">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full w-full">
            {/* id="about_inner" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-red-400 p-0">
              {/* レスポンシブスマホ(portrait, landscape)----------------------------*/}
              <section id="about_inner" className="relative flex w-full md:hidden">
                <h1 className="absolute top-1/3 flex w-full flex-col landscape:top-[22%]">
                  <span className="mx-auto flex cursor-default text-7xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
                    about
                  </span>
                  <span className="mx-auto flex cursor-default text-7xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
                    me
                  </span>
                </h1>
                <div className="absolute top-[80%] flex w-full justify-end">
                  <CarouselNext id="CarouselNext_about" />
                  <label htmlFor="CarouselNext_about">
                    <span className="mr-3 flex text-5xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      more⇒
                    </span>
                  </label>
                </div>
              </section>
              {/* レスポンシブPC(md〜)------------------------------------------------ */}
              <section id="about_inner" className="relative hidden h-full w-full md:flex">
                <h1 className="absolute left-[150px] top-[130px] flex flex-col items-end">
                  <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px] text-white">
                    about
                  </span>
                  <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px] text-white">
                    me
                  </span>
                </h1>
                <div className="absolute top-[80%] flex w-full justify-end">
                  <CarouselNext id="CarouselNext_about" />
                  <label htmlFor="CarouselNext_about">
                    <span className="mr-20 flex text-7xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      more⇒
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
            {/* id="profile" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-pink-400 p-0">
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="profile" className="relative flex w-full justify-center md:hidden">
                <h1 className="absolute top-[20%] flex w-full landscape:top-[22%]">
                  <span className="mx-auto flex cursor-default text-7xl font-bold text-white">
                    profile
                  </span>
                </h1>
                <div className="absolute top-[40%] flex w-[90%]">
                  <p className="flex cursor-default text-center leading-6 tracking-[3px] text-white">
                    当ブログにご訪問いただきありがとうございます。このブログは私が学んだこと、まとめたいことを記事にしているブログです。
                  </p>
                </div>
                <div className="absolute top-[80%] flex w-full justify-start">
                  <CarouselPrevious id="CarouselPrevious_about" />
                  <label htmlFor="CarouselPrevious_about">
                    <span className="ml-3 flex text-5xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      ⇐back
                    </span>
                  </label>
                </div>
              </section>
              {/* レスポンシブPC(md〜)------------------------------------------------ */}
              <section
                id="profile"
                className="relative hidden h-full w-full items-center justify-center md:flex"
              >
                <div className="absolute top-[18%] flex flex-col">
                  <h1 className="flex">
                    <span className="mx-auto flex cursor-default text-8xl font-bold text-white">
                      profile
                    </span>
                  </h1>
                  <div className="mx-auto flex w-[75%] pt-10">
                    <p className="flex cursor-default text-center leading-7 tracking-[3px] text-white">
                      当ブログにご訪問いただきありがとうございます。このブログは私が学んだこと、まとめたいことを記事にしているブログです。
                    </p>
                  </div>
                </div>
                <div className="absolute top-[80%] flex w-full justify-start">
                  <CarouselPrevious id="CarouselPrevious_about" />
                  <label htmlFor="CarouselPrevious_about">
                    <span className="ml-20 flex text-7xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      ⇐back
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </section>
    </>
  );
};

export default Section2;
