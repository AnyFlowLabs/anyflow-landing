import { Logo } from "@/components/atoms/logo-atom";
import { SocialNavOrganism } from "@/components/organisms/social-nav-organism";
import { socialLinks } from "@/data/social-nav-data";

export default function HeaderTemplate() {
  return (
    <header className="flex justify-between py-5">
      <Logo />
      <SocialNavOrganism links={socialLinks} />
    </header>
  );
}
