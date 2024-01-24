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
      <NavigationMenu className="relative hidden w-fit rounded-full bg-black/70 px-8 py-7 md:flex landscape:hidden">
        <NavigationMenuList>
          {/* Topタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#top"
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
            {lng === "ja" ? (
              <NavigationMenuContent className="ml-12 bg-black/70 px-4 py-2">
                <ul className="flex w-[130px] flex-col text-center">
                  <li className=" py-1 ">
                    <NavigationMenuLink
                      href="#portfolio1"
                      className="cursor-pointer text-white duration-500 hover:underline"
                    >
                      <span>ポートフォリオ1</span>
                    </NavigationMenuLink>
                  </li>
                  <li className="py-1">
                    <NavigationMenuLink
                      href="#portfolio2"
                      className="cursor-pointer  text-white duration-500 hover:underline"
                    >
                      <span>ポートフォリオ2</span>
                    </NavigationMenuLink>
                  </li>
                  <li className="py-1">
                    <NavigationMenuLink
                      href="#portfolio3"
                      className="cursor-pointer text-white duration-500 hover:underline"
                    >
                      <span>ポートフォリオ3</span>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            ) : (
              <NavigationMenuContent className="bg-black/70 px-4 py-2">
                <ul className="flex flex-col text-center">
                  <li className=" py-1 ">
                    <NavigationMenuLink
                      href="#portfolio1"
                      className="cursor-pointer text-white duration-500 hover:underline"
                    >
                      {lng === "ja" ? <span>ポートフォリオ1</span> : <span>Portfolio1</span>}
                    </NavigationMenuLink>
                  </li>
                  <li className="py-1">
                    <NavigationMenuLink
                      href="#portfolio2"
                      className="cursor-pointer  text-white duration-500 hover:underline"
                    >
                      {lng === "ja" ? <span>ポートフォリオ2</span> : <span>Portfolio2</span>}
                    </NavigationMenuLink>
                  </li>
                  <li className="py-1">
                    <NavigationMenuLink
                      href="#portfolio3"
                      className="cursor-pointer text-white duration-500 hover:underline"
                    >
                      {lng === "ja" ? <span>ポートフォリオ3</span> : <span>Portfolio3</span>}
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
          {/* Blogタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#blog"
              className="cursor-pointer font-semibold text-white duration-500 hover:underline"
            >
              {lng === "ja" ? (
                <span className="text-xl">ブログ</span>
              ) : (
                <span className="text-2xl">Blog</span>
              )}
            </NavigationMenuLink>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar_Normal;
