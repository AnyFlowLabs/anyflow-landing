import { cn } from "@/lib/utils";

export interface BadgeChainAtomProps
  extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  icon: string;
}

export function BadgeChainMolecule({
  text,
  icon,
  className,
  ...props
}: BadgeChainAtomProps) {
  console.log('icon', icon)
  return (
    <div
      className={cn(
        // "flex items-center justify-center rounded-lg bg-blue-2 p-4 text-2xl text-blue-8",
        "p-4 min-w-28 text-blue-8 text-center flex flex-col items-center justify-center rounded-lg bg-blue-2",
        className,
      )}
      {...props}
    >
      <div className="h-[32px] mb-3">
        {icon ? <img alt={text} src={icon} width="32px" /> : null}
      </div>
      <p className="">{text}</p>
    </div>
  );
}
