import { PageTitleMolecule } from "../molecules/page-title-molecule";
import { t } from "i18next";

export default function MainTemplate() {
  return (
    <div className="flex flex-grow flex-col pb-10">
      <PageTitleMolecule
        title={t("header.title")}
        subTitle={t("header.subtitle")}
      />
      <section className="flex gap-10 p-8">
        <div className="border">
          <h3 className="text-white">Alguma coisa aqui</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            laborum eum, nihil totam incidunt hic perspiciatis animi sed
            doloremque itaque temporibus voluptates voluptatum tenetur at nam.
            Debitis dicta quo neque?
          </p>
        </div>
        <div className="size-80 border">imagem</div>
      </section>
    </div>
  );
}
