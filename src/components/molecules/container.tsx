import { cn } from "@/lib/utils";
import React from "react";

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto flex w-full max-w-7xl flex-col px-8", className)}
    {...props}
  />
));
Container.displayName = "Container";
export default Container;
