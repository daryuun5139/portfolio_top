"use client";

import Image from "next/image";
import Link from "next/link";
import topImageLight from "../../../public/homelogo_black.svg";
import topImageDark from "../../../public/homelogo_brown.svg";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type Props = {
  lng: string;
};

const TopImageSmall = ({ lng }: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      {theme === "light" ? (
        <Link href={`/${lng}/`} legacyBehavior>
          <a aria-label="Home_light">
            <Image
              className="h-24 w-24 pl-3 pt-3 sm:hidden"
              width="0"
              height="0"
              src={topImageLight}
              alt="top-image-light-sm"
              priority={true}
            />
          </a>
        </Link>
      ) : (
        <Link href={`/${lng}/`} legacyBehavior>
          <a aria-label="Home_dark">
            <Image
              className="h-24 w-24 pl-3 pt-3 sm:hidden"
              width="0"
              height="0"
              src={topImageDark}
              alt="top-image-dark-sm"
              priority={true}
            />
          </a>
        </Link>
      )}
    </div>
  );
};

export default TopImageSmall;
