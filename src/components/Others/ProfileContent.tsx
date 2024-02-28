"use client";

import { useTranslation } from "../../i18n/index";
import { Trans } from "react-i18next";

type Props = {
  lng: string | string[];
  ns: string;
};

const ProfileContent = ({ lng, ns }: Props) => {
  const { t } = useTranslation(lng.toString(), ns);

  return (
    <div className="flex flex-col">
      <div className="pb-2 font-profile font-semibold leading-7 text-[#003566]">
        <Trans t={t}>{"text1"}</Trans>
      </div>
      <div className="pb-2 font-profile font-semibold leading-7 text-[#003566]">
        <Trans t={t}>{"text2"}</Trans>
      </div>
      <div className="pb-2 font-profile font-semibold leading-7 text-[#003566]">
        <Trans t={t}>{"text3"}</Trans>
      </div>
    </div>
  );
};

export default ProfileContent;
