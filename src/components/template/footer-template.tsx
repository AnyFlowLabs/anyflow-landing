import Container from "@/components/molecules/container";
import Logo from "@/assets/logo-footer.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import GithubIcon from "@/assets/github.svg";
import DiscordIcon from "@/assets/discord.svg";
import { BackedByMolecule } from "../molecules/backed-molecule";

export default function FooterTemplate() {
  return (
    <Container className="bg-blue-0 min-h-[260px]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 pt-[62px]">
        <img src={Logo} alt="Anyflow" />
        <BackedByMolecule />
      </div>

      <div className="mx-auto flex max-w-[1280px] justify-between">
        <p className="text-blue-6 text-sm">
          © 2050 Anyflow. All rights reserved.
        </p>
        <div className="flex gap-6">
          <img src={LinkedinIcon} alt="Linkedin" />
          <img src={TwitterIcon} alt="Linkedin" />
          <img src={GithubIcon} alt="Linkedin" />
          <img src={DiscordIcon} alt="Linkedin" />
        </div>
      </div>
    </Container>
  );
}
