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
import ArrowDown from "@/assets/arrow-down.svg";

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
        <Button
          variant="outline"
          className="flex gap-3 border-none bg-transparent text-white hover:bg-transparent hover:text-white focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-opacity-50"
        >
          {showLanguage}
          <img src={ArrowDown} alt="Arrow down" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-grey-6">
        <DropdownMenuRadioGroup
          value={showLanguage}
          onValueChange={setShowLanguage}
        >
          <DropdownMenuRadioItem
            value="EN-US"
            onClick={toggleLanguage}
            className="bg-transparent text-white hover:bg-transparent hover:text-white"
          >
            EN-US
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem
            className="bg-transparent text-white hover:bg-transparent hover:text-white"
            value="PT-BR"
            onClick={toggleLanguage}
          >
            PT-BR
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
