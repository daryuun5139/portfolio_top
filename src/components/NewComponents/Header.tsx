//Header

// 各Headerコンポーネントimport
import NavBar from "./NavBar";
import Ja_EnButton from "./Ja_EnButton";
import ThemeButton from "./ThemeButton";

type Props = {
  lng: string;
};

export default async function Header() {
  // const { idList_ja, idList_en } = await getIdRelation();

  return (
    <header className="sticky top-6 z-10 flex h-0 w-full justify-center">
      {/* ナビゲーションバー */}
      <NavBar />
      <div className="absolute right-0 top-2 mr-10 flex gap-2">
        {/* 日本語、英語切り替え */}
        <Ja_EnButton />
        {/* ダークモードボタン */}
        <ThemeButton />
      </div>
    </header>
  );
}
