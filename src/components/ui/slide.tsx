import { cn } from "@/lib/utils";
import React, { ReactElement, useEffect } from "react";

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement[];
  width?: string;
  duration?: number;
  toRight?: boolean;
}

const Slider = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
}: SliderProps) => {
  useEffect(() => {
    const style = document.createElement("style");

    const keyFrames =
      "\
        @-webkit-keyframes slider_logo_slider {\
            0% {\
                transform: translateX(0);\
            }\
            100% {\
                transform: translateX(A_DYNAMIC_VALUE);\
            }\
        }\
        @-moz-keyframes slider_logo_slider {\
            0% {\
                transform: translateX(0);\
            }\
            100% {\
                transform: translateX(A_DYNAMIC_VALUE);\
            }\
        }";
    style.innerHTML = keyFrames.replace(
      /A_DYNAMIC_VALUE/g,
      `calc(${toRight ? "" : "-"}${width} * ${children!.length})`,
    );

    document.getElementsByTagName("head")[0].appendChild(style);
  }, [toRight, width, children]);

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "auto",
          margin: "auto",
          top: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            animation: `slider_logo_slider ${duration}s linear infinite`,
            top: 0,
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
        </div>
      </div>
    </div>
  );
};

const Slide = ({ className, children, ...props }: SlideProps) => {
  return (
    <div className={cn("", className)} {...props}>
      {children}
    </div>
  );
};

Slider.Slide = Slide;

export default Slider;
