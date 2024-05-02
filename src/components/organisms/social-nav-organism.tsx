import { SocialLinksProps } from "@/data/social-nav-data";
import { SocialLinkMolecule } from "@/components/molecules/social-link-molecule";
import { cn } from "@/lib/utils";

export interface SocialLinkNavProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  links: SocialLinksProps[];
}

export function SocialNavOrganism({
  links,
  className,
  ...props
}: SocialLinkNavProps) {
  return (
    <nav className={cn("flex gap-10", className)} {...props}>
      {links.map((link) => (
        <SocialLinkMolecule
          key={link.href}
          href={link.href}
          icon={link.iconType}
        />
      ))}
    </nav>
  );
}
