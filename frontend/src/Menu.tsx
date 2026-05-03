import "./Menu.css";
import type { options } from "./App";
import { ClockIcon, GlitchIcon, PigIcon, FrogIcon } from "./Icons";

const options: { id: options; label: string }[] = [
  { id: "clock", label: "Clock" },
  { id: "letterGlitch", label: "Letter Glitch" },
  { id: "pig", label: "Pig" },
  { id: "pomodoro", label: "Pomofroggo" },
];

const iconMap: Record<options, React.FC<{ className?: string }>> = {
  clock: ClockIcon,
  letterGlitch: GlitchIcon,
  pig: PigIcon,
  pomodoro: FrogIcon,
};

function Menu({
  selectedOption,
  onOptionSelect,
  ref,
}: {
  selectedOption: string | null;
  onOptionSelect: (option: options) => void;
  ref: React.Ref<HTMLButtonElement>;
  isMenuVisible: boolean;
}) {
  return (
    <main ref={ref} className={`main main--${selectedOption}`}>
      <div className="content">
        <ul className="card-grid">
          {options.map((option) => {
            const Icon = iconMap[option.id];
            const isSelected = selectedOption === option.id;

            return (
              <li key={option.id}>
                <button
                  className={`glass-card ${isSelected ? `glass-card--${option.id}` : ""}`}
                  type="button"
                  onClick={() => onOptionSelect(option.id)}
                  aria-pressed={isSelected}
                >
                  <div className="card-icon">
                    <Icon className="icon" />
                  </div>
                  <span className="card-label">{option.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}

export default Menu;
