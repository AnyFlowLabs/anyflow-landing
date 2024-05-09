import { BackgroundAnimated } from "@/components/molecules/background-animated";
import Container from "@/components/molecules/container";
import FooterTemplate from "@/components/template/footer-template";
import HeaderTemplate from "@/components/template/header-template";
import MainTemplate from "@/components/template/main-template";

export default function HomePage() {
  return (
    <Container>
      <BackgroundAnimated />
      <HeaderTemplate />
      <MainTemplate />
      <FooterTemplate />
    </Container>
  );
}
