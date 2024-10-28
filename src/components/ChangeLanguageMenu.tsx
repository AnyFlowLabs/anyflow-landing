import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Image,
  HStack,
} from "@chakra-ui/react";
import LanguageIcon from "@/assets/language-icon.svg";
import ArrowDown from "@/assets/arrow-down.svg";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function ChangeLanguageMenu() {
  const { i18n } = useTranslation();

  const [showLanguage, setShowLanguage] = useState("EN-US");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const toggleLanguage = (newLanguage: string) => {
    setCurrentLanguage(newLanguage === "EN-US" ? "en_US" : "pt_BR");
    setShowLanguage(newLanguage);
  };

  return (
    <Menu>
      <MenuButton
        as={Button}
        variant="ghost"
        color="white"
        _hover={{ bg: "transparent", color: "white" }}
        _active={{ bg: "transparent" }}
        _focus={{ boxShadow: "none" }}
      >
        <HStack spacing={3}>
          <Image src={LanguageIcon} alt="Language" />
          {showLanguage}
          <Image src={ArrowDown} alt="Arrow down" />
        </HStack>
      </MenuButton>
      <MenuList bg="gray.600">
        <MenuItem
          onClick={() => toggleLanguage("EN-US")}
          bg="transparent"
          color="white"
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
        >
          EN-US
        </MenuItem>
        <MenuItem
          onClick={() => toggleLanguage("PT-BR")}
          bg="transparent"
          color="white"
          _hover={{ bg: "transparent" }}
          _focus={{ bg: "transparent" }}
        >
          PT-BR
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
