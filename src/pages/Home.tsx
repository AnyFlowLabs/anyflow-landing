import Container from "@/components/molecules/container";
import Group from "@/assets/group.svg";
import { BadgeChainOrganism } from "@/components/organisms/badge-chains-organism";
import { chains } from "@/data/chains";
import LogoHeader from "@/assets/logo-header.svg";
import FooterContent from "@/components/organisms/footer-content";
import TryItNowSection from "@/components/template/try-it-now-section";
import IntegrationSection from "@/components/template/integration-section";
import ButtonAccess from "@/components/atoms/button-access";
import BUTTON_ACCESS from "@/data/button-access";
import SocialMediaLinks from "@/components/molecules/social-media-links";

export default function HomePage() {
  return (
    <main>
      <Container className="bg-hero bg-cover bg-center ">
        <header className="mx-auto flex max-w-[1280px] justify-between py-5">
          <img src={LogoHeader} alt="Logo" />
          <SocialMediaLinks />
        </header>
        <div className="mx-auto flex max-w-[1029px] flex-col items-center gap-7 py-[170px]">
          <h1 className="text-center text-[79px] leading-[80px] text-white">
            Smart Contract Deployment{" "}
            <span className="text-brand-6">in 1'57''minutes</span>
          </h1>
          <h3 className="text-2xl text-blue-9">
            Effortless and secure automation for web3 DevOps
          </h3>
          <ButtonAccess url={BUTTON_ACCESS}>Request access</ButtonAccess>
        </div>
      </Container>

      <Container className="flex flex-col bg-blue-1 pb-[82px]">
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
            <div>
              <ButtonAccess url={BUTTON_ACCESS}>Request access</ButtonAccess>
            </div>
          </div>

          <img src={Group} alt="App image" className=" col-span-3 rounded-xl" />
        </div>
        <BadgeChainOrganism chains={chains} className="m-auto" />

        <IntegrationSection />

        <TryItNowSection />
      </Container>
      <FooterContent />
    </main>
  );
}
