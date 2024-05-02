import { IconAtom } from "@/components/atoms/icon-atom";
import { LinkAtom } from "@/components/atoms/link-atom";
import { IconType } from "@/data/social-nav-data";

export interface SocialLinkMoleculeProps {
  href: string;
  icon: IconType;
}

export function SocialLinkMolecule({ href, icon }: SocialLinkMoleculeProps) {
  return (
    <LinkAtom
      href={href}
      className="rounded-full border border-transparent p-2 transition-colors duration-300 ease-in-out hover:border-white"
    >
      <IconAtom iconType={icon} />
    </LinkAtom>
  );
}
