import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#6eb4ff"
    width="800px"
    height="800px"
    viewBox="0 0 24 24"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </G>
  </Svg>
);
export default SVGComponent;
