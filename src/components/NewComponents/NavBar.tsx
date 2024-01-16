// ナビゲーションバー
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

const NavBar = () => {
  const { lng } = useParams();

  return (
    <>
      <NavigationMenu className="relative flex w-fit rounded-full bg-black/70 px-8 py-7">
        <NavigationMenuList>
          {/* Topタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#top"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline"
            >
              Top
            </NavigationMenuLink>
          </NavigationMenuItem>
          {/* Aboutタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline"
            >
              About
            </NavigationMenuLink>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
          {/* Portfolioタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuTrigger className="test">
              <span className="test cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline">
                Portfolios
              </span>
            </NavigationMenuTrigger>
            {/* Portfolioサブタグ----------------------------------------------------------- */}
            <NavigationMenuContent className="bg-black/70 px-4 py-2">
              <ul>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio1"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    Portfolio1
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio2"
                    className="cursor-pointer  text-white duration-500 hover:underline"
                  >
                    Portfolio2
                  </NavigationMenuLink>
                </li>
                <li className="py-1">
                  <NavigationMenuLink
                    href="#portfolio3"
                    className="cursor-pointer text-white duration-500 hover:underline"
                  >
                    Portfolio3
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          {/* Blogタグ----------------------------------------------------------- */}
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#blog"
              className="cursor-pointer text-2xl font-semibold text-white duration-500 hover:underline"
            >
              Blog
            </NavigationMenuLink>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};

export default NavBar;
