import { cn } from "@/lib/utils";
import { LogoAtom } from "../atoms/logo-atom";
import { LanguageChange } from "@/components/ui/language-change";

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
      {showLanguage && <LanguageChange />}
    </div>
  );
}
