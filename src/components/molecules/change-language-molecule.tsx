import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function ChangeLanguageMolecule() {
  const { i18n } = useTranslation();

  const [showLanguage, setShowLanguage] = useState("EN-US");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en_US" ? "pt_BR" : "en_US");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="border-none bg-grey-5 text-white">
          {showLanguage}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-grey-6">
        <DropdownMenuRadioGroup
          value={showLanguage}
          onValueChange={setShowLanguage}
        >
          <DropdownMenuRadioItem value="EN-US" onClick={toggleLanguage}>
            EN-US
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="PT-BR" onClick={toggleLanguage}>
            PT-BR
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
