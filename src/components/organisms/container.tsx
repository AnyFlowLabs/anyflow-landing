import { cn } from "@/lib/utils";
import React from "react";

export const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "mx-auto flex h-screen w-full max-w-7xl flex-col bg-grey-2 px-8",
      className,
    )}
    {...props}
  />
));
Container.displayName = "Container";
export default Container;
