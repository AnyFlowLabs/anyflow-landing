import { ButtonAcess } from "@/components/atoms/button-access";

export interface PageTitleMoleculeProps {
  title: string;
  subTitle: string;
  buttonText: string;
}

const FORMS = "https://forms.gle/KXNpERyCnyurQWpQ6";

export function PageTitleMolecule({
  title,
  subTitle,
  buttonText,
}: PageTitleMoleculeProps) {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <h1 className="text-center text-5xl text-white">{title}</h1>
      <h3 className="text-center text-3xl text-white">{subTitle}</h3>
      <ButtonAcess url={FORMS}>{buttonText}</ButtonAcess>
    </section>
  );
}
