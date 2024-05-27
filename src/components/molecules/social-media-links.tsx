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
    <Icon
      src={GithubIcon}
      alt="Github"
      url={"https://github.com/AnyFlowLabs"}
    />
    <Icon
      src={LinkedinIcon}
      alt="Linkedin"
      url={"https://www.linkedin.com/company/anyflowtool/"}
    />
    <Icon
      src={DiscordIcon}
      alt="Discord"
      url={"https://discord.gg/aCygGwBWya"}
    />
    <Icon
      src={TwitterIcon}
      alt="Twitter"
      url={"https://twitter.com/anyflow_"}
    />
  </div>
);

export default SocialMediaLinks;
