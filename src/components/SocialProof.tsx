import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const stats = [
  { value: "225+", label: "Tevreden cliënten" },
  { value: "4.9★", label: "Google Reviews" },
  { value: "3 uur", label: "Vergoed door verzekering" },
];

const SocialProof = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative -mt-28 md:-mt-px md:bg-primary z-20">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className="grid grid-cols-3 bg-white/95 md:bg-transparent rounded-t-2xl md:rounded-none backdrop-blur-sm md:backdrop-blur-none shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:shadow-none divide-x divide-[#254e17]/10 md:divide-primary-foreground/15"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className={`py-4 md:py-8 text-center reveal ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="text-xl md:text-4xl font-bold text-[#254e17] md:text-primary-foreground mb-1 tracking-tight">
                {s.value}
              </div>
              <div className="text-[#254e17]/60 md:text-primary-foreground/60 text-[10px] md:text-sm font-light tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
