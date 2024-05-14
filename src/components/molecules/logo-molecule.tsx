import { cn } from "@/lib/utils";
import { LogoAtom } from "@/components/atoms/logo-atom";
import { ChangeLanguageMolecule } from "@/components/molecules/change-language-molecule";

export interface LogoMoleculeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  showLanguage?: boolean;
}

export function LogoMolecule({
  showLanguage = false,
  className,
  ...props
}: LogoMoleculeProps) {
  return (
    <div className={cn("flex items-center gap-5", className)} {...props}>
      <LogoAtom />
      {showLanguage && <ChangeLanguageMolecule />}
    </div>
  );
}
