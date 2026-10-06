import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import unhealthy1 from "@/assets/meal-unhealthy-1-upload.jpeg";
import healthy1 from "@/assets/meal-healthy-1.png";
import unhealthy2 from "@/assets/meal-unhealthy-2.jpg";
import healthy2 from "@/assets/meal-healthy-2.jpeg";

const meals = [
  {
    name: "Burger",
    unhealthy: unhealthy1,
    healthy: healthy1,
    unhealthyLabel: "Vette dubbele cheeseburger",
    healthyLabel: "Volkoren burger met verse groenten",
    unhealthyCal: "~1100 kcal",
    healthyCal: "~450 kcal",
    instagramUrl: "https://www.instagram.com/p/DW0k0jYDV-i/?img_index=1",
  },
  {
    name: "Pasta",
    unhealthy: unhealthy2,
    healthy: healthy2,
    unhealthyLabel: "Zware carbonara met roomsaus",
    healthyLabel: "Lichte pasta met gegrilde kip & verse groenten",
    unhealthyCal: "600+ kcal",
    healthyCal: "~400 kcal",
    instagramUrl: "https://www.instagram.com/p/DXyn-scjR3H/?img_index=1",
  },
];

const MealComparison = () => {
  const [active, setActive] = useState(0);
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal(0.05);

  const meal = meals[active];
  const unhealthyImageClass =
    "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in";

  return (
    <section className="py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={headerRef} className={`reveal ${headerVisible ? "visible" : ""} text-center mb-16`}>
          <span className="inline-block text-sm font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            Voeding vergelijken
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Wolf in Balance Maaltijden
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Dezelfde maaltijd, maar dan op de gezonde manier.
          </p>
        </div>

        {/* Meal tabs */}
        <div ref={contentRef} className={`reveal ${contentVisible ? "visible" : ""}`}>
          <div className="flex justify-center gap-3 mb-12">
            {meals.map((m, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-muted-foreground hover:bg-muted"
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>

          {/* Comparison cards */}
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-stretch">
              {/* Ongezond */}
              <div className="group relative" key={`unhealthy-${active}`}>
                <div className="absolute inset-0 bg-destructive/5 rounded-[2rem] rotate-1 transition-transform duration-500 group-hover:rotate-2" />
                <div className="relative bg-card rounded-3xl overflow-hidden border border-border transition-all duration-500" style={{ boxShadow: "var(--card-shadow)" }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={meal.unhealthy}
                      alt={meal.unhealthyLabel}
                      className={unhealthyImageClass}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
                    <div className="absolute top-4 left-4 bg-destructive/90 text-destructive-foreground text-xs font-bold px-4 py-2 rounded-full tracking-wide uppercase flex items-center gap-1.5">
                      <span>✗</span> Ongezond
                    </div>
                    <div className="absolute bottom-4 right-4 bg-foreground/80 text-background text-xs font-bold px-3 py-1.5 rounded-full">
                      {meal.unhealthyCal}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-foreground mb-1">{meal.name}</h3>
                    <p className="text-muted-foreground text-sm font-light">{meal.unhealthyLabel}</p>
                  </div>
                </div>
              </div>

              {/* Gezond */}
              <div className="group relative" key={`healthy-${active}`}>
                <div className="absolute inset-0 bg-primary/5 rounded-[2rem] -rotate-1 transition-transform duration-500 group-hover:-rotate-2" />
                <div className="relative bg-card rounded-3xl overflow-hidden border-2 border-primary/20 transition-all duration-500" style={{ boxShadow: "var(--card-shadow-hover)" }}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={meal.healthy}
                      alt={meal.healthyLabel}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-in"
                      style={{ objectPosition: meal.name === "Pasta" ? "center 70%" : "center 40%" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-4 py-2 rounded-full tracking-wide uppercase flex items-center gap-1.5 shadow-md">
                      <span>✓</span> Gezond
                    </div>
                    <div className="absolute bottom-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full">
                      {meal.healthyCal}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl text-foreground mb-1">{meal.name} · Wolf in Balance</h3>
                    <p className="text-foreground text-sm font-medium mb-3">{meal.healthyLabel}</p>
                    <a
                      href={meal.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                      Bekijk WiB varianten op Instagram
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow between */}
            <div className="flex justify-center -mt-[calc(50%+1.5rem)] md:-mt-0 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 pointer-events-none relative my-6 md:my-0">
              <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl pointer-events-auto">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MealComparison;
