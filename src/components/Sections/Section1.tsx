import React from "react";

type Props = {};

const Section1 = (props: Props) => {
  return (
    <>
      <section
        id="section1"
        className="relative flex w-full snap-start justify-center bg-[#4169e1] fill-[#218380] duration-1000"
      >
        {/* レスポンシブスマホ(portrait, landscape)------------------------------------------------------------------------- */}
        <div className="absolute top-1/3 flex w-full flex-col md:hidden big-phone:flex landscape:top-[22%]">
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
        {/* レスポンシブPC(md〜)------------------------------------------------------------------------- */}
        <div className="relative hidden h-full w-full md:flex big-phone:hidden">
          {/* <DotDesign designName="dotDesign" /> */}
          <h1 className="absolute left-[150px] top-[130px] flex flex-col">
            <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px] text-white">
              Daryun's
            </span>
            <span className="m-0 flex cursor-default text-9xl font-bold leading-[150px] text-white">
              Tech Blog
            </span>
          </h1>
        </div>
      </section>
    </>
  );
};

export default Section1;
