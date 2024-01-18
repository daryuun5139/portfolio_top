//Header

// 各Headerコンポーネントimport
import Ja_EnButton from "./Ja_EnButton";
import NavBar_Normal from "./NavBar_Normal";
import NavBar_Hidden from "./NavBar_Hidden";

type Props = {};

export default async function Header() {
  return (
    <header className="sticky top-6 z-10 flex h-0 w-full justify-center">
      {/* ナビゲーションバー */}
      <NavBar_Hidden />
      <NavBar_Normal />
      <div className="absolute right-0 top-2 mr-10 flex gap-2">
        {/* 日本語、英語切り替え */}
        <Ja_EnButton />
      </div>
    </header>
  );
}
