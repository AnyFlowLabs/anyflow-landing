import { cn } from "@/lib/utils";
import React from "react";

export const Root = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("h-full bg-black", className)} {...props} />
));
Root.displayName = "Root";
export default Root;
