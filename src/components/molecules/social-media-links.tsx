import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import GithubIcon from "@/assets/github.svg";
import DiscordIcon from "@/assets/discord.svg";
import Icon from "@/components/atoms/icon";
import { cn } from "@/lib/utils";

export interface SocialMediaLinksProps
  extends React.HTMLAttributes<HTMLDivElement> {}

const SocialMediaLinks: React.FC<SocialMediaLinksProps> = ({
  className,
  ...props
}) => (
  <div className={cn("flex gap-6", className)} {...props}>
    <Icon src={GithubIcon} alt="Github" />
    <Icon src={LinkedinIcon} alt="Linkedin" />
    <Icon src={DiscordIcon} alt="Discord" />
    <Icon src={TwitterIcon} alt="Twitter" />
  </div>
);

export default SocialMediaLinks;
