import * as React from "react";
import Svg, { G, Path } from "react-native-svg";
const SVGComponent = (props:any) => (
  <Svg
    fill="#6eb4ff"
    width="800px"
    height="800px"
    viewBox="0 0 1920 1920"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Path
        d="M1377.882 1344 903.53 988.235v-592.94h112.942v536.47l429.176 321.77-67.765 90.465ZM960 0C430.645 0 0 430.645 0 960c0 529.242 430.645 960 960 960 529.242 0 960-430.758 960-960 0-529.355-430.758-960-960-960Z"
        fillRule="evenodd"
      />
    </G>
  </Svg>
);
export default SVGComponent;
