"use client";

import { getViewPortHeight } from "@/lib/getViewPortHeight";

type Props = {};

export function Providers({ children }: { children: React.ReactNode }) {
  getViewPortHeight();
  return <>{children}</>;
}
