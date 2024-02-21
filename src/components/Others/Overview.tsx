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
      <div>
        <Trans t={t}>{"text1"}</Trans>
      </div>
      <div className="text-sm">
        <Trans t={t}>{"techUsed"}</Trans>
      </div>
    </div>
  );
};

export default Overview;
