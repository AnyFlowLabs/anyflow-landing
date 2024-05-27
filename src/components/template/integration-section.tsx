import { IntegrationDisplay } from "@/components/organisms/integration-display";
import { useTranslation } from "react-i18next";

const IntegrationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="mt-20">
      <IntegrationDisplay
        title={t("features.continuousIntegration.title")}
        description={t("features.continuousIntegration.description")}
      />
      <IntegrationDisplay
        title={t("features.handsOffDeployment.title")}
        description={t("features.handsOffDeployment.description")}
      />
      <IntegrationDisplay
        title={t("features.trustAndControl.title")}
        description={t("features.trustAndControl.description")}
      />
      <IntegrationDisplay
        title={t("features.unifiedCosts.title")}
        description={t("features.unifiedCosts.description")}
      />
    </section>
  );
};

export default IntegrationSection;
