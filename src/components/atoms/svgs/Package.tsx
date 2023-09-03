import * as React from 'react';
import Svg, { Defs, G, LinearGradient, Path, Stop } from 'react-native-svg';

import useSvgSize from 'hooks/useSvgSize';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, ...props }: TSvgProps) {
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
      <G
        id="\u0430\u043A\u0442\u0438\u0432\u044B"
        transform="translate(5.904 5.386)"
      >
        <Path
          id="Path_1032"
          data-name="Path 1032"
          d="M26.369,10.062H3.469A.254.254,0,0,1,3.2,9.793V6.138A.508.508,0,0,1,3.738,5.6H26.154a.508.508,0,0,1,.538.538V9.793A.341.341,0,0,1,26.369,10.062Z"
          transform="translate(0 0)"
          fill="none"
          stroke="#f2f8ff"
          strokeLinecap="round"
          strokeWidth={1.5}
        />
        <Path
          id="Path_1033"
          data-name="Path 1033"
          d="M25.853,30.3H7.038a.508.508,0,0,1-.538-.538V13.9H26.444V29.758A.632.632,0,0,1,25.853,30.3Z"
          transform="translate(-1.526 -3.838)"
          fill="none"
          stroke="#f2f8ff"
          strokeLinecap="round"
          strokeWidth={1.5}
        />
        <Path
          id="Path_1034"
          data-name="Path 1034"
          d="M24.439,23.818h-7.58A1.56,1.56,0,0,1,15.3,22.259h0A1.56,1.56,0,0,1,16.859,20.7h7.58A1.56,1.56,0,0,1,26,22.259h0A1.6,1.6,0,0,1,24.439,23.818Z"
          transform="translate(-5.595 -6.983)"
          fill="none"
          stroke="#f2f8ff"
          strokeLinecap="round"
          strokeWidth={1.5}
        />
      </G>
    </Svg>
  );
}

export default SvgComponent;
