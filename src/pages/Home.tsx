import Container from "@/components/molecules/container";
import FooterTemplate from "@/components/template/footer-template";
import HeaderTemplate from "@/components/template/header-template";
import MainTemplate from "@/components/template/main-template";

export default function HomePage() {
  return (
    <Container>
      <HeaderTemplate />
      <MainTemplate />
      <FooterTemplate />
    </Container>
  );
}
