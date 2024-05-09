import { cn } from "@/lib/utils";

export interface ButtonAcessProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export function ButtonAcess({
  className,
  children,
  ...props
}: ButtonAcessProps) {
  return (
    <div>
      <button
        className={cn(
          "inline-block transform rounded-lg bg-gradient-to-r from-[#63D3E3] to-[#69E1B0] p-5 text-center text-2xl font-bold text-black transition duration-300 ease-in-out hover:scale-105",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
}
