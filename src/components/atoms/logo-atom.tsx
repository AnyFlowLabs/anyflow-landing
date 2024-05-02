import { cn } from "@/lib/utils";

export interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <div
      className={cn(
        "flex cursor-default items-center justify-center text-white",
        className,
      )}
      {...props}
    >
      <h1 className="text-3xl">AnyFlow</h1>
    </div>
  );
}
