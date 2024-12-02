import React from "react";

export interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  url: string;
}

function handleClick(url: string) {
  window.open(url, "_blank");
}

const LinkIcon: React.FC<IconProps> = ({ src, alt, url, ...props }) => (
  <img
    src={src}
    alt={alt}
    style={{ cursor: "pointer" }}
    onClick={() => handleClick(url)}
    {...props}
  />
);

export default LinkIcon;
