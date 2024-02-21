// ナビゲーションバー（md (768px)以下で出現）
"use client";

import { useParams } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const NavBar_Hidden = () => {
  const { lng } = useParams();

  return (
    <div className="absolute left-3 2xs:left-10 sm:top-2 md:hidden big-phone:flex">
      {/* md (768px)以下でNavigationMenu出現 */}
      <DropdownMenu>
        <DropdownMenuTrigger aria-label="menu_button">
          <AlignJustify size={40} strokeWidth={3} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black/70n ml-5 w-[160px]">
          <DropdownMenuItem className="font-semibold text-white duration-500 hover:underline">
            <Link href="#section1" className="w-full">
              {lng === "ja" ? <span>トップページ</span> : <span>Top</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-white duration-500 hover:underline">
            <Link href="#about" className="w-full">
              {lng === "ja" ? <span>このサイトについて</span> : <span>About</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-white duration-500 hover:underline">
            <Link href="#portfolio1" className="w-full">
              {lng === "ja" ? <span>ポートフォリオ1</span> : <span>Portfolio1</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-white duration-500 hover:underline">
            <Link href="#portfolio2" className="w-full">
              {lng === "ja" ? <span>ポートフォリオ2</span> : <span>Portfolio2</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-white duration-500 hover:underline">
            <Link href="#portfolio3" className="w-full">
              {lng === "ja" ? <span>ポートフォリオ3</span> : <span>Portfolio3</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-white duration-500 hover:underline">
            <Link href="#gallery" className="w-full">
              {lng === "ja" ? <span>ギャラリー</span> : <span>gallery</span>}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar_Hidden;
