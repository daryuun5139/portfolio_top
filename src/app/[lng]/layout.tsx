import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, DotGothic16 } from "next/font/google";
import { dir } from "i18next";
import { languages } from "../../i18n/setting";
import { Providers } from "@/components/Providers";

const inter = Inter({ subsets: ["latin"] });

const dotGothic = DotGothic16({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--profile-font",
});

export const metadata: Metadata = {
  title: {
    default: "Daryun's Tech Blog",
    template: "%s | Daryun's Tech Blog",
  },
  description: "This Blog is created by Daryun",
};

//generateStaticParams：ビルド時にreturnの内容に基づいて静的ルートを生成する。
export async function generateStaticParams() {
  // return languages.map((lng) => ({ lng })); //修正部分before
  const paths = languages.map((lng) => lng); //修正部分
  return [...paths];
}

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng} dir={dir(lng)} suppressHydrationWarning>
      <head>
        <link rel="icon" href="data:," sizes="any" />
      </head>
      <body className={`${cn(inter.className)} ${cn(dotGothic.variable)}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
