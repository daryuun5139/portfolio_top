// ナビゲーションバー(md (768px)以上)
"use client";

import { useParams } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const NavBar_Normal = () => {
  const { lng } = useParams();

  return (
    <>
      {/* md (768px)以上でNavigationMenu出現 */}
      <NavigationMenu className="relative hidden w-fit rounded-full bg-black/70 px-8 py-7 md:flex big-phone:hidden">
        <NavigationMenuList>
          {/* Topタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#section1"
              className="cursor-pointer font-semibold text-white duration-500 hover:underline"
            >
              {lng === "ja" ? (
                <span className="text-xl">Top</span>
              ) : (
                <span className="text-2xl">Top</span>
              )}
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Aboutタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className="cursor-pointer font-semibold text-white duration-500 hover:underline"
            >
              {lng === "ja" ? (
                <span className="text-xl">サイトについて</span>
              ) : (
                <span className="text-2xl">About</span>
              )}
            </NavigationMenuLink>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          {/* Portfolioタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="test">
              <span className="test cursor-pointer font-semibold text-white duration-500 hover:underline">
                {lng === "ja" ? (
                  <span className="text-xl">ポートフォリオ</span>
                ) : (
                  <span className="text-2xl">Portfolios</span>
                )}
              </span>
            </NavigationMenuTrigger>
            {/* Portfolioサブタグ----------------------------------------------------------- */}
            <NavigationMenuContent className="ml-12 bg-black/70 px-4 py-2">
              <ul className="flex w-[330px] flex-col text-start">
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio1"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    {lng === "ja" ? (
                      <span>ポートフォリオ1 / Simple blog</span>
                    ) : (
                      <span className="text-lg">Portfolio1 / Simple blog</span>
                    )}
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio2"
                    className="cursor-pointer  text-white duration-500 hover:underline"
                  >
                    {lng === "ja" ? (
                      <span>ポートフォリオ2 / Learn English with AI</span>
                    ) : (
                      <span className="text-lg">Portfolio2 / Learn English with AI</span>
                    )}
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio3"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    {lng === "ja" ? (
                      <span>ポートフォリオ3 / Learn English with Video</span>
                    ) : (
                      <span className="text-lg">Portfolio3 / Learn English with Video</span>
                    )}
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio4"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    {lng === "ja" ? (
                      <span>ポートフォリオ4</span>
                    ) : (
                      <span className="text-lg">Portfolio4</span>
                    )}
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio5"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    {lng === "ja" ? (
                      <span>ポートフォリオ5 / Color palette</span>
                    ) : (
                      <span className="text-lg">Portfolio5 / Color palette</span>
                    )}
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio6"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    {lng === "ja" ? (
                      <span>ポートフォリオ6 / Corporate site01</span>
                    ) : (
                      <span className="text-lg">Portfolio6 / Corporate site01</span>
                    )}
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar_Normal;
