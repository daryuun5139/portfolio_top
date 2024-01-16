// "use client";

import Header from "@/components/NewComponents/Header";
import Link from "next/link";
import { useParams } from "next/navigation";
import DotDesign from "@/components/BackgroundDesigns/DotDesign";
import TileLikeDesign from "@/components/BackgroundDesigns/TileLikeDesign";
import TartanCheckDesign from "@/components/BackgroundDesigns/TartanCheckDesign";
import TartanCheckDesign02 from "@/components/BackgroundDesigns/TartanCheckDesign02";
import ArgyleDesign from "@/components/BackgroundDesigns/ArgyleDesign";
import TrianglePattern from "@/components/BackgroundDesigns/TrianglePattern";

export default function Home() {
  // const { lng } = useParams();

  return (
    <>
      <Header />
      <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll ">
        {/* セクション１ background:Dot-Design--------------------------------------------------------------------- */}
        <section
          id="top"
          className="relative h-screen w-full snap-start bg-orange-400 duration-1000"
        >
          <DotDesign designName="dotDesign" />
          <h1 className="absolute left-[80px] top-[100px] flex flex-col text-9xl font-bold leading-[150px]">
            <span className="cursor-default text-white">Daryun's</span>
            <span className="ml-10 cursor-default text-white">Tech Blog</span>
          </h1>
        </section>
        {/* セクション２ background:TileLike-Design --------------------------------------------------------------------- */}
        <section
          id="about"
          className="relative h-screen w-full snap-start bg-red-400 duration-1000"
        >
          <TileLikeDesign designName="tileLikeDesign" />
          <div className="absolute left-[80px] top-[150px] grid grid-cols-2">
            <h1 className="flex flex-col text-9xl font-bold leading-[120px]">
              <span className="cursor-default text-white">about</span>
              <span className="ml-[180px] text-white">me</span>
            </h1>
            <div>
              <Link href="" className="text-lg font-semibold text-white underline">
                more
              </Link>
            </div>
          </div>
        </section>
        {/* セクション３ background:TartanCheck-Design--------------------------------------------------------------------- */}
        <section
          id="portfolio1"
          className="relative h-screen w-full snap-start bg-blue-400 duration-1000"
        >
          <TartanCheckDesign designName="tartanCheckDesign" />
          <div className="absolute left-[80px] top-[150px] grid grid-cols-2">
            <h1 className="cursor-default text-9xl font-bold text-white">portfolio1</h1>
          </div>
          <div className="absolute bottom-36 right-36">
            <Link href="https://tech-blog-pink.vercel.app/ja">
              <span className="text-6xl font-semibold text-white underline">visit site⇒</span>
            </Link>
          </div>
        </section>
        {/* セクション４ background: Argyle-Design-------------------------------------------------------------------- */}
        <section
          id="portfolio2"
          className="relative h-screen w-full snap-start bg-yellow-400 duration-1000"
        >
          <ArgyleDesign designName="argyleDesign" />
          <div className="absolute left-[80px] top-[150px] grid grid-cols-2">
            <h1 className="cursor-default text-9xl font-bold text-white">portfolio2</h1>
          </div>
          <div className="absolute bottom-36 right-36">
            <Link href="https://color-palette-lyart.vercel.app/">
              <span className="text-6xl font-semibold text-white underline">visit site⇒</span>
            </Link>
          </div>
        </section>
        {/* セクション５ background:Triangle-Design--------------------------------------------------------------------- */}
        <section
          id="portfolio3"
          className="relative h-screen w-full snap-start bg-green-400 duration-1000"
        >
          <TrianglePattern designName="trianglePatternDesign02" />

          <div className="absolute left-[80px] top-[150px] grid grid-cols-2">
            <h1 className="cursor-default text-9xl font-bold text-white">portfolio3</h1>
            <div>
              <Link href="" className="text-lg font-semibold text-white underline">
                visit site
              </Link>
            </div>
          </div>
        </section>
        {/* セクション６--------------------------------------------------------------------- */}
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
    </>
  );
}
