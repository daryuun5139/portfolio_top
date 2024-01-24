"use client";

import Header from "@/components/NewComponents/Header";
import Link from "next/link";
import Section1 from "@/components/NewComponents/Section1";
import Section2 from "@/components/NewComponents/Section2";
import Section3 from "@/components/NewComponents/Section3";
import Section4 from "@/components/NewComponents/Section4";
import Section5 from "@/components/NewComponents/Section5";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    // ここからリサイズの対応
    // let vw = window.innerWidth;
    // window.addEventListener("resize", () => {
    //   if (vw === window.innerWidth) {
    //     // 画面の横幅にサイズ変動がないので処理を終える
    //     return;
    //   }
    // });
  });

  return (
    <div className="relative w-full">
      <Header />
      <div className="h-[calc(var(--vh, 1vh) * 100)] h-screen w-full snap-y snap-mandatory overflow-hidden overflow-y-scroll">
        {/* セクション１ Title---------------------------------------------------------------------- */}
        <Section1 />
        {/* セクション２ About---------------------------------------------------------------------- */}
        <Section2 />
        {/* セクション３ portfolio1----------------------------------------------------------------- */}
        <Section3 />
        {/* セクション４ portfolio2----------------------------------------------------------------- */}
        <Section4 />
        {/* セクション５ portfolio3----------------------------------------------------------------- */}
        <Section5 />
        {/* セクション６ blog ---------------------------------------------------------------------- */}
        <section id="blog" className="h-screen w-full snap-start bg-pink-400 px-[10%] py-[8%]">
          <div className="grid grid-cols-2">
            <h1 className="cursor-default text-5xl font-bold">blog</h1>
            <div>
              <Link href="" className="text-lg font-semibold underline">
                visit blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
