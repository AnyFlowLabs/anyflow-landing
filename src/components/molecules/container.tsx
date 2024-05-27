import { cn } from "@/lib/utils";
import React from "react";

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn("bg-blue-0", className)} {...props} />
));
Container.displayName = "Container";
export default Container;
