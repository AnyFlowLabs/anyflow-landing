import { cn } from "@/lib/utils";
import { LogoAtom } from "../atoms/logo-atom";

export interface LogoMoleculeProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function LogoMolecule({ className, ...props }: LogoMoleculeProps) {
  return (
    <div className={cn("max-w-60", className)} {...props}>
      <LogoAtom />
    </div>
  );
}
