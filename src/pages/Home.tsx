import Container from "@/components/molecules/container";
import Group from "@/assets/group.svg";
import { BadgeChainOrganism } from "@/components/organisms/badge-chains-organism";
import { chains } from "@/data/chains";
import LogoHeader from "@/assets/logo-header.svg";
import FooterContent from "@/components/organisms/footer-content";
import TryItNowSection from "@/components/template/try-it-now-section";
import IntegrationSection from "@/components/template/integration-section";
import ButtonAccess from "@/components/atoms/button-access";
import BUTTON_ACCESS from "@/data/button-access";
import SocialMediaLinks from "@/components/molecules/social-media-links";
import { ChangeLanguageMolecule } from "@/components/molecules/change-language-molecule";
import LanguageIcon from "@/assets/language-icon.svg";
import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <Container className="bg-hero bg-cover bg-center ">
        <header className="flex max-w-[1280px] flex-col-reverse items-center gap-5 py-5 lg:mx-auto lg:flex-row lg:justify-between lg:pr-16">
          <img src={LogoHeader} alt="Logo" className="w-full max-w-[230px]" />
          <div className="flex w-full lg:w-auto">
            <img src={LanguageIcon} />
            <ChangeLanguageMolecule />
            <SocialMediaLinks className="flex w-full justify-end lg:justify-normal" />
          </div>
        </header>
        <div className="mx-auto flex max-w-[1029px] flex-col items-center gap-7 py-[100px] lg:py-[170px]">
          <h2 className="text-center text-[50px] leading-[80px] text-white lg:text-[79px]">
            {t("header.title1")}{" "}
            <span className="text-brand-6">{t("header.title2")}</span>
          </h2>
          <h3 className="text-blue-9 lg:text-2xl">{t("header.subtitle")}</h3>
          <ButtonAccess url={BUTTON_ACCESS}>{t("header.button")}</ButtonAccess>
        </div>
      </Container>

      <Container className="flex flex-col bg-blue-1 pb-[82px]">
        <div className="mx-auto flex max-w-[1232px] flex-col gap-[50px] py-[100px] lg:grid lg:grid-cols-5">
          <div className="col-span-2 flex flex-col items-center gap-6 lg:items-start">
            <h4 className="text-brand-6">{t("secondSection.info")}</h4>
            <h3 className="text-[32px] text-white">
              {t("secondSection.title")}
            </h3>
            <p className="text-blue-8">{t("secondSection.subtitle")}</p>
            <div>
              <ButtonAccess url={BUTTON_ACCESS}>
                {t("header.button")}
              </ButtonAccess>
            </div>
          </div>

          <img src={Group} alt="App image" className=" col-span-3 rounded-xl" />
        </div>
        <BadgeChainOrganism chains={chains} className="m-auto" />

        <IntegrationSection />

        <TryItNowSection />
      </Container>
      <FooterContent />
    </main>
  );
}
