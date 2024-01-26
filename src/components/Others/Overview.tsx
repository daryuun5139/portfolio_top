"use client";

import { useTranslation } from "../../i18n/index";
import { Trans } from "react-i18next";

type Props = {
  lng: string | string[];
  ns: string;
};

const Overview = async ({ lng, ns }: Props) => {
  const { t } = await useTranslation(lng.toString(), ns);

  return (
    <>
      <Trans t={t}>{"text1"}</Trans>
    </>
  );
};

export default Overview;
