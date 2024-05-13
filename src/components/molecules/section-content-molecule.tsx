import { DescriptionSectionAtom } from "@/components/atoms/description-section-atom";
import { TitleSectionAtom } from "@/components/atoms/title-section-atom";

export interface SectionContentMoleculeProps {
  title: string;
  description: string;
}

export function SectionContentMolecule({
  title,
  description,
}: SectionContentMoleculeProps) {
  return (
    <>
      <TitleSectionAtom text={title} />
      <DescriptionSectionAtom text={description} />
    </>
  );
}
