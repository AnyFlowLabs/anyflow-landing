import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GlassCard({ className, children, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(
        "backdrop-filte flex min-h-64 cursor-default flex-col gap-10 rounded-lg bg-white/20 p-10 shadow-lg backdrop-blur-lg",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
