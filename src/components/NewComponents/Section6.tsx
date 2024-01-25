"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const Section6 = (props: Props) => {
  return (
    <>
      <section id="gallery" className="flex w-full snap-start items-center justify-center">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full w-full">
            {/* id="gallery_title" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-purple-600 p-0">
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="gallery_title" className="relative flex w-full">
                <h1 className="absolute top-1/3 flex w-full flex-col landscape:top-[22%]">
                  <span className="mx-auto flex cursor-default text-7xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
                    gallery
                  </span>
                </h1>
                <div className="absolute top-[80%] flex w-full justify-end">
                  <CarouselNext id="CarouselNext_gallery" />
                  <label htmlFor="CarouselNext_gallery">
                    <span className="mr-3 flex text-5xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
                      more⇒
                    </span>
                  </label>
                </div>
              </section>
            </CarouselItem>
            {/* id="gallery_contents" ======================================================================== */}
            <CarouselItem className="flex h-screen w-full bg-purple-600 p-0">
              {/* レスポンシブスマホ(portrait, landscape)---------------------------------------*/}
              <section id="gallery_contents" className="relative flex w-full justify-center">
                <h1 className="absolute top-[20%] flex w-full landscape:top-[22%]">
                  <span className="mx-auto flex cursor-default text-7xl font-bold text-white">
                    gallery1
                  </span>
                </h1>
                <div className="absolute top-[40%] flex w-[90%]">
                  <p className="flex cursor-default text-center leading-6 tracking-[3px] text-white">
                    当ブログにご訪問いただきありがとうございます。このブログは私が学んだこと、まとめたいことを記事にしているブログです。
                  </p>
                </div>
                <div className="absolute top-[80%] flex w-full justify-start">
                  <CarouselPrevious id="CarouselPrevious_gallery" />
                  <label htmlFor="CarouselPrevious_gallery">
                    <span className="ml-3 flex text-5xl font-semibold text-white underline hover:cursor-pointer hover:opacity-75">
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

export default Section6;
