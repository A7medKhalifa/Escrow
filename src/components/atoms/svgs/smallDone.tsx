import * as React from "react";
import Svg, { Circle, G,Polygon,  } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      width={15}
      height={15}
      viewBox="0 0 512 512"
      {...props}>
       <G id="SVGRepo_bgCarrier" strokeWidth={0} />
    <G
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <G id="SVGRepo_iconCarrier">
      <Circle
        style={{
          fill: "#4AFCFE",
        }}
        cx={256}
        cy={256}
        r={256}
      />
      <Polygon
        style={{
          fill: "#ffffff",
        }}
        points="230.288,365.04 137.456,292.528 157.152,267.312 223.04,318.768 329.984,161.28 356.448,179.248 "
      />
    </G>
    </Svg>
  )
}

export default SVGComponent;
