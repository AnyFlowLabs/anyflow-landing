import React from "react";

interface HeadingProps {
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ text }) => (
  <h3 className="text-[28px] text-white">{text}</h3>
);

export default Heading;
