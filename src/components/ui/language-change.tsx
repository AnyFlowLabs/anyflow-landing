import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ChangeLanguageMolecule } from "../molecules/change-language-molecule";

export function LanguageChange() {
  const [lng, setLng] = useState("en_US");

  const { t, i18n } = useTranslation();

  const changeLanguageHandle = () => {
    if (lng === "pt_BR") {
      i18n.changeLanguage(lng);
      return setLng("en_US");
    }
    i18n.changeLanguage("en_US");
    return setLng("pt_BR");
  };

  return <ChangeLanguageMolecule />;
}
