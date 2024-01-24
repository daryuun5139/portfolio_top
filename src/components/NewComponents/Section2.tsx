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
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="about_inner" className="relative flex h-full w-full">
                <h1 className="absolute top-1/3 flex w-full flex-col landscape:top-[22%]">
                  <span className="mx-auto flex cursor-default text-7xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
                    about
                  </span>
                  <span className="mx-auto flex cursor-default text-7xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
                    me
                  </span>
                </h1>
                <div className="absolute top-[80%] flex w-full justify-end">
                  <CarouselNext />
                  <label htmlFor="CarouselNext">
                    <span className="mr-3 flex text-5xl font-semibold text-white underline hover:opacity-75">
                      more⇒
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
            {/* id="profile" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-pink-400 p-0">
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="profile" className="relative flex h-full w-full justify-center">
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
                  <CarouselPrevious />
                  <label htmlFor="CarouselPrevious">
                    <span className="ml-3 flex text-5xl font-semibold text-white underline hover:opacity-75">
                      ⇐back
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </section>
    </>
  );
};

export default Section2;
