//Header

// 各Headerコンポーネントimport
import Ja_EnButton from "./Ja_EnButton";
import NavBar_Normal from "./NavBar_Normal";
import NavBar_Hidden from "./NavBar_Hidden";

type Props = {};

export default async function Header() {
  return (
    <header className="sticky top-3 z-10 flex h-0 w-full justify-center sm:top-6">
      {/* ナビゲーションバー */}
      <NavBar_Hidden />
      <NavBar_Normal />
      <div className="absolute right-0 mr-10 flex gap-2 sm:top-2">
        {/* 日本語、英語切り替え */}
        <Ja_EnButton />
      </div>
    </header>
  );
}
