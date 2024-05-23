import Container from "@/components/molecules/container";
import Group from "@/assets/group.svg";
import { BadgeChainOrganism } from "@/components/organisms/badge-chains-organism";
import { chains } from "@/data/chains";
import LinkedinIcon from "@/assets/linkedin.svg";
import TwitterIcon from "@/assets/twitter.svg";
import GithubIcon from "@/assets/github.svg";
import DiscordIcon from "@/assets/discord.svg";
import LogoHeader from "@/assets/logo-header.svg";
import FooterTemplate from "@/components/template/footer-template";
import FooterContent from "@/components/organisms/footer-content";
import TryItNowSection from "@/components/template/try-it-now-section";
import IntegrationSection from "@/components/template/integration-section";

export default function HomePage() {
  return (
    <main>
      <Container className="bg-blue-2">
        <header className="mx-auto max-w-[1280px] border border-white py-5">
          <img src={LogoHeader} alt="Linkedin" />
        </header>
        <div className="mx-auto flex max-w-[1029px] flex-col items-center gap-7 py-[170px]">
          <h1 className="flex text-center text-[79px] leading-[80px] text-white">
            Smart Contract Deployment in 1'57''minutes
          </h1>
          <h3 className="text-blue-9 text-2xl">
            Effortless and secure automation for web3 DevOps
          </h3>
          <button className="bg-brand-6 px-6 py-3 text-white">
            Request access
          </button>
        </div>
      </Container>

      <Container className="bg-blue-1 pb-[82px]">
        <div className="mx-auto grid max-w-[1232px] grid-cols-5 gap-[50px] py-[100px]">
          <div className="col-span-2 flex flex-col gap-6">
            <h4 className="text-brand-6">Optimize your deploy</h4>
            <h3 className="text-[32px] text-white">
              Redefine Smart Contract Deployment
            </h3>
            <p className="text-blue-8">
              AnyFlow empowers tech leads and solo web3 developers to achieve
              agile smart contract deployment. This robust tool streamlines
              automation and enhances DevOps processes, ensuring exceptional
              code quality across diverse blockchains. Leverage testnets for
              pre-production accuracy testing and enjoy seamless deployment to
              multiple testnets without the hassle of faucets or API keys.
            </p>
            <button className="bg-brand-6 px-6 py-3 text-white">
              Request access
            </button>
          </div>

          <img src={Group} alt="App image" className="col-span-3" />
        </div>
        <BadgeChainOrganism chains={chains} className="m-auto" />

        <IntegrationSection />

        <TryItNowSection />
      </Container>
      <FooterContent />
    </main>
  );
}
