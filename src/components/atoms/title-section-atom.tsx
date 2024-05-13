import { cn } from "@/lib/utils";

export interface TitleSectionAtomProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

export function TitleSectionAtom({
  text,
  className,
  ...props
}: TitleSectionAtomProps) {
  return (
    <h2 className={cn("text-3xl text-white", className)} {...props}>
      {text}
    </h2>
  );
}
