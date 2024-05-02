import { cn } from "@/lib/utils";

export interface NavigationLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export default function NavigationLinkAtom({
  href,
  className,
  ...props
}: NavigationLinkProps) {
  return (
    <a
      className={cn("text-white", className)}
      href={href}
      target={"_blank"}
      {...props}
    />
  );
}
