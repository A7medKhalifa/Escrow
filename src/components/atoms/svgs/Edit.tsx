import * as React from "react";
import Svg, {  G, Path, Rect } from "react-native-svg";
import { TSvgProps } from '../Svg';
import useSvgSize from 'hooks/useSvgSize';


const WIDTH = 113.715;
const HEIGHT = 77.212;

const RATIO_TO_WIDTH = HEIGHT / WIDTH;
function SVGComponent({ size, bgColor, ...props }: TSvgProps) {

    const computedSize = useSvgSize(size, RATIO_TO_WIDTH);
    return (
        <Svg
            viewBox="0 -17 46 46"
            width={50}
            height={50}
            // {...computedSize}
            {...props}
        >
            <Rect
                id="Rectangle_3477"
                data-name="Rectangle 3477"
                width={29}
                height={28}
                rx={14}
                fill="#dbe2ed"
            />
            <G id="suggest" transform="translate(6.969 5.969)">
                <G id="Group_84" data-name="Group 84" transform="translate(0 1.477)">
                    <G id="Group_83" data-name="Group 83">
                        <Path
                            id="Path_40"
                            data-name="Path 40"
                            d="M13.938,54.935a.649.649,0,0,0-.649.649v3.942a.829.829,0,0,1-.828.828H2.125a.829.829,0,0,1-.828-.828V49.19a.829.829,0,0,1,.828-.828H6.068a.649.649,0,1,0,0-1.3H2.125A2.128,2.128,0,0,0,0,49.19V59.526a2.128,2.128,0,0,0,2.125,2.125H12.461a2.128,2.128,0,0,0,2.125-2.125V55.584A.649.649,0,0,0,13.938,54.935Z"
                            transform="translate(0 -47.065)"
                            fill="#7889ff"
                        />
                    </G>
                </G>
                <G id="Group_86" data-name="Group 86" transform="translate(4.43)">
                    <G id="Group_85" data-name="Group 85">
                        <Path
                            id="Path_41"
                            data-name="Path 41"
                            d="M152.634,3.143,149.681.19a.649.649,0,0,0-.918,0l-7.383,7.383a.649.649,0,0,0-.19.459v2.953a.649.649,0,0,0,.649.649h2.953a.649.649,0,0,0,.459-.19l7.383-7.383a.649.649,0,0,0,0-.918Zm-8.11,7.193h-2.035V8.3l6.734-6.734L151.258,3.6Z"
                            transform="translate(-141.191 0)"
                            fill="#7889ff"
                        />
                    </G>
                </G>
            </G>
        </Svg>
    )
}

export default SVGComponent;
