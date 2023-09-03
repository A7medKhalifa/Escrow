import * as React from "react";
import Svg, { Defs, G, LinearGradient, Path, Stop } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

    const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
    return (
        <Svg
            viewBox="0 0 25.5 25.5"
            width={32.5}
            height={32.5}
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
            <G id="Group_2304" data-name="Group 2304">
                <G id="Group_2303" data-name="Group 2303">
                    <Path
                        id="Path_1040"
                        data-name="Path 1040"
                        d="M22.512,1.992h-1.2V0H19.324V1.992H6.176V0H4.184V1.992h-1.2A2.992,2.992,0,0,0,0,4.98V22.512A2.992,2.992,0,0,0,2.988,25.5H22.512A2.992,2.992,0,0,0,25.5,22.512V4.98A2.992,2.992,0,0,0,22.512,1.992Zm1,20.52a1,1,0,0,1-1,1H2.988a1,1,0,0,1-1-1V9.363H23.508Zm0-15.141H1.992V4.98a1,1,0,0,1,1-1h1.2V5.977H6.176V3.984H19.324V5.977h1.992V3.984h1.2a1,1,0,0,1,1,1Z"
                        fill="url(#linear-gradient)"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SVGComponent;
