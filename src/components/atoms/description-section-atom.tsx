import { cn } from "@/lib/utils";

export interface DescriptionSectionAtomProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export function DescriptionSectionAtom({
  text,
  className,
  ...props
}: DescriptionSectionAtomProps) {
  return (
    <p className={cn("text-2xl text-white", className)} {...props}>
      {text}
    </p>
  );
}
