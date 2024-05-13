import { SocialNavOrganism } from "@/components/organisms/social-nav-organism";
import { socialLinks } from "@/data/social-nav-data";
import { LogoMolecule } from "@/components/molecules/logo-molecule";
// import { LanguageChange } from "@/components/ui/language-change";

export default function HeaderTemplate() {
  return (
    <header className="flex justify-between py-5">
      <LogoMolecule showLanguage={true} />
      <SocialNavOrganism links={socialLinks} />
    </header>
  );
}
