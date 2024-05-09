import { SocialNavOrganism } from "@/components/organisms/social-nav-organism";
import { socialLinks } from "@/data/social-nav-data";
import { LogoAtom } from "@/components/atoms/logo-atom";
import { LogoMolecule } from "../molecules/logo-molecule";

export default function HeaderTemplate() {
  return (
    <header className="flex justify-between py-5">
      <LogoMolecule />

      <SocialNavOrganism links={socialLinks} />
    </header>
  );
}
