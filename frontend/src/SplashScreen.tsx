import { useEffect, useState } from "react";
import { ClockIcon, GlitchIcon, PigIcon, FrogIcon } from "./Icons";
import "./SplashScreen.css";

interface SplashScreenProps {
  onLoadingComplete: () => void;
  minDisplayTime?: number;
}

function SplashScreen({
  onLoadingComplete,
  minDisplayTime = 3000,
}: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, minDisplayTime);

    return () => clearTimeout(timer);
  }, [minDisplayTime, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <main className="splash-screen">
      <div className="icon-spinner">
        <div className="icon-item icon-clock">
          <ClockIcon />
        </div>
        <div className="icon-item icon-glitch">
          <GlitchIcon />
        </div>
        <div className="icon-item icon-pig">
          <PigIcon />
        </div>
        <div className="icon-item icon-frog">
          <FrogIcon />
        </div>
      </div>
    </main>
  );
}

export default SplashScreen;
