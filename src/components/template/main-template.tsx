import { PageTitleMolecule } from "@/components/molecules/page-title-molecule";
import { t } from "i18next";
import { chains } from "@/data/chains";
import { BadgeChainOrganism } from "@/components/organisms/badge-chains-organism";
import { GlassCardContentOrganism } from "../organisms/glass-card-content-organism";

export default function MainTemplate() {
  return (
    <div className="my-40 flex flex-grow flex-col gap-32 pb-10">
      <PageTitleMolecule
        title={t("header.title")}
        subTitle={t("header.subtitle")}
        buttonText={t("header.button")}
      />
      <section className="flex flex-col items-center gap-10 text-center">
        <h2 className="text-3xl text-brand-6">{t("secondSection.title")}</h2>
        <p className="text-2xl text-white">{t("secondSection.subtitle")}</p>
      </section>

      <BadgeChainOrganism chains={chains} className="m-auto" />
      <GlassCardContentOrganism />
    </div>
  );
}
