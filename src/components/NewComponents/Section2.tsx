import Link from "next/link";
import React from "react";

type Props = {};

const Section2 = (props: Props) => {
  return (
    <>
      <section id="about" className="relative h-screen w-full snap-start bg-red-400 duration-1000">
        {/* <DotDesign designName="dotDesign" /> */}
        <h1 className="absolute top-1/3 flex w-full flex-col text-7xl font-semibold leading-[80px] md:left-[120px] md:top-[150px] md:text-[140px] md:font-extrabold md:leading-[150px]">
          <span className="mx-auto flex cursor-default tracking-[7px] text-white md:m-0">
            about
          </span>
          <span className="mx-auto flex cursor-default tracking-[7px] text-white md:ml-[200px]">
            me
          </span>
        </h1>
        <div className="absolute top-3/4 flex w-full md:bottom-36 md:right-36 md:w-fit">
          <Link href="https://tech-blog-pink.vercel.app/ja" className="mx-auto ">
            <span className="text-4xl font-semibold text-white underline md:text-6xl">more</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Section2;
