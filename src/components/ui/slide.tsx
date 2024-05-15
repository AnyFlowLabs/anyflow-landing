import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export interface SlideProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {}

const Slider = ({
  children,
  width = "200px",
  duration = 40,
  toRight = false,
}) => {
  const [idNanoid, setIdNanoid] = useState("");

  const generarCadenaAleatoria = () => {
    let cadena = "";
    const caracteres =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++) {
      cadena += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length),
      );
    }

    return cadena;
  };

  useEffect(() => {
    setIdNanoid(generarCadenaAleatoria());
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.type = "text/css";
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
      `calc(${toRight ? "" : "-"}${width} * ${children?.length})`,
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
        id={`slider_wrapper_${idNanoid}`}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
            animation: `slider_logo_slider ${duration}s linear infinite`,
            top: 0,
          }}
          id={`slider_${idNanoid}`}
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
