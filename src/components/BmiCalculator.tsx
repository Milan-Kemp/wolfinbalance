import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BmiCalculator = () => {
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(75);
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();

  const bmi = weight / ((height / 100) ** 2);
  const bmiRounded = Math.round(bmi * 10) / 10;

  const getCategory = (val: number) => {
    if (val < 18.5) return { label: "Ondergewicht", color: "hsl(200, 70%, 50%)", advice: "Je zou baat kunnen hebben bij een voedingsplan gericht op gezond aankomen." };
    if (val < 25) return { label: "Gezond gewicht", color: "hsl(145, 45%, 35%)", advice: "Je BMI valt binnen een gezond bereik. Met voeding die aansluit op jouw persoonlijke doelen kun je blijven werken aan je energie en welzijn." };
    if (val < 30) return { label: "Overgewicht", color: "hsl(40, 80%, 50%)", advice: "Met een persoonlijk voedingsplan kunnen we samen werken aan een gezonder gewicht." };
    return { label: "Obesitas", color: "hsl(0, 70%, 50%)", advice: "Professionele begeleiding kan je helpen stap voor stap naar een gezonder gewicht." };
  };

  const category = getCategory(bmiRounded);

  // Position on the bar (BMI 15-40 range mapped to 0-100%)
  const barPosition = Math.min(100, Math.max(0, ((bmiRounded - 15) / 25) * 100));

  return (
    <section id="bmi" className="py-28 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <span className="inline-block text-sm font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Bereken je BMI
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Waar sta jij?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Bereken je Body Mass Index en ontdek of een persoonlijk voedingsplan iets voor jou is.
          </p>
        </div>

        <div ref={ref2} className={`reveal ${v2 ? "visible" : ""} max-w-2xl mx-auto`}>
          <div className="bg-card rounded-3xl border border-border p-8 md:p-10" style={{ boxShadow: "var(--card-shadow-hover)" }}>
            {/* Height */}
            <div className="mb-8">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-foreground">Lengte</label>
                <span className="text-2xl font-bold text-foreground tabular-nums">{height} <span className="text-sm font-normal text-muted-foreground">cm</span></span>
              </div>
              <input
                type="range"
                min={140}
                max={220}
                value={height}
                onChange={e => setHeight(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
                style={{ accentColor: "hsl(var(--primary))" }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>140 cm</span>
                <span>220 cm</span>
              </div>
            </div>

            {/* Weight */}
            <div className="mb-10">
              <div className="flex justify-between items-baseline mb-3">
                <label className="text-sm font-medium text-foreground">Gewicht</label>
                <span className="text-2xl font-bold text-foreground tabular-nums">{weight} <span className="text-sm font-normal text-muted-foreground">kg</span></span>
              </div>
              <input
                type="range"
                min={40}
                max={180}
                value={weight}
                onChange={e => setWeight(Number(e.target.value))}
                className="w-full h-2 rounded-full appearance-none cursor-pointer bg-muted accent-primary"
                style={{ accentColor: "hsl(var(--primary))" }}
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>40 kg</span>
                <span>180 kg</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border mb-8" />

            {/* Result */}
            <div className="text-center mb-8">
              <div className="text-6xl font-bold mb-2 transition-all duration-500" style={{ color: category.color }}>
                {bmiRounded}
              </div>
              <div
                className="inline-block text-sm font-bold px-4 py-1.5 rounded-full text-card transition-all duration-500"
                style={{ backgroundColor: category.color }}
              >
                {category.label}
              </div>
            </div>

            {/* Visual bar */}
            <div className="relative mb-4">
              <div className="h-3 rounded-full overflow-hidden flex">
                <div className="flex-1 bg-blue-400/80" />
                <div className="flex-[2.6] bg-green-500/80" />
                <div className="flex-[2] bg-yellow-400/80" />
                <div className="flex-[4] bg-red-400/80" />
              </div>
              {/* Indicator */}
              <div
                className="absolute top-[-6px] transition-all duration-500 ease-out"
                style={{ left: `${barPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="w-5 h-5 rounded-full bg-card border-[3px] shadow-lg" style={{ borderColor: category.color }} />
              </div>
            </div>
            <div className="flex justify-between text-[10px] text-muted-foreground mb-8">
              <span>Ondergewicht</span>
              <span>Gezond</span>
              <span>Overgewicht</span>
              <span>Obesitas</span>
            </div>

            {/* Advice */}
            <div className="bg-secondary rounded-2xl p-5 border border-border">
              <p className="text-sm text-foreground leading-relaxed">
                💡 {category.advice}
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20heb%20mijn%20BMI%20berekend%20en%20wil%20graag%20advies."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full block text-center bg-primary text-primary-foreground py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Gratis adviesgesprek →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BmiCalculator;
