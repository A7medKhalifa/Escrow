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
            viewBox="0 0 24 24"
            width={46}
            height={46}
            // {...computedSize}
            {...props}
        >
            <G id="SVGRepo_bgCarrier" strokeWidth={0} />
            <G
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <G id="SVGRepo_iconCarrier">
                <Path
                    d="M7 10L12 15L17 10"
                    stroke="#ffffff"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </G>
        </Svg>
    )
}

export default SVGComponent;
