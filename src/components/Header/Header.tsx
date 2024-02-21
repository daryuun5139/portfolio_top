//Header

// 各Headerコンポーネントimport
import Ja_EnButton from "./Ja_EnButton";
import dynamic from "next/dynamic";
const Dynamic_NavBar_Hidden = dynamic(() => import("./NavBar_Hidden"), {
  ssr: false,
});
const Dynamic_NavBar_Normal = dynamic(() => import("./NavBar_Normal"), {
  ssr: false,
});

type Props = {};

export default function Header() {
  return (
    <header className="sticky top-3 z-10 flex h-0 w-full justify-center md:top-6">
      {/* ナビゲーションバー */}
      <Dynamic_NavBar_Hidden />
      <Dynamic_NavBar_Normal />
      <div className="absolute right-0 mr-3 flex gap-2 2xs:mr-10 sm:top-2">
        {/* 日本語、英語切り替え */}
        <Ja_EnButton />
      </div>
    </header>
  );
}
