import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import useSvgSize from 'hooks/useSvgSize';
import { TSvgProps } from '../Svg';

const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;

function SvgComponent({ size, bgColor, ...props }: TSvgProps) {
  const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
  return (
    <Svg {...computedSize} viewBox="0 0 1024 1024" {...props}>
      <Path
      fill="#000000"
      d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
    />
    <Path
      fill="#000000"
      d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
    />
    </Svg>
  );
}

export default SvgComponent;
