import { BadgeChainMolecule } from "@/components/molecules/badge-chain-molecule";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";

export interface BadgeChainOrganismProps
  extends React.HTMLAttributes<HTMLDivElement> {
  chains: string[];
}

export function BadgeChainOrganism({
  chains,
  className,
  ...props
}: BadgeChainOrganismProps) {
  const { t } = useTranslation();

  return (
    <section className={cn("m-auto flex flex-col gap-5", className)} {...props}>
      <h2 className="text-center text-3xl text-white">{t("chains")}</h2>
      <div className={"grid grid-cols-4 gap-5"}>
        {chains.map((chain) => (
          <BadgeChainMolecule key={chain} text={chain} />
        ))}
      </div>
    </section>
  );
}
