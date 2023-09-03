import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props:any) => (
  <Svg
    id="credit-card"
    xmlns="http://www.w3.org/2000/svg"
    width={45}
    height={23.797}
    viewBox="0 0 45 23"
    {...props}
  >
    <Path
      id="credit-card-2"
      data-name="credit-card"
      d="M113.427,192H88.239a2.915,2.915,0,0,0-2.906,2.906v17.438a2.915,2.915,0,0,0,2.906,2.906h25.188a2.915,2.915,0,0,0,2.906-2.906V194.906A2.915,2.915,0,0,0,113.427,192ZM88.24,193.938h25.188a.982.982,0,0,1,.969.969v2.906H87.271v-2.906a.982.982,0,0,1,.968-.97Zm25.188,19.375H88.239a.982.982,0,0,1-.969-.969v-8.719H114.4v8.719a.982.982,0,0,1-.973.968ZM89.208,207.5h1.938v3.875H89.208Zm3.875,0h1.938v3.875H93.083Zm3.875,0H98.9v3.875H96.958Z"
      transform="translate(-85.333 -192)"
      fill="#606060"
    />
  </Svg>
);
export default SVGComponent;
