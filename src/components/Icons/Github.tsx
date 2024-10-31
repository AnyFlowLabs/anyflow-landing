import { SVGProps } from "react";

const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 0C4.03 0 0 4.036 0 9.015a9.015 9.015 0 0 0 6.155 8.554c.45.083.614-.195.614-.435 0-.213-.007-.781-.012-1.533-2.504.545-3.032-1.208-3.032-1.208-.409-1.042-.999-1.32-.999-1.32-.817-.558.062-.547.062-.547.903.063 1.378.929 1.378.929.803 1.377 2.107.98 2.62.749.082-.583.314-.98.572-1.204-1.998-.228-4.1-1.002-4.1-4.456 0-.984.351-1.79.926-2.42-.093-.227-.401-1.144.088-2.384 0 0 .756-.244 2.475.923A8.607 8.607 0 0 1 9 4.36a8.63 8.63 0 0 1 2.254.303c1.718-1.167 2.472-.924 2.472-.924.491 1.24.182 2.158.09 2.386.576.63.925 1.435.925 2.419 0 3.463-2.105 4.225-4.11 4.448.324.278.61.828.61 1.67 0 1.204-.01 2.177-.01 2.472 0 .241.162.522.62.434A9.016 9.016 0 0 0 18 9.015C18 4.035 13.97 0 9 0Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="currentColor" d="M0 0h18v18H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GithubIcon;