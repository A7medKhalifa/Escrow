import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, G, Path } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      viewBox="0 0 27.115 21.387"
      width={35}
      height={35}
      // {...computedSize}
      {...props}
    >
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={0.5}
          x2={0.5}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#6eb4ff" />
          <Stop offset={1} stopColor="#7889ff" />
        </LinearGradient>
      </Defs>
      <Path
        id="currency-2"
        data-name="currency"
        d="M26.179,10.881V7.01A2.337,2.337,0,0,0,23.8,4.728H20.574l-4.181-4a.819.819,0,0,0-1.123,0L13.6,2.32,11.934.723a.819.819,0,0,0-1.123,0l-4.181,4H2.383A2.337,2.337,0,0,0,0,7.01V19.6a2.337,2.337,0,0,0,2.383,2.283H23.8A2.337,2.337,0,0,0,26.179,19.6V15.734a1.522,1.522,0,0,0,.936-1.387V12.268A1.523,1.523,0,0,0,26.179,10.881ZM23.8,20.365H21.929a2.187,2.187,0,0,0,.137-.761V15.869H24.59V19.6A.779.779,0,0,1,23.8,20.365Zm-21.412,0a.779.779,0,0,1-.794-.761V7.01a.779.779,0,0,1,.794-.761h17.3a.779.779,0,0,1,.794.761v3.736H17.49A1.558,1.558,0,0,0,15.9,12.268v2.079a1.558,1.558,0,0,0,1.589,1.522h2.986V19.6a.779.779,0,0,1-.794.761ZM24.59,7.01v3.736H22.065V7.01a2.186,2.186,0,0,0-.137-.761H23.8A.779.779,0,0,1,24.59,7.01Zm-7.1,7.337V12.268h8.036v2.079H17.49Zm.837-9.619H13.336l2.5-2.39Zm-7.238,0H8.877l2.5-2.39L12.479,3.4Zm0,0"
        transform="translate(0 -0.5)"
        fill="url(#linear-gradient)"
      />
    </Svg>
  )
}

export default SVGComponent;
