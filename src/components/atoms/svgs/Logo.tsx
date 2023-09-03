import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

import useSvgSize from 'hooks/useSvgSize';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 512.000000 512.000000" {...props}>
      <Path id="Path_1132" data-name="Path 1132" d="M61.471,1.81H54.058a46.628,46.628,0,1,0,0,93.256h7.413V80.24H54.058a31.505,31.505,0,0,1,0-62.937h7.413Z" transform="translate(38.677 -1.81)" fill="#fff" />
      <Path id="Path_1133" data-name="Path 1133" d="M2.19,95.066H9.6A46.628,46.628,0,1,0,9.6,1.81H2.19v15.2H9.6a31.505,31.505,0,1,1,0,62.937H2.19Z" transform="translate(3.073 -1.81)" fill="#fff" />
      <Circle id="Ellipse_543" data-name="Ellipse 543" cx="16.605" cy="16.605" r="16.605" transform="translate(0 30.097)" fill={bgColor ? bgColor : "#fff"} />

    </Svg>
  );
}

export default SvgComponent;
