import Logo from "@/assets/logo-footer.svg";
import { BackedByMolecule } from "@/components/molecules/backed-molecule";
import SocialMediaLinks from "@/components/molecules/social-media-links";
import CopyrightNotice from "@/components/molecules/copyright-notice";

const FooterContent = () => (
  <div className="mx-auto flex max-w-[1440px] flex-col px-3 md:px-6 items-center gap-8 pb-[31px] pt-[62px]">
    <img src={Logo} alt="Anyflow" />
    <BackedByMolecule />
    {/* <div className="mx-auto text-center w-full max-w-[1280px] md:flex md:justify-between"> */}
    {/* </div> */}
    <div className="text-center gap-6 grid md:grid-cols-2 md:text-left w-full">
      <CopyrightNotice text={"© 2024 Anyflow. All rights reserved."} />
      <SocialMediaLinks className="justify-center md:justify-end" />
    </div>
  </div>
);

export default FooterContent;
