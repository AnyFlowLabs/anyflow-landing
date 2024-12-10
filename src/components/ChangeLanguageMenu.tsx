import { Button, ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type LanguageOption = {
  display: string;
  code: string;
};

const LANGUAGES: Record<string, LanguageOption> = {
  "EN-US": { display: "EN-US", code: "en_US" },
  "PT-BR": { display: "PT-BR", code: "pt_BR" },
};

export function ChangeLanguageMenu() {
  const { i18n } = useTranslation();

  const [showLanguage, setShowLanguage] = useState(() => {
    const currentCode = i18n.language;
    return (
      Object.values(LANGUAGES).find((lang) => lang.code === currentCode)
        ?.display || "EN-US"
    );
  });

  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const toggleLanguage = (newLanguage: string) => {
    const selectedLang = LANGUAGES[newLanguage];
    if (selectedLang) {
      setCurrentLanguage(selectedLang.code);
      setShowLanguage(selectedLang.display);
    }
  };

  return (
    <ButtonGroup>
      {Object.entries(LANGUAGES).map(([key, lang]) => (
        <Button
          key={key}
          onClick={() => toggleLanguage(key)}
          variant={showLanguage === lang.display ? "solid" : "ghost"}
          bg={showLanguage === lang.display ? "gray.600" : "transparent"}
          size="sm"
        >
          {lang.display}
        </Button>
      ))}
    </ButtonGroup>
  );
}
