import React from "react";

export interface CopyrightNoticeProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

const CopyrightNotice: React.FC<CopyrightNoticeProps> = ({ text }) => (
  <p className="text-blue-6 text-sm">{text}</p>
);

export default CopyrightNotice;
