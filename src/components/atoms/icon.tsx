import React from "react";

interface IconProps {
  src: string;
  alt: string;
  url: string;
}

function handleClick(url: string) {
  window.open(url, "_blank");
}

const Icon: React.FC<IconProps> = ({ src, alt, url }) => (
  <img
    src={src}
    alt={alt}
    className="cursor-pointer"
    onClick={() => handleClick(url)}
  />
);

export default Icon;
