"use client";

import { useTranslation } from "../../i18n/index";
import { Trans } from "react-i18next";

type Props = {
  lng: string | string[];
  ns: string;
};

const Overview = ({ lng, ns }: Props) => {
  const { t } = useTranslation(lng.toString(), ns);

  return (
    <div className="flex flex-col">
      <div className="pb-2 leading-7 text-[#003566]">
        <Trans t={t}>{"text1"}</Trans>
      </div>
      <div className="text-sm text-[#003566]">
        <Trans t={t}>{"date"}</Trans>
      </div>
      <div className="text-sm text-[#003566]">
        <Trans t={t}>{"responsive"}</Trans>
      </div>
      <div className="text-sm text-[#003566]">
        <Trans t={t}>{"techUsed"}</Trans>
      </div>

      <div className="pt-3 font-bold text-[#003566] ">
        <Trans t={t}>{"caution"}</Trans>
      </div>
    </div>
  );
};

export default Overview;
