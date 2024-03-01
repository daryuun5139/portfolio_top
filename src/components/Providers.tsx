"use client";

import { getViewPortHeight } from "@/lib/getViewPortHeight";

type Props = {};

const Providers = ({ children }: { children: React.ReactNode }) => {
  getViewPortHeight();
  return <>{children}</>;
};
export default Providers;
