import * as React from "react";
import Svg, { Path } from "react-native-svg";
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
            <Path
                id="Path_1141"
                data-name="Path 1141"
                d="M67.066,96H65.037v1.217a.407.407,0,0,1-.406.406H63.82a.407.407,0,0,1-.406-.406V96H53.679v1.217a.407.407,0,0,1-.406.406h-.811a.407.407,0,0,1-.406-.406V96H50.028A2.034,2.034,0,0,0,48,98.028V111.82a2.034,2.034,0,0,0,2.028,2.028H67.066a2.034,2.034,0,0,0,2.028-2.028V98.028A2.034,2.034,0,0,0,67.066,96Zm.406,15.212a1.017,1.017,0,0,1-1.014,1.014H50.637a1.017,1.017,0,0,1-1.014-1.014v-9.127a.407.407,0,0,1,.406-.406H67.066a.407.407,0,0,1,.406.406Z"
                transform="translate(-48 -94.377)"
                fill="#7a8bf7"
            />
            <Path
                id="Path_1142"
                data-name="Path 1142"
                d="M129.623,64.406a.407.407,0,0,0-.406-.406h-.811a.407.407,0,0,0-.406.406v1.217h1.623Z"
                transform="translate(-123.944 -64)"
                fill="#7a8bf7"
            />
            <Path
                id="Path_1143"
                data-name="Path 1143"
                d="M353.623,64.406a.407.407,0,0,0-.406-.406h-.811a.407.407,0,0,0-.406.406v1.217h1.623Z"
                transform="translate(-336.585 -64)"
                fill="#7a8bf7"
            />
        </Svg>
    )
}

export default SVGComponent;
