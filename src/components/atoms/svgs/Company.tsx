<svg id="building" xmlns="http://www.w3.org/2000/svg" width="28.286" height="36.001" viewBox="0 0 28.286 36.001">
</svg>

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
    <Svg width="28.286" height="36.001" viewBox="0 0 28.286 36.001"{...props}>
      <Path id="building-2" data-name="building" d="M27,0a1.236,1.236,0,0,1,.9.382,1.236,1.236,0,0,1,.382.9V34.715A1.3,1.3,0,0,1,27,36H1.286a1.236,1.236,0,0,1-.9-.382,1.236,1.236,0,0,1-.382-.9V1.286a1.236,1.236,0,0,1,.382-.9A1.236,1.236,0,0,1,1.286,0ZM10.286,5.786V7.072a.62.62,0,0,0,.643.643h1.286a.62.62,0,0,0,.643-.643V5.786a.62.62,0,0,0-.643-.643H10.929a.62.62,0,0,0-.643.643Zm0,5.143v1.286a.62.62,0,0,0,.643.643h1.286a.62.62,0,0,0,.643-.643V10.929a.62.62,0,0,0-.643-.643H10.929a.62.62,0,0,0-.643.643Zm0,5.143v1.286a.62.62,0,0,0,.643.643h1.286a.62.62,0,0,0,.643-.643V16.072a.62.62,0,0,0-.643-.643H10.929a.62.62,0,0,0-.643.643Zm0,5.143V22.5a.62.62,0,0,0,.643.643h1.286a.62.62,0,0,0,.643-.643V21.215a.62.62,0,0,0-.643-.643H10.929a.62.62,0,0,0-.643.643ZM7.715,27.644V26.358a.62.62,0,0,0-.643-.643H5.786a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643H7.072a.62.62,0,0,0,.643-.643Zm0-5.143V21.215a.62.62,0,0,0-.643-.643H5.786a.62.62,0,0,0-.643.643V22.5a.62.62,0,0,0,.643.643H7.072a.62.62,0,0,0,.643-.643Zm0-5.143V16.072a.62.62,0,0,0-.643-.643H5.786a.62.62,0,0,0-.643.643v1.286A.62.62,0,0,0,5.786,18H7.072a.62.62,0,0,0,.643-.643Zm0-5.143V10.929a.62.62,0,0,0-.643-.643H5.786a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643H7.072a.62.62,0,0,0,.643-.643Zm0-5.143V5.786a.62.62,0,0,0-.643-.643H5.786a.62.62,0,0,0-.643.643V7.072a.62.62,0,0,0,.643.643H7.072a.62.62,0,0,0,.643-.643ZM18,32.786V28.929a.62.62,0,0,0-.643-.643H10.929a.62.62,0,0,0-.643.643v3.857a.62.62,0,0,0,.643.643h6.429A.62.62,0,0,0,18,32.786ZM18,22.5V21.214a.62.62,0,0,0-.643-.643H16.072a.62.62,0,0,0-.643.643V22.5a.62.62,0,0,0,.643.643h1.286A.62.62,0,0,0,18,22.5Zm0-5.143V16.071a.62.62,0,0,0-.643-.643H16.072a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643h1.286A.62.62,0,0,0,18,17.357Zm0-5.143V10.928a.62.62,0,0,0-.643-.643H16.072a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643h1.286A.62.62,0,0,0,18,12.214Zm0-5.143V5.785a.62.62,0,0,0-.643-.643H16.072a.62.62,0,0,0-.643.643V7.071a.62.62,0,0,0,.643.643h1.286A.62.62,0,0,0,18,7.071Zm5.143,20.571V26.356a.62.62,0,0,0-.643-.643H21.215a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643H22.5a.62.62,0,0,0,.643-.643Zm0-5.143V21.213a.62.62,0,0,0-.643-.643H21.215a.62.62,0,0,0-.643.643V22.5a.62.62,0,0,0,.643.643H22.5a.62.62,0,0,0,.643-.643Zm0-5.143V16.07a.62.62,0,0,0-.643-.643H21.215a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643H22.5a.62.62,0,0,0,.643-.643Zm0-5.143V10.927a.62.62,0,0,0-.643-.643H21.215a.62.62,0,0,0-.643.643v1.286a.62.62,0,0,0,.643.643H22.5a.62.62,0,0,0,.643-.643Zm0-5.143V5.784a.62.62,0,0,0-.643-.643H21.215a.62.62,0,0,0-.643.643V7.07a.62.62,0,0,0,.643.643H22.5a.62.62,0,0,0,.643-.643Z" fill={bgColor} />

    </Svg>
  );
}

export default SvgComponent;
