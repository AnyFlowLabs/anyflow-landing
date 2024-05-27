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
        <header className="mx-auto flex max-w-[1280px] justify-between py-5">
          <img src={LogoHeader} alt="Logo" />
          <div className="flex">
            <img src={LanguageIcon} />
            <ChangeLanguageMolecule />
            <SocialMediaLinks />
          </div>
        </header>
        <div className="mx-auto flex max-w-[1029px] flex-col items-center gap-7 py-[170px]">
          <h2 className="text-center text-[79px] leading-[80px] text-white">
            {t("header.title1")}{" "}
            <span className="text-brand-6">{t("header.title2")}</span>
          </h2>
          <h3 className="text-2xl text-blue-9">{t("header.subtitle")}</h3>
          <ButtonAccess url={BUTTON_ACCESS}>{t("header.button")}</ButtonAccess>
        </div>
      </Container>

      <Container className="flex flex-col bg-blue-1 pb-[82px]">
        <div className="mx-auto grid max-w-[1232px] grid-cols-5 gap-[50px] py-[100px]">
          <div className="col-span-2 flex flex-col gap-6">
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
