import { SocialLinksProps } from "@/data/social-nav-data";
import NavigationLinkMolecule from "../molecules/navigation-link-molecule";
import { cn } from "@/lib/utils";

export interface NavigationListOrganismProps
  extends React.HTMLAttributes<HTMLUListElement> {
  title: string;
  links: SocialLinksProps[];
}

export default function NavigationListOrganism({
  title,
  links,
  className,
  ...props
}: NavigationListOrganismProps) {
  return (
    <nav className={cn("flex flex-col gap-2 ", className)} {...props}>
      <h3 className="font-bold text-white">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <NavigationLinkMolecule
            key={link.href}
            href={link.href}
            text={link.text}
          />
        ))}
      </ul>
    </nav>
  );
}
