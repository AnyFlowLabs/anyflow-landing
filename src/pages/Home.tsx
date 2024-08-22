import Container from "@/components/molecules/container";
import Group from "@/assets/group.svg";
import { BadgeChainOrganism } from "@/components/organisms/badge-chains-organism";
import { chains } from "@/data/chains";
import LogoHeader from "@/assets/logo-header.svg";
import FooterContent from "@/components/organisms/footer-content";
import TryItNowSection from "@/components/template/try-it-now-section";
import IntegrationSection from "@/components/template/integration-section";
import ButtonAccess from "@/components/atoms/button-access";
import ButtonGithub from "@/components/atoms/button-github";
import { DOCS_URL } from "@/data/button-access";
import BUTTON_GITHUB from "@/data/button-github";
// import SocialMediaLinks from "@/components/molecules/social-media-links";
// import { ChangeLanguageMolecule } from "@/components/molecules/change-language-molecule";

import { useTranslation } from "react-i18next";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <Container className="bg-hero bg-cover bg-center ">
        <header className="flex max-w-[1280px] px-3 md:px-6 flex-col-reverse items-center gap-5 py-5 lg:mx-auto lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <img src={LogoHeader} alt="Logo" className="w-full max-w-[230px]" />
            <a target="_blank" className="text-white hidden lg:inline" href={DOCS_URL}>Docs</a>
          </div>
          <div className="flex w-full lg:w-auto justify-between">
            <div className="flex items-center gap-3">
              {/* <ChangeLanguageMolecule /> */}
              <a target="_blank" className="text-white lg:hidden" href={DOCS_URL}>Docs</a>
            </div>
            {/* <SocialMediaLinks className="flex w-full justify-end lg:justify-normal" /> */}
            <ButtonGithub url={BUTTON_GITHUB} />
          </div>
        </header>
        <div className="mx-auto flex max-w-[1029px] flex-col items-center gap-7 py-[100px] lg:py-[170px] px-3 md:px-6">
          <h2 className="text-center text-[50px] leading-[80px] text-white lg:text-[79px]">
            {/* <span className="">{t("header.title1")}</span>{" "} */}
            {t("header.title2")}
          </h2>
          <h3 className="text-blue-9 lg:text-2xl">
            <span className="text-brand-6">{t("header.subtitle1")}</span>
            {t("header.subtitle2")}
          </h3>
          {/* Smart Contract Deployment in 1 57" minutes 
              Smart Contract Deployment in Continuous Integration
              Smart Contract Deployment without gas
              Smart Contract Deployment without RPC providers
              Smart Contract Deployment without PK custody 
              */}
          {/* <ButtonAccess url={BUTTON_ACCESS}>{t("header.button")}</ButtonAccess> */}
        </div>
      </Container>

      <Container className="flex flex-col bg-blue-1 pb-[82px] px-3 md:px-6">
        <div className="mx-auto flex max-w-[1232px] flex-col gap-[50px] py-[100px] lg:grid lg:grid-cols-5">
          <div className="col-span-2 flex flex-col items-center gap-6 lg:items-start">
            <h4 className="text-brand-6">{t("secondSection.info")}</h4>
            <h3 className="text-[32px] text-white">
              {t("secondSection.title")}
            </h3>
            <p className="text-blue-8">{t("secondSection.subtitle")}</p>
            <div>
              <ButtonAccess url={DOCS_URL}>
                {t("header.docs")}
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
