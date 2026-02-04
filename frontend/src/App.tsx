import Clock from "./Clock";
import LetterGlitch from "./LetterGlitch";
import Pig from "./Pig";

import "./App.css";
import { useEffect, useEffectEvent, useRef, useState } from "react";
import Menu from "./Menu";

export type options = "clock" | "letterGlitch" | "pig" | "pomodoro";

function App() {
  const [option, setOption] = useState<options | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  console.log("App rendered with option:", option);

  const handleOptionChange = (newOption: options) => {
    setOption(newOption);
    setIsMenuVisible(false);
  };

  const handleTouch = useEffectEvent(() => {
    if (menuRef.current) {
      return;
    }
    setIsMenuVisible((value) => !value);
  });

  useEffect(() => {
    window.addEventListener("touchstart", handleTouch);
    return () => {
      window.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  useEffect(() => {
    async function fetchOption() {
      setOption(null);
      try {
        const response = await fetch("/api/option");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const fetchedOption = data as options;
        if (!ignore) {
          setOption(fetchedOption);
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }
    let ignore = false;
    fetchOption();
    return () => {
      ignore = true;
    };
  }, []);

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!option) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <main className={option}>
      {isMenuVisible && (
        <Menu
          ref={menuRef}
          selectedOption={option}
          onOptionSelect={handleOptionChange}
        />
      )}
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
