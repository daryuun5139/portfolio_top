"use client";

import Image from "next/image";
import techBlogImage from "../../../public/site_thumbnail/tech-blog.png";
import Link from "next/link";
import { useTranslation } from "../../i18n/index";
import { Trans } from "react-i18next";
import { useParams } from "next/navigation";

type Props = {};

const Section3 = async () => {
  const { lng } = useParams();
  const { t } = await useTranslation(lng.toString(), "section3");

  return (
    <>
      <section
        id="portfolio1"
        className="relative h-screen w-full snap-start bg-blue-400 duration-1000"
      >
        {/* <DotDesign designName="dotDesign" /> */}
        <div className="absolute top-[50px] flex h-full w-full sm:top-[80px] md:top-[110px] xl:top-[150px]">
          {/* 2xsサイズ以上の画面--------------------------------------- */}
          <div className="mx-auto flex h-full flex-col justify-between md:hidden landscape:bg-slate-600">
            {/* 2xsサイズ以上のタイトル部分--------------------------------------- */}
            <h1 className="flex pb-2 text-3xl xs:text-6xl sm:text-7xl">
              <span className="mx-auto flex cursor-default font-bold text-white ">portfolio1</span>
            </h1>
            {/* 2xsサイズ以上の概要部分&画像部分--------------------------------------- */}
            <div className="mx-auto flex h-[70%] flex-col items-center overflow-y-scroll pt-3 sm:pt-4">
              <p className="mx-auto flex cursor-default text-center text-sm leading-6 tracking-[3px] text-white xs:leading-8 sm:text-base">
                <Trans t={t}>{"text1"}</Trans>
              </p>
              {/* 2xsサイズ以上の画像部分--------------------------------------- */}
              <div className="flex 2xs:pt-4 xs:pt-8 sm:pt-4">
                <Image
                  src={techBlogImage}
                  alt="tech-blog.png"
                  width="0"
                  height="0"
                  className=" w-[250px]  xs:h-[400px] xs:w-[300px] sm:h-[500px] sm:w-[350px]"
                />
              </div>
            </div>
            {/* 2xsサイズ以上のリンク部分--------------------------------------- */}
            <div className="mb-5 flex h-[20%] w-full justify-evenly pt-3 xs:pt-8 sm:pt-5">
              <Link href="https://tech-blog-pink.vercel.app/ja" className="mx-auto md:mr-0">
                <span className="text-xl font-semibold text-white underline xs:text-2xl sm:text-3xl">
                  visit site
                </span>
              </Link>
              <Link href="https://github.com/daryuun5139/tech-blog" className="mx-auto md:mr-0 ">
                <span className="text-xl font-semibold text-white underline xs:text-2xl sm:text-3xl">
                  github
                </span>
              </Link>
            </div>
          </div>
          {/* mdサイズ以上の画面--------------------------------------- */}
          <div className="mx-auto hidden flex-col justify-between md:flex md:w-[90%] lg:hidden">
            <div className="flex flex-col">
              {/* mdサイズ以上の上画面--------------------------------------- */}
              <h1 className="flex md:text-8xl ">
                <span className="mx-auto flex cursor-default font-bold text-white ">
                  portfolio1
                </span>
              </h1>
              {/* mdサイズ以上の下左画面--------------------------------------- */}
              <div className="flex gap-5 md:flex-row md:pt-8">
                <div className="mx-auto flex flex-col">
                  <p className="flex cursor-default leading-10 tracking-[3px] text-white md:text-start ">
                    <Trans t={t}>{"text1"}</Trans>
                  </p>
                  <div className="flex w-full md:pt-5">
                    <Link href="https://tech-blog-pink.vercel.app/ja" className="mx-auto md:mr-3 ">
                      <span className="text-3xl font-semibold text-white underline">
                        visit site⇛
                      </span>
                    </Link>
                    <Link
                      href="https://github.com/daryuun5139/tech-blog"
                      className="mx-auto md:mr-3 "
                    >
                      <span className="text-3xl font-semibold text-white underline">github⇛</span>
                    </Link>
                  </div>
                </div>
                {/* mdサイズ以上の下右画面--------------------------------------- */}
                <div className="fle-col mx-auto md:pt-0">
                  <Image
                    src={techBlogImage}
                    alt="tech-blog.png"
                    width="0"
                    height="0"
                    className="h-[430px] w-[320px] min-w-[310px]"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* lgサイズ以上の画面--------------------------------------- */}
          <div className="mx-auto hidden flex-row lg:flex lg:w-[95%] lg:justify-evenly lg:gap-5 xl:gap-8">
            {/* lgサイズ以上の画面左半分--------------------------------------- */}
            <div className="flex flex-col">
              <h1 className="flex lg:text-8xl xl:text-9xl">
                <span className="mx-auto flex cursor-default font-bold text-white lg:m-0">
                  portfolio1
                </span>
              </h1>
              <div className="flex flex-col lg:pt-12 xl:pt-16">
                <p className="mx-auto flex cursor-default leading-10 tracking-[3px] text-white lg:text-start xl:ml-[70px]">
                  <Trans t={t}>{"text1"}</Trans>
                </p>
                <div className="flex w-full lg:pt-5 xl:pt-10">
                  <Link href="https://tech-blog-pink.vercel.app/ja" className="mx-auto lg:mr-5">
                    <span className="text-3xl font-semibold text-white underline">visit site⇛</span>
                  </Link>
                  <Link href="https://github.com/daryuun5139/tech-blog" className="mx-auto lg:mr-5">
                    <span className="text-3xl font-semibold text-white underline">github</span>
                  </Link>
                </div>
              </div>
            </div>
            {/* lgサイズ以上の画面右半分--------------------------------------- */}
            <div className="hidden pt-4 lg:block">
              <Image
                src={techBlogImage}
                alt="tech-blog.png"
                width="0"
                height="0"
                className="h-[550px] w-[420px] xl:h-[700px] xl:w-[500px] "
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
