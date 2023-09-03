import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  Path,
  Circle,
} from "react-native-svg";
const SVGComponent = (props:any) => (
  <Svg
    id="Component_288_1"
    data-name="Component 288 \u2013 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={110.623}
    height={110.9}
    viewBox="0 0 68.623 63.9"
    {...props}
  >
    <Defs>
      <LinearGradient
        id="linear-gradient"
        x1={-0.917}
        y1={0.55}
        x2={1.206}
        y2={0.561}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#54b6ff" />
        <Stop offset={1} stopColor="#7986ff" />
      </LinearGradient>
    </Defs>
    <Path
      id="Path_1132"
      data-name="Path 1132"
      d="M44.46,1.81H39.38a31.95,31.95,0,1,0,0,63.9h5.08V55.551H39.38a21.588,21.588,0,0,1,0-43.125h5.08Z"
      transform="translate(24.164 -1.81)"
      fill="url(#linear-gradient)"
    />
    <Path
      id="Path_1133"
      data-name="Path 1133"
      d="M2.19,65.71H7.27a31.95,31.95,0,1,0,0-63.9H2.19V12.223H7.27a21.588,21.588,0,1,1,0,43.125H2.19Z"
      transform="translate(1.417 -1.81)"
      fill="url(#linear-gradient)"
    />
    <Circle
      id="Ellipse_543"
      data-name="Ellipse 543"
      cx={11.378}
      cy={11.378}
      r={11.378}
      transform="translate(0 20.623)"
      fill="url(#linear-gradient)"
    />
  </Svg>
);
export default SVGComponent;
