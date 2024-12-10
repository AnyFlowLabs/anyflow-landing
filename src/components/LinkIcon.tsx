import { Box } from "@chakra-ui/react";
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
  <Box cursor="pointer">
    <img
      src={src}
      alt={alt || "link icon"}
      onClick={() => handleClick(url)}
      {...props}
    />
  </Box>
);

export default LinkIcon;
