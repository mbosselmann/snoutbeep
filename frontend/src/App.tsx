import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import Clock from "./Clock";
import LetterGlitch from "./LetterGlitch";

import "./App.css";

function App() {
  return (
    <>
      <div>
        <Clock />
      </div>
      <div>
        <DotLottieReact
          src="https://lottie.host/850857d4-5bad-4e15-8412-25b7a20aed81/01sG1gKWau.lottie"
          loop
          autoplay
        />
      </div>
      <div
        style={{
          width: "900px",
          height: "700px",
          position: "relative",
        }}
      >
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          glitchColors={["#c28c95", "#ffd1da", "#3d93cf"]}
        />
      </div>
    </>
  );
}

export default App;
