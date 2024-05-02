import Container from "@/components/organisms/container";
import { FooterTemplate } from "@/components/template/footer-template";
import HeaderTemplate from "@/components/template/header-template";

export default function HomePage() {
  return (
    <Container>
      <HeaderTemplate />
      <FooterTemplate />
    </Container>
  );
}
