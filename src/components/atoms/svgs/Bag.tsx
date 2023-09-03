import * as React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

    const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
    return (
        <Svg
            viewBox="0 0 23.597 20.74"
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
            <Path
                id="work"
                d="M22.91,2.766H16.638V2.074A2.076,2.076,0,0,0,14.564,0H9.033A2.076,2.076,0,0,0,6.959,2.074v.691H.691A.693.693,0,0,0,0,3.457V18.666A2.076,2.076,0,0,0,2.074,20.74H21.523A2.076,2.076,0,0,0,23.6,18.666V3.469A.671.671,0,0,0,22.91,2.766ZM8.342,2.074a.692.692,0,0,1,.691-.691h5.531a.692.692,0,0,1,.691.691v.691H8.342Zm13.6,2.074L19.8,10.589a.69.69,0,0,1-.656.473H15.255V10.37a.691.691,0,0,0-.691-.691H9.033a.691.691,0,0,0-.691.691v.691H4.453a.69.69,0,0,1-.656-.473L1.651,4.148Zm-8.074,6.913v1.383H9.725V11.061Zm8.342,7.6a.692.692,0,0,1-.691.691H2.074a.692.692,0,0,1-.691-.691V7.717l1.1,3.309a2.071,2.071,0,0,0,1.967,1.418H8.342v.691a.691.691,0,0,0,.691.691h5.531a.691.691,0,0,0,.691-.691v-.691h3.889a2.071,2.071,0,0,0,1.967-1.418l1.1-3.309Zm0,0"
                fill="url(#linear-gradient)"
            />
        </Svg>
    )
}

export default SVGComponent;
