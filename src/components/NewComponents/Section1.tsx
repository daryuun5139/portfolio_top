import React from "react";

type Props = {};

const Section1 = (props: Props) => {
  return (
    <>
      <section
        id="top"
        className="relative w-full snap-start bg-[#4169e1] fill-[#218380] duration-1000"
      >
        {/* レスポンシブスマホ(portrait, landscape)------------------------------------------------------------------------- */}
        <div className="absolute top-1/3 flex w-full flex-col landscape:top-[22%]">
          {/* <DotDesign designName="dotDesign" /> */}
          <h1 className="flex flex-col">
            <span className="mx-auto flex cursor-default text-5xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
              Daryun's
            </span>
            <span className="mx-auto flex cursor-default text-5xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px]">
              Tech Blog
            </span>
          </h1>
        </div>
        {/* レスポンシブmd〜------------------------------------------------------------------------- */}
        <div className="absolute top-1/3 hidden w-full flex-col md:flex landscape:hidden">
          {/* <DotDesign designName="dotDesign" /> */}
          <h1 className="flex flex-col md:left-[80px] md:top-[200px] md:text-9xl md:leading-[150px]">
            <span className="mx-auto flex cursor-default text-5xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px] md:m-0">
              Daryun's
            </span>
            <span className="mx-auto flex cursor-default text-5xl font-bold leading-[70px] text-white sm:text-6xl sm:leading-[100px] md:ml-10">
              Tech Blog
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Section1;
