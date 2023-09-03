import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

    const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
    return (
        <Svg
            viewBox="0 0 21.094 19.471"
            {...computedSize}
            {...props}>
            <Rect
                width="20"
                height="2.5"
                fill="#fff"
                rx="1"
                transform="translate(0 6)"
            ></Rect>
            <Rect width="12" height="2.5" fill="#fff" data-name="path" rx="1"></Rect>
            <Rect
                width="12"
                height="2.5"
                fill="#fff"
                data-name="path"
                rx="1"
                transform="translate(8 11)"
            ></Rect>
        </Svg>
    )
}

export default SVGComponent;
