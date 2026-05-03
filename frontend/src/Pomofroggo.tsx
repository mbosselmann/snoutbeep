import { useEffect, useRef, useState } from "react";
import froggyUrl from "./assets/froggy.png";
import "./Clock.css";
import "./Pomofroggo.css";

const FOCUS_SECONDS = 25 * 60;
const BREAK_SECONDS = 5 * 60;

type Phase = "focus" | "break";

function formatCountdown(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

export default function Pomofroggo({ onReturn }: { onReturn: () => void }) {
  const [phase, setPhase] = useState<Phase>("focus");
  const [secondsLeft, setSecondsLeft] = useState(FOCUS_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  const phaseRef = useRef(phase);
  phaseRef.current = phase;
  console.log(phase);
  console.log(secondsLeft);

  useEffect(() => {
    if (!isRunning) return;

    if (secondsLeft === 0) {
      setIsRunning(false);
    }

    const id = window.setInterval(() => {
      setSecondsLeft((s) => {
        if (s > 0) return s - 1;
        const next = phaseRef.current === "focus" ? "break" : "focus";
        phaseRef.current = next;
        setPhase(next);
        return next === "focus" ? FOCUS_SECONDS : BREAK_SECONDS;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [isRunning, secondsLeft]);

  const reset = () => {
    setIsRunning(false);
    setPhase("focus");
    phaseRef.current = "focus";
    setSecondsLeft(FOCUS_SECONDS);
  };

  return (
    <section
      onTouchStart={(event) => event.stopPropagation()}
      className="pomodoro"
    >
      <div className="pomodoro__controls">
        <button
          type="button"
          className="pomodoro__btn"
          onClick={() => setIsRunning((r) => !r)}
          disabled={secondsLeft === 0}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button type="button" className="pomodoro__btn" onClick={reset}>
          Reset
        </button>
        <button type="button" className="pomodoro__btn" onClick={onReturn}>
          Return
        </button>
      </div>
      <div className={`timer ${secondsLeft === 0 && "timer--end"}`}>
        <img
          className="pomodoro__frog"
          src={froggyUrl}
          width={150}
          height={150}
          alt=""
        />
        {secondsLeft === 0 ? (
          <p className="pomodoro__time">END</p>
        ) : (
          <p className="pomodoro__time">{formatCountdown(secondsLeft)}</p>
        )}
      </div>
    </section>
  );
}
