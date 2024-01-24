"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type Props = {};

const Section2 = (props: Props) => {
  const [width, setWidth] = useState(0);

  const carouselWidth: number = width / 2 - 1;

  useEffect(() => {
    const windowWidth = window.innerWidth;
    setWidth(windowWidth);
  }, []);

  return (
    <>
      <section id="about" className="flex h-screen w-full snap-start items-center justify-center">
        <Carousel className="h-full w-full">
          <CarouselContent className="h-full w-full">
            <CarouselItem className="flex h-screen w-full bg-red-400 p-0">
              <section id="about_inner" className="relative flex h-full w-full">
                {/* <DotDesign designName="dotDesign" /> */}
                <h1 className="absolute top-1/3 flex flex-col text-7xl font-semibold leading-[80px]">
                  <span className="mx-auto flex cursor-default tracking-[7px] text-white md:m-0">
                    about
                  </span>
                  <span className="mx-auto flex cursor-default tracking-[7px] text-white md:ml-[200px]">
                    me
                  </span>
                </h1>
                <div className="absolute top-3/4 flex">
                  <span className="text-4xl font-semibold text-white underline ">more</span>
                </div>
              </section>
            </CarouselItem>
            <CarouselItem className="flex h-screen w-full bg-pink-400 p-0">
              <section id="profile" className=" relative flex">
                {/* <DotDesign designName="dotDesign" /> */}
                <h1 className="absolute top-1/3 flex w-full flex-col text-7xl font-semibold leading-[80px] md:left-[120px] md:top-[150px] md:text-[140px] md:font-extrabold md:leading-[150px]">
                  <span className="mx-auto flex cursor-default tracking-[7px] text-white md:m-0">
                    profile
                  </span>
                </h1>
                <div className="absolute top-3/4 flex w-full">
                  <p className="mx-auto flex cursor-default text-center leading-6 tracking-[3px] text-white">
                    <span>
                      当ブログにご訪問いただきありがとうございます。このブログは私が学んだこと、まとめたいことを記事にしているブログです。
                    </span>
                  </p>
                </div>
              </section>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </>
  );
};

export default Section2;
