import Container from "@/components/organisms/container";
import FooterTemplate from "@/components/template/footer-template";
import HeaderTemplate from "@/components/template/header-template";
import MainTemplate from "@/components/template/main-template";
import LanguageChange from "@/components/ui/LanguageChange";

export default function HomePage() {
  return (
    <Container>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      <HeaderTemplate />
      <MainTemplate />
      <FooterTemplate />
      <LanguageChange />
    </Container>
  );
}
