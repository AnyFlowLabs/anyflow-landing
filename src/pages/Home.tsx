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

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <main>
      <Container className="bg-hero bg-cover bg-center ">
        <header className="flex max-w-[1280px] flex-col-reverse items-center gap-5 px-3 py-5 md:px-6 lg:mx-auto lg:flex-row lg:justify-between">
          <div className="flex items-center gap-5">
            <img src={LogoHeader} alt="Logo" className="w-full max-w-[230px]" />
            <a
              target="_blank"
              className="hidden text-white lg:inline"
              href={DOCS_URL}
            >
              Docs
            </a>
            <Link to={"/chains"}>Chains</Link>
          </div>
          <div className="flex w-full justify-between lg:w-auto">
            <div className="flex items-center gap-3">
              <a
                target="_blank"
                className="text-white lg:hidden"
                href={DOCS_URL}
              >
                Docs
              </a>
            </div>
            <ButtonGithub url={BUTTON_GITHUB} />
          </div>
        </header>
        <div className="mx-auto flex max-w-[1029px] flex-col items-center gap-7 px-3 py-[100px] md:px-6 lg:py-[170px]">
          <h2 className="text-center text-[50px] leading-[80px] text-white lg:text-[79px]">
            {t("header.title2")}
          </h2>
          <h3 className="text-blue-9 lg:text-2xl">
            <span className="text-brand-6">{t("header.subtitle1")}</span>
            {t("header.subtitle2")}
          </h3>

          <div className="mx-auto mt-4 flex w-full flex-col items-center justify-center gap-16 rounded-md bg-black p-6 md:mt-16 md:flex-row">
            <div className="flex flex-1 flex-col gap-0">
              <div className="text-lg font-bold text-white">
                Stay tuned! Support for Solana is coming soon to AnyFlow!
              </div>
              <div className="text-sm text-white">
                We are currently in the alpha stage, and we want you to be part
                of this journey. Request early access and help us shape the
                future of our platform!
              </div>
            </div>
            <ButtonAccess url="https://docs.google.com/forms/d/e/1FAIpQLSdBLFsdjxCJPuc8X7yEqzrwd-i8cloKxNUkcMMzPY1m6OMb5Q/viewform">
              Request Access
            </ButtonAccess>
          </div>
        </div>
      </Container>

      <Container className="flex flex-col bg-blue-1 px-3 pb-[82px] md:px-6">
        <div className="mx-auto flex max-w-[1232px] flex-col gap-[50px] py-[100px] lg:grid lg:grid-cols-5">
          <div className="col-span-2 flex flex-col items-center gap-6 lg:items-start">
            <h4 className="text-brand-6">{t("secondSection.info")}</h4>
            <h3 className="text-[32px] text-white">
              {t("secondSection.title")}
            </h3>
            <p className="text-blue-8">{t("secondSection.subtitle")}</p>
            <div>
              <ButtonAccess url={DOCS_URL}>{t("header.docs")}</ButtonAccess>
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
