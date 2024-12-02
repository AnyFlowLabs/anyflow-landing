import { SVGProps } from "react";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    className="fill-current text-blue-500 group-hover/logo:text-blue-600"
    {...props}
  >
    <path
      fillRule="evenodd"
      fill="#009fd1"
      d="M20 32.5a12.46 12.46 0 0 0 8.728-3.551c.061-.06.16-.06.221 0l5.193 5.193 5.39 5.39c.117.117-.003.31-.16.259l-8.602-2.868a.157.157 0 0 0-.133.017A19.907 19.907 0 0 1 20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20c0 4.718-1.633 9.054-4.366 12.474a.155.155 0 0 1-.23.012l-10.561-10.56c-.117-.116.003-.31.16-.258l6.71 2.236a.155.155 0 0 0 .197-.099c.383-1.2.59-2.478.59-3.805 0-6.904-5.596-12.5-12.5-12.5S7.5 13.096 7.5 20 13.096 32.5 20 32.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
