import Clock from "./Clock";
import LetterGlitch from "./LetterGlitch";
import Pig from "./Pig";

import "./App.css";

type options = "clock" | "letterGlitch" | "pig";

function App({ option = "pig" }: { option?: options }) {
  return (
    <main className={option}>
      {option === "clock" && <Clock />}
      {option === "pig" && <Pig />}
      {option === "letterGlitch" && (
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
          glitchColors={["#c28c95", "#ffd1da", "#3d93cf"]}
        />
      )}
    </main>
  );
}

export default App;
