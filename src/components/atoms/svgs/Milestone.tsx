import * as React from "react";
import Svg, { Defs, G, LinearGradient, Path, Rect, Stop } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg
      width={42}
      height={40.688}
      viewBox="0 0 42 40.688"
      {...props}>
      <Defs>
        <LinearGradient
          id="linear-gradient"
          x1={1}
          x2={0}
          y2={1}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#6eb4ff" />
          <Stop offset={1} stopColor="#7889ff" />
        </LinearGradient>
      </Defs>
      <Path
        id="Path_1008"
        data-name="Path 1008"
        d="M21,0C32.6,0,42,9.108,42,20.344S32.6,40.688,21,40.688,0,31.579,0,20.344,9.4,0,21,0Z"
        fill="url(#linear-gradient)"
      />
      <G id="flag" transform="translate(10.644 7.555)">
        <Rect
          id="Rectangle_2034"
          data-name="Rectangle 2034"
          width={4}
          height={3}
          transform="translate(6.356 13.289)"
          fill="rgba(0,0,0,0.11)"
        />
        <Path
          id="Path_1010"
          data-name="Path 1010"
          d="M2.948,0A.448.448,0,0,0,2.5.448V26.442a.448.448,0,1,0,.9,0V.448A.448.448,0,0,0,2.948,0Z"
          transform="translate(-2.5)"
          fill="#f2f8ff"
        />
        <Path
          id="Path_1011"
          data-name="Path 1011"
          d="M20.982,9V19.756H18.293a1.793,1.793,0,1,0,0,3.585H34.875l-4.93-7.171L34.875,9Z"
          transform="translate(-10.226 -4.966)"
          fill="#f2f8ff"
        />
        <Path
          id="Path_1012"
          data-name="Path 1012"
          d="M16.5,34.793a1.793,1.793,0,0,0,1.793,1.793h2.689V33H18.293A1.793,1.793,0,0,0,16.5,34.793Z"
          transform="translate(-10.226 -18.21)"
          fill="#e4e8ed"
        />
        <Rect
          id="Rectangle_2035"
          data-name="Rectangle 2035"
          width={10}
          height={11}
          transform="translate(1.356 3.289)"
          fill="#fff"
        />
      </G>
    </Svg>
  )
}

export default SVGComponent;
