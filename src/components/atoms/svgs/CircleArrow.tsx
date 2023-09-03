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
            viewBox="0 0 46 46"
            width={46}
            height={46}
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
            <G
                id="Component_214_1"
                data-name="Component 214 \u2013 1"
                transform="translate(9 6)"
            >
                <G transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Path_1030)">
                    <Path
                        id="Path_1030-2"
                        data-name="Path 1030"
                        d="M14,0A14,14,0,1,1,0,14,14,14,0,0,1,14,0Z"
                        transform="translate(9 6)"
                        opacity={0.999}
                        fill="url(#linear-gradient)"
                    />
                </G>
                <G
                    id="Union_1"
                    data-name="Union 1"
                    transform="translate(5.845 13.986) rotate(-45)"
                    fill="#f2f8ff"
                >
                    <Path
                        d="M 8.333100318908691 8.833000183105469 L 0.9999001026153564 8.833000183105469 C 0.7242500782012939 8.833000183105469 0.5000001192092896 8.608750343322754 0.5000001192092896 8.333100318908691 L 0.5000001192092896 7.222500324249268 C 0.5000001192092896 6.946850299835205 0.7242500782012939 6.722599983215332 0.9999001026153564 6.722599983215332 L 6.222599983215332 6.722599983215332 L 6.722599983215332 6.722599983215332 L 6.722599983215332 6.222599983215332 L 6.722599983215332 0.9999001026153564 C 6.722599983215332 0.7242500782012939 6.946850299835205 0.5000001192092896 7.222500324249268 0.5000001192092896 L 8.333100318908691 0.5000001192092896 C 8.608750343322754 0.5000001192092896 8.833000183105469 0.7242500782012939 8.833000183105469 0.9999001026153564 L 8.833000183105469 7.222500324249268 L 8.833000183105469 8.333100318908691 C 8.833000183105469 8.608750343322754 8.608750343322754 8.833000183105469 8.333100318908691 8.833000183105469 Z"
                        stroke="none"
                    />
                    <Path
                        d="M 8.333100318908691 8.333000183105469 L 8.333000183105469 8.333000183105469 L 8.333100318908691 1.00000011920929 L 7.222599983215332 0.9999001026153564 L 7.222599983215332 7.222599983215332 L 1.00000011920929 7.222500324249268 L 0.9999001026153564 8.333000183105469 L 8.333100318908691 8.333000183105469 M 8.333100318908691 9.333000183105469 L 0.9999001026153564 9.333000183105469 C 0.4473001062870026 9.333000183105469 9.155273517080786e-08 8.885700225830078 9.155273517080786e-08 8.333100318908691 L 9.155273517080786e-08 7.222500324249268 C 9.155273517080786e-08 6.669899940490723 0.4473001062870026 6.222599983215332 0.9999001026153564 6.222599983215332 L 6.222599983215332 6.222599983215332 L 6.222599983215332 0.9999001026153564 C 6.222599983215332 0.4473001062870026 6.669899940490723 9.155273517080786e-08 7.222500324249268 9.155273517080786e-08 L 8.333100318908691 9.155273517080786e-08 C 8.885700225830078 9.155273517080786e-08 9.333000183105469 0.4473001062870026 9.333000183105469 0.9999001026153564 L 9.333000183105469 8.333100318908691 C 9.333000183105469 8.885700225830078 8.885700225830078 9.333000183105469 8.333100318908691 9.333000183105469 Z"
                        stroke="none"
                        fill="#f2f8ff"
                    />
                </G>
            </G>
        </Svg>
    )
}

export default SVGComponent;