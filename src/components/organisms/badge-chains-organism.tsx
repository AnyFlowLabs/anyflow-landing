import { BadgeChainMolecule } from "@/components/molecules/badge-chain-molecule";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Slider from "../ui/slide";
import { ChainDef } from "@/data/chains";

export interface BadgeChainOrganismProps
  extends React.HTMLAttributes<HTMLDivElement> {
  chains: ChainDef[];
}

export function BadgeChainOrganism({
  chains,
  className,
  ...props
}: BadgeChainOrganismProps) {
  const { t } = useTranslation();

  return (
    <section
      className={cn("m-auto mb-10 flex w-full flex-col", className)}
      {...props}
    >
      <h2 className="mb-10 text-center text-2xl text-white">{t("chains", { q: chains.length })}</h2>
      <Slider>
        {chains.map((chain) => (
          <Slider.Slide key={chain.value}>
            <BadgeChainMolecule text={chain.name} icon={chain.icon} />
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  );
}
