import React from "react";

type Props = {};

const Section1 = (props: Props) => {
  return (
    <>
      <section
        id="top"
        className="relative h-screen w-full snap-start bg-[#4169e1] fill-[#218380] duration-1000"
      >
        {/* <DotDesign designName="dotDesign" /> */}
        <h1 className="absolute top-1/3 flex w-full flex-col text-6xl font-bold leading-[100px] md:left-[80px] md:top-[200px] md:text-9xl md:leading-[150px]">
          <span className="mx-auto flex cursor-default text-white md:m-0">Daryun's</span>
          <span className="mx-auto flex cursor-default text-white md:ml-10">Tech Blog</span>
        </h1>
      </section>
    </>
  );
};

export default Section1;
