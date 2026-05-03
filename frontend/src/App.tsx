import "./App.css";
import {
  useEffect,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react";
import Menu from "./Menu";
import Pig from "./Pig";
import Clock from "./Clock";
import LetterGlitch from "./LetterGlitch";
import SplashScreen from "./SplashScreen";

export type options = "clock" | "letterGlitch" | "pig" | "pomodoro";

function App() {
  const [option, setOption] = useState<options>("pig");
  const [showSplashScreen, setShowSplashScreen] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const menuRef = useRef<HTMLButtonElement>(null);
  console.log("App rendered with option:", option);

  const handleOptionChange = (newOption: options) => {
    setOption(newOption);
    setIsMenuVisible(false);
  };

  const handleTouch = (event: ReactTouchEvent<HTMLElement>) => {
    if (menuRef.current) {
      console.log("menuRef.current", menuRef.current);
      return;
    }
    event.preventDefault();
    setShowSplashScreen(true);
    setIsMenuVisible(true);
  };

  useEffect(() => {
    async function fetchOption() {
      // setOption(null);
      try {
        const response = await fetch("/api/option");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const fetchedOption = data as options;
        if (!ignore) {
          console.log("fetchedOption", fetchedOption);
          setOption(fetchedOption);
        }
      } catch (err) {
        if (err instanceof Error) {
          setOption("letterGlitch");
          console.log("Error :(", err.message);
        } else {
          setOption("letterGlitch");
          console.log("Error :(", "An unknown error occurred");
        }
      }
    }
    let ignore = false;
    fetchOption();
    return () => {
      ignore = true;
    };
  }, []);

  if (showSplashScreen) {
    return (
      <SplashScreen onLoadingComplete={() => setShowSplashScreen(false)} />
    );
  }

  return (
    <main className={option} onTouchStart={handleTouch}>
      {isMenuVisible && (
        <Menu
          ref={menuRef}
          selectedOption={option}
          onOptionSelect={handleOptionChange}
          isMenuVisible={isMenuVisible}
        />
      )}
      {option === "clock" && <Clock />}
      {option === "pig" && <Pig />}
      {option === "pomodoro" && <Pig />}
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
