import { ButtonAcess } from "../atoms/button-access";

export interface PageTitleMoleculeProps {
  title: string;
  subTitle: string;
}

export function PageTitleMolecule({ title, subTitle }: PageTitleMoleculeProps) {
  return (
    <section className="flex w-full flex-col items-center gap-10">
      <h1 className="text-center text-5xl text-white">{title}</h1>
      <h3 className="text-center text-3xl text-white">{subTitle}</h3>
      <ButtonAcess>Meu botao</ButtonAcess>
    </section>
  );
}
