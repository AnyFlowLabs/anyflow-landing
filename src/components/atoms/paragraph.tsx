import React from "react";

interface ParagraphProps {
  text: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text }) => (
  <p className="text-blue-8">{text}</p>
);

export default Paragraph;
