
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
    <Svg width="30" height="36" viewBox="0 0 30 36" {...props}>
      <Path id="user-2" data-name="user" d="M30,29.789a6.791,6.791,0,0,1-1.465,4.383A4.39,4.39,0,0,1,25.008,36H4.992a4.388,4.388,0,0,1-3.527-1.828A6.8,6.8,0,0,1,0,29.789a33.719,33.719,0,0,1,.2-3.762,20.2,20.2,0,0,1,.738-3.563,11.854,11.854,0,0,1,1.371-3.07,6.566,6.566,0,0,1,2.2-2.086A6.08,6.08,0,0,1,7.664,16.5,10.129,10.129,0,0,0,15,19.5a10.129,10.129,0,0,0,7.336-3,6.085,6.085,0,0,1,3.152.809,6.566,6.566,0,0,1,2.2,2.086,11.854,11.854,0,0,1,1.371,3.07,20.2,20.2,0,0,1,.738,3.563A33.718,33.718,0,0,1,30,29.79ZM24,9a8.669,8.669,0,0,1-2.637,6.363A8.676,8.676,0,0,1,15,18a8.666,8.666,0,0,1-6.363-2.637A8.673,8.673,0,0,1,6,9,8.673,8.673,0,0,1,8.637,2.637,8.666,8.666,0,0,1,15,0a8.676,8.676,0,0,1,6.363,2.637A8.669,8.669,0,0,1,24,9Z" fill={bgColor ? bgColor : "#fff"} />

    </Svg>
  );
}

export default SvgComponent;
