export type IconType =
  | "github"
  | "instagram"
  | "linkedin"
  | "discord"
  | "twitter"
  | "app";

export interface SocialLinksProps {
  href: string;
  iconType: IconType;
  text: string;
}

export const socialLinks: SocialLinksProps[] = [
  {
    href: "https://github.com/AnyFlowLabs",
    iconType: "github",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/company/anyflowtool/",
    iconType: "linkedin",
    text: "LinkedIn",
  },
  {
    href: "https://discord.gg/aCygGwBWya",
    iconType: "discord",
    text: "Discord",
  },
  {
    href: "https://twitter.com/anyflow_",
    iconType: "twitter",
    text: "Twitter",
  },
  {
    href: "https://forms.gle/KXNpERyCnyurQWpQ6",
    iconType: "app",
    text: "AnyFlow",
  },
];
