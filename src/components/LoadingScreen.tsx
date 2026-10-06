import { useState, useEffect } from "react";
import logoWhiteImg from "@/assets/logo-wib-white.png";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState<"logo" | "text" | "stat" | "exit">("logo");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("text"), 600);
    const t2 = setTimeout(() => setPhase("stat"), 1600);
    const t3 = setTimeout(() => setPhase("exit"), 3400);
    const t4 = setTimeout(onComplete, 4000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-all duration-700 ${
        phase === "exit" ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
      style={{ background: "var(--hero-gradient)" }}
    >
      {/* Animated circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-primary-foreground/10 loading-ring-1" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-primary-foreground/10 loading-ring-2" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-primary-foreground/5 loading-ring-3" />
      </div>

      {/* Logo */}
      <div
        className={`relative z-10 transition-all duration-700 ease-out ${
          phase === "logo" ? "opacity-0 scale-75" : "opacity-100 scale-100"
        }`}
      >
        <img
          src={logoWhiteImg}
          alt="Wolf in Balance"
          className="h-20 md:h-28 w-auto drop-shadow-2xl rounded-xl"
        />
      </div>

      {/* Tagline */}
      <div
        className={`relative z-10 mt-6 transition-all duration-500 ease-out ${
          phase === "text" || phase === "stat" || phase === "exit"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-primary-foreground/80 text-lg md:text-xl font-medium tracking-wide">
          Diëtistenpraktijk
        </p>
      </div>

      {/* Stats text */}
      <div
        className={`relative z-10 mt-4 transition-all duration-600 ease-out ${
          phase === "stat" || phase === "exit"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6"
        }`}
      >
        <p className="text-primary-foreground/60 text-sm md:text-base font-light tracking-wide">
          In 2026 gingen al{" "}
          <span className="text-primary-foreground font-semibold">225+</span>{" "}
          cliënten u voor
        </p>
      </div>

      {/* Loading bar */}
      <div className="relative z-10 mt-10 w-48 h-0.5 bg-primary-foreground/20 rounded-full overflow-hidden">
        <div className="h-full bg-primary-foreground/60 rounded-full loading-bar" />
      </div>
    </div>
  );
};

export default LoadingScreen;
