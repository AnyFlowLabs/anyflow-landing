import { cn } from "@/lib/utils";
import React from "react";

interface BgContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const BgContainer: React.FC<BgContainerProps> = (className, ...props) => {
  return <div className={cn("bg-blue-2", className)} {...props} />;
};

export default BgContainer;
