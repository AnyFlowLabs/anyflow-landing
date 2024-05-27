import { BadgeChainMolecule } from "@/components/molecules/badge-chain-molecule";
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next";
import Slider from "../ui/slide";

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
    <section
      className={cn("m-auto mb-10 flex w-full flex-col", className)}
      {...props}
    >
      <h2 className="mb-10 text-center text-2xl text-white">{t("chains")}</h2>
      <Slider>
        {chains.map((chain) => (
          <Slider.Slide key={chain}>
            <BadgeChainMolecule text={chain} />
          </Slider.Slide>
        ))}
      </Slider>
    </section>
  );
}
