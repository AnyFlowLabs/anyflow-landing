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
    <p className={cn("text-xl text-white", className)} {...props}>
      {text}
    </p>
  );
}
