import React from "react";

interface IconProps {
  src: string;
  alt: string;
}

const Icon: React.FC<IconProps> = ({ src, alt }) => <img src={src} alt={alt} />;

export default Icon;
