import * as React from "react";
import Svg, { G, Defs, Path } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: style, title */
const SVGComponent = (props) => (
    <Svg
        width="25"
        height="25"
        viewBox="-6 0 32 26"
        id="magicoon-Regular"
        xmlns="http://www.w3.org/2000/svg"
        fill="#000000"
        {...props}
    >
        <G id="SVGRepo_bgCarrier" strokeWidth={0} />
        <G
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <G id="SVGRepo_iconCarrier">
            <Defs></Defs>
            <G id="log-out-Regular">
                <Path
                    id="log-out-Regular-2"
                    data-name="log-out-Regular"
                    className="cls-1"
                    d="M12.75,21a.75.75,0,0,1-.75.75H8A4.756,4.756,0,0,1,3.25,17V7A4.756,4.756,0,0,1,8,2.25h4a.75.75,0,0,1,0,1.5H8A3.254,3.254,0,0,0,4.75,7V17A3.254,3.254,0,0,0,8,20.25h4A.75.75,0,0,1,12.75,21Zm7.78-9.53-4-4a.75.75,0,1,0-1.06,1.061l2.719,2.719H10a.75.75,0,0,0,0,1.5h8.189L15.47,15.47a.75.75,0,0,0,1.06,1.061l4-4A.75.75,0,0,0,20.53,11.47Z"
                />
            </G>
        </G>
    </Svg>
);
export default SVGComponent;
