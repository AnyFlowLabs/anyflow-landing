export type IconType = "github" | "instagram" | "discord" | "twitter" | "app";

export interface SocialLinksProps {
  href: string;
  iconType: IconType;
  text: string;
}

export const socialLinks: SocialLinksProps[] = [
  { href: "https://www.github.com/", iconType: "github", text: "Facebook" },
  {
    href: "https://www.instagram.com/",
    iconType: "instagram",
    text: "Instagram",
  },
  { href: "https://discord.com/", iconType: "discord", text: "Discord" },
  {
    href: "https://twitter.com/?lang=en",
    iconType: "twitter",
    text: "Twitter",
  },
  { href: "https://www.anyflow.com/", iconType: "app", text: "AnyFlow" },
];
