import { Effect } from "postprocessing";

const fragmentShader = /*glsl*/ `

    void mainImage(const in vec4 inputCount, const in vec2 uv , out vec2 outputColor){
        outputColor = vec4(uv,1.0,1.0)
    }

`;

export default class DrunkEffect extends Effect {
  constructor() {
    super("asd", fragmentShader);
  }
}
