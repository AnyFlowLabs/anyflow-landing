export interface LinkAtomProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function LinkAtom({ href, ...props }: LinkAtomProps) {
  return <a href={href} target={"_blank"} {...props} />;
}
