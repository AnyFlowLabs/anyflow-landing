import { GlassCard } from "../molecules/glass-card";
import { PageTitleMolecule } from "../molecules/page-title-molecule";
import { t } from "i18next";
import { SectionContentMolecule } from "../molecules/section-content-molecule";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export default function MainTemplate() {
  return (
    <div className="my-40 flex flex-grow flex-col gap-32 pb-10">
      <PageTitleMolecule
        title={t("header.title")}
        subTitle={t("header.subtitle")}
        buttonText={t("header.button")}
      />
      <section className="flex flex-col items-center gap-10 text-center">
        <h2 className="text-3xl text-white">{t("secondSection.title")}</h2>
        <p className="text-2xl text-white">{t("secondSection.subtitle")}</p>
      </section>
      <section className="flex flex-col gap-10 text-center">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <GlassCard>
                <SectionContentMolecule
                  title={t("features.continuousIntegration.title")}
                  description={t("features.continuousIntegration.description")}
                />
              </GlassCard>
            </CarouselItem>
            <CarouselItem>
              <GlassCard>
                <SectionContentMolecule
                  title={t("features.handsOffDeployment.title")}
                  description={t("features.handsOffDeployment.description")}
                />
              </GlassCard>
            </CarouselItem>
            <CarouselItem>
              <GlassCard>
                <SectionContentMolecule
                  title={t("features.trustAndControl.title")}
                  description={t("features.trustAndControl.description")}
                />
              </GlassCard>
            </CarouselItem>
            <CarouselItem>
              <GlassCard>
                <SectionContentMolecule
                  title={t("features.unifiedCosts.title")}
                  description={t("features.unifiedCosts.description")}
                />
              </GlassCard>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </section>
    </div>
  );
}
