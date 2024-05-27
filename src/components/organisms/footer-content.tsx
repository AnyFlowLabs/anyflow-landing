import Logo from "@/assets/logo-footer.svg";
import { BackedByMolecule } from "@/components/molecules/backed-molecule";
import SocialMediaLinks from "@/components/molecules/social-media-links";
import CopyrightNotice from "@/components/molecules/copyright-notice";

const FooterContent = () => (
  <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-8 pb-[31px] pt-[62px]">
    <img src={Logo} alt="Anyflow" />
    <BackedByMolecule />
    <div className="mx-auto flex w-full max-w-[1280px] justify-between">
      <CopyrightNotice text={"© 2024 Anyflow. All rights reserved."} />
      <SocialMediaLinks />
    </div>
  </div>
);

export default FooterContent;
