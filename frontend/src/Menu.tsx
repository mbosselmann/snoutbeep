import { useState } from "react";
import type { options } from "./App";
import "./Menu.css";
import froggy from "./assets/froggy.png";

function Menu({
  selectedOption,
  onOptionSelect,
  ref,
}: {
  selectedOption: string | null;
  onOptionSelect: (option: options) => void;
  ref: React.Ref<HTMLButtonElement>;
}) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <section className="menu" ref={ref}>
      <button
        className={"menu-toggle" + (isMenuToggled ? " fadeOut" : " fadeIn")}
        type="button"
        onClick={() => setIsMenuToggled(!isMenuToggled)}
      >
        <img width="50" height="50" src={froggy} alt="Open Menu" />
      </button>
      {isMenuToggled && (
        <section className="options-menu">
          <button
            className={`button ${selectedOption === "clock" ? "selected" : ""}`}
            type="button"
            onClick={() => onOptionSelect("clock")}
          >
            Clock
          </button>
          <button
            className={`button ${
              selectedOption === "letterGlitch" ? "selected" : ""
            }`}
            type="button"
            onClick={() => onOptionSelect("letterGlitch")}
          >
            Letter Glitch
          </button>
          <button
            className={`button ${selectedOption === "pig" ? "selected" : ""}`}
            type="button"
            onClick={() => onOptionSelect("pig")}
          >
            Pig
          </button>
          <button
            className={`button ${
              selectedOption === "pomodoro" ? "selected" : ""
            }`}
            type="button"
            onClick={() => onOptionSelect("pomodoro")}
          >
            Pomodoro
          </button>
        </section>
      )}
    </section>
  );
}

export default Menu;
