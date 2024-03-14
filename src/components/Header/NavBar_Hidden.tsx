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
        <DropdownMenuContent className="ml-5 w-[250px] bg-white">
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#section1" className="w-full">
              {lng === "ja" ? <span>トップページ</span> : <span>Top</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#about" className="w-full">
              {lng === "ja" ? <span>このサイトについて</span> : <span>About</span>}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#portfolio1" className="w-full">
              {lng === "ja" ? (
                <div className="flex flex-col">
                  <span>ポートフォリオ1</span>
                  <span className="pl-2">Simple blog</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Portfolio1</span>
                  <span className="pl-2">Simple blog</span>
                </div>
              )}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#portfolio2" className="w-full">
              {lng === "ja" ? (
                <div className="flex flex-col">
                  <span>ポートフォリオ2</span>
                  <span className="pl-2">Learn English with AI</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Portfolio2</span>
                  <span className="pl-2">Learn English with AI</span>
                </div>
              )}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#portfolio3" className="w-full">
              {lng === "ja" ? (
                <div className="flex flex-col">
                  <span>ポートフォリオ3</span>
                  <span className="pl-2">Learn English with Video</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Portfolio3</span>
                  <span className="pl-2">Learn English with Video</span>
                </div>
              )}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#portfolio4" className="w-full">
              {lng === "ja" ? (
                <div className="flex flex-col">
                  <span>ポートフォリオ4</span>
                  <span className="pl-2">spot mapping app</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Portfolio4</span>
                  <span className="pl-2">spot mapping app</span>
                </div>
              )}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#portfolio5" className="w-full">
              {lng === "ja" ? (
                <div className="flex flex-col">
                  <span>ポートフォリオ5</span>
                  <span className="pl-2">Color palette</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Portfolio5</span>
                  <span className="pl-2">Color palette</span>
                </div>
              )}
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="font-semibold text-[#003566] duration-500 hover:underline">
            <Link href="#portfolio6" className="w-full">
              {lng === "ja" ? (
                <div className="flex flex-col">
                  <span>ポートフォリオ6</span>
                  <span className="pl-2">Corporate site01</span>
                </div>
              ) : (
                <div className="flex flex-col">
                  <span>Portfolio6</span>
                  <span className="pl-2">Corporate site01</span>
                </div>
              )}
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavBar_Hidden;
