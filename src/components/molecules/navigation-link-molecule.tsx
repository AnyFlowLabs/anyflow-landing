import NavigationLinkAtom from "@/components/atoms/navigation-link-atom";

export interface NavigationLinkMoleculeProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string;
  href: string;
}

export default function NavigationLinkMolecule({
  text,
  ...props
}: NavigationLinkMoleculeProps) {
  return (
    <NavigationLinkAtom {...props}>
      <li>{text}</li>
    </NavigationLinkAtom>
  );
}
