import { cn } from "@/lib/utils";

export interface BadgeChainAtomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
}

export function BadgeChainMolecule({
  text,
  className,
  ...props
}: BadgeChainAtomProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-lg bg-blue-2 p-4 text-2xl text-blue-8",
        className,
      )}
      {...props}
    >
      <p className="cursor-default">{text}</p>
    </div>
  );
}
