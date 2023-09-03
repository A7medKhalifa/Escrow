import * as React from 'react';
import Svg, { Circle, ClipPath, Defs, G, LinearGradient, Path, Rect, Stop } from 'react-native-svg';

import useSvgSize from 'hooks/useSvgSize';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg width={55} height={55} viewBox="0 0 58 58" {...props}>
      <Defs>
        <ClipPath id="clip-path">
          <Rect width={25.297} height={22.125} fill="none" />
        </ClipPath>
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
      <G
        id="Component_262_1"
        data-name="Component 262 \u2013 1"
        transform="translate(9 6)"
      >
        <G transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Ellipse_518)">
          <G
            id="Ellipse_518-2"
            data-name="Ellipse 518"
            transform="translate(9 6)"
            fill="#f2f8ff"
            stroke="#6eb4ff"
            strokeWidth={1}
          >
            <Circle cx={20} cy={20} r={20} stroke="none" />
            <Circle cx={20} cy={20} r={19.5} fill="none" />
          </G>
        </G>
        <G
          id="currency"
          transform="translate(7.794 8.298)"
          clipPath="url(#clip-path)"
        >
          <Path
            id="currency-2"
            data-name="currency"
            d="M24.424,11.239v-4A2.3,2.3,0,0,0,22.2,4.873H19.194L15.294.731a.711.711,0,0,0-1.048,0L12.69,2.383,11.134.731a.711.711,0,0,0-1.048,0l-3.9,4.143H2.223A2.3,2.3,0,0,0,0,7.235V20.263a2.3,2.3,0,0,0,2.223,2.361H22.2a2.3,2.3,0,0,0,2.223-2.361v-4a1.583,1.583,0,0,0,.873-1.434V12.673A1.584,1.584,0,0,0,24.424,11.239ZM22.2,21.05H20.459a2.484,2.484,0,0,0,.127-.787V16.4h2.355v3.864A.766.766,0,0,1,22.2,21.05Zm-19.977,0a.766.766,0,0,1-.741-.787V7.235a.766.766,0,0,1,.741-.787H18.363a.766.766,0,0,1,.741.787V11.1H16.318a1.532,1.532,0,0,0-1.482,1.574v2.151A1.532,1.532,0,0,0,16.318,16.4H19.1v3.864a.766.766,0,0,1-.741.787ZM22.941,7.235V11.1H20.586V7.235a2.482,2.482,0,0,0-.127-.787H22.2A.766.766,0,0,1,22.941,7.235Zm-6.624,7.59V12.673h7.5v2.151h-7.5ZM17.1,4.873H12.442L14.77,2.4Zm-6.753,0H8.282L10.61,2.4l1.032,1.1Zm0,0"
            transform="translate(0 -0.5)"
            fill="url(#linear-gradient)"
          />
        </G>
      </G>
    </Svg>
  );
}

export default SvgComponent;
