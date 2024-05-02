import { Logo } from "@/components/atoms/logo-atom";
import { socialLinks } from "@/data/social-nav-data";
import NavigationListOrganism from "../organisms/navigation-list-organism";

export function FooterTemplate() {
  return (
    <footer className="flex justify-between border-t border-white py-5">
      <Logo className="items-start" />
      <NavigationListOrganism links={socialLinks} title={"Social"} />
    </footer>
  );
}
