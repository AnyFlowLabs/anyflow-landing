import React from "react";
import TextSection from "../molecules/text-section";

export interface IntegrationDisplayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export const IntegrationDisplay: React.FC<IntegrationDisplayProps> = ({
  description,
  title,
}) => {
  return (
    <div>
      <div className="mx-auto flex py-[38px] max-w-[1230px] justify-between gap-[100px] border-b border-blue-6">
        <TextSection title={title} description={description} />
      </div>
    </div>
  );
};
