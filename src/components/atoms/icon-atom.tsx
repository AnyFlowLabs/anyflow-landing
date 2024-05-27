import { IconType } from "@/data/social-nav-data";
import {
  DiscordLogoIcon,
  GitHubLogoIcon,
  InstagramLogoIcon,
  Link2Icon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";

export interface IconAtomProps {
  iconType: IconType;
}

export function IconAtom({ iconType }: IconAtomProps) {
  switch (iconType) {
    case "linkedin":
      return <LinkedInLogoIcon className="size-8" color={"#FFF"} />;
    case "discord":
      return <DiscordLogoIcon className="size-8" color={"#FFF"} />;
    case "github":
      return <GitHubLogoIcon className="size-8" color={"#FFF"} />;
    case "twitter":
      return <TwitterLogoIcon className="size-8" color={"#FFF"} />;
    case "instagram":
      return <InstagramLogoIcon className="size-8" color={"#FFF"} />;
    case "app":
      return <Link2Icon className="size-8" color={"#FFF"} />;
  }
}
