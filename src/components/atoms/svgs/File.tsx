import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    fill={props.bgColor}
    xmlns="http://www.w3.org/2000/svg"
    stroke={props.bgColor ? props.bgColor : "#fff"}
    transform="rotate(0)"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke={props.bgColor ? props.bgColor : "#fff"}
      strokeWidth={0.144}
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        opacity={0.15}
        d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z"
        fill="#6eb4ff"
      />
      <Path
        d="M13 3H5V21H19V9M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19"
        stroke={props.bgColor ? props.bgColor : "#fff"}
        strokeWidth={0.9120000000000001}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);
export default SVGComponent;

