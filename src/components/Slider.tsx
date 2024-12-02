import { Box, Flex } from "@chakra-ui/react";
import React, { ReactElement, useEffect } from "react";

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
  alias: string;
}

const Slider = ({
  alias,
  children,
  width = "200px",
  duration = 40,
  toRight = false,
}: SliderProps) => {
  useEffect(() => {
    const style = document.createElement("style");

    const keyFrames =
      "\
        @-webkit-keyframes slider_logo_slider_ALIAS {\
            0% {\
                transform: translateX(0);\
            }\
            100% {\
                transform: translateX(A_DYNAMIC_VALUE);\
            }\
        }\
        @-moz-keyframes slider_logo_slider_ALIAS {\
            0% {\
                transform: translateX(0);\
            }\
            100% {\
                transform: translateX(A_DYNAMIC_VALUE);\
            }\
        }";
    style.innerHTML = keyFrames
      .replace(
        /A_DYNAMIC_VALUE/g,
        `calc(${toRight ? "" : "-"}${width} * ${children!.length})`,
      )
      .replace("ALIAS", alias);

    document.getElementsByTagName("head")[0].appendChild(style);
  }, [toRight, width, children, alias]);

  return (
    <Box pos="relative">
      <Box w="full" h="auto" margin="auto" top={0} overflow="hidden">
        <Flex
          gap={4}
          top={0}
          style={{
            animation: `slider_logo_slider_${alias} ${duration}s linear infinite`,
          }}
        >
          {children?.map((child, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(child, { width })}
            </React.Fragment>
          ))}
          {children?.map((child, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(child, { width })}
            </React.Fragment>
          ))}
          {children?.map((child, i) => (
            <React.Fragment key={i}>
              {React.cloneElement(child, { width })}
            </React.Fragment>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

const Slide = ({ children, ...props }: SlideProps) => {
  return <Box {...props}>{children}</Box>;
};

Slider.Slide = Slide;

export default Slider;
