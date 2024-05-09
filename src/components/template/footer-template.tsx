import { socialLinks } from "@/data/social-nav-data";
import NavigationListOrganism from "../organisms/navigation-list-organism";
import { LogoMolecule } from "@/components/molecules/logo-molecule";

export default function FooterTemplate() {
  return (
    <footer className="flex justify-between border-t border-white py-5">
      <LogoMolecule />
      <NavigationListOrganism links={socialLinks} title={"Social"} />
    </footer>
  );
}
