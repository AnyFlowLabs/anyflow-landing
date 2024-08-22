// import { pt_BR } from "@/locales/pt_BR/pt-BR";
import { en_US } from "@/locales/en_US/en-US";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "en_US";
    resources: {
      // pt_BR: typeof pt_BR.translation;
      en_US: typeof en_US.translation;
    };
  }
}
