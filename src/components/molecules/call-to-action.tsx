import Heading from "@/components/atoms/heading";
// import ButtonAccess from "@/components/atoms/button-access";
// import BUTTON_ACCESS from "@/data/button-access";
import { useTranslation } from "react-i18next";
import ButtonGithub from "../atoms/button-github";
import BUTTON_GITHUB from "@/data/button-github";

const CallToAction = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center gap-6">
      <Heading text={t("callToAction")} />
      {/* <ButtonAccess url={BUTTON_ACCESS}>{t("header.button_github")}</ButtonAccess> */}
      <ButtonGithub url={BUTTON_GITHUB} />
    </div>
  );
};

export default CallToAction;
