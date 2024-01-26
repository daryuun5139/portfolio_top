// Ja_EnButton
"use client";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

type Props = {};

const Ja_EnButton = () => {
  const path = usePathname().slice(3);
  const { lng } = useParams();
  // console.log(path);

  const LangSwitch = () => {
    // 日本語の場合
    if (lng === "ja") {
      return (
        <>
          <div className="hidden w-fit flex-row gap-2 rounded-full bg-black/70 px-5 py-2 text-sm text-white lg:block">
            <span>日本語</span>
            <span> | </span>
            <Link href={`/en/${path}`} className=" duration-500 hover:underline">
              <span className="text-slate-400">英語</span>
            </Link>
          </div>
          <div className="flex w-fit flex-row gap-1 rounded-full bg-black/70 px-5 py-2 text-sm text-white lg:hidden">
            <span>日</span>
            <span>|</span>
            <Link href={`/en/${path}`} className="duration-500 hover:underline">
              <span className="text-slate-400">英</span>
            </Link>
          </div>
        </>
      );
      // 英語の場合
    } else if (lng === "en") {
      return (
        <>
          <div className="hidden w-fit flex-row gap-2 rounded-full bg-black/70 px-5 py-2 text-sm text-white lg:block">
            <Link href={`/ja/${path}`} className="duration-500 hover:underline">
              <span className="text-slate-400">Japanese</span>
            </Link>
            <span> | </span>
            <span>English</span>
          </div>
          <div className="flex w-fit flex-row gap-1 rounded-full bg-black/70 px-5 py-2 text-sm text-white lg:hidden">
            <Link href={`/ja/${path}`} className="duration-500 hover:underline">
              <span className="text-slate-400">Ja</span>
            </Link>
            <span>|</span>
            <span>En</span>
          </div>
        </>
      );
    }
  };
  return (
    <>
      <LangSwitch />
    </>
  );
};

export default Ja_EnButton;
