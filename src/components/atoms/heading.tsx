import { cn } from "@/lib/utils";
import React from "react";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ className, text, ...props }) => (
  <h3 className={cn("text-[28px] text-white", className)} {...props}>
    {text}
  </h3>
);

export default Heading;
