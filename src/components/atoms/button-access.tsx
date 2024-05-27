import { cn } from "@/lib/utils";

export interface ButtonAcessProps
  extends React.HTMLAttributes<HTMLButtonElement> {
  url: string;
}

// [TODO] -> Verificar para onde enviar

export default function ButtonAcess({
  url,
  className,
  children,
  ...props
}: ButtonAcessProps) {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <button
      className={cn("rounded-lg bg-brand-6 px-6 py-3 text-white", className)}
      onClick={() => handleClick(url)}
      {...props}
    >
      {children}
    </button>
  );
}
