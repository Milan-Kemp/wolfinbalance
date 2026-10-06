import sportImg from "@/assets/sport-bg-generated.jpg.asset.json";
import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const SportdietistTeaser = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-12 md:py-20 bg-background">
      <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} container mx-auto px-6 lg:px-12 max-w-6xl`}>
        <Link
          to="/sportdietist"
          onClick={() => window.scrollTo(0, 0)}
          className="group relative block rounded-3xl overflow-hidden shadow-2xl touch-manipulation cursor-pointer"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={sportImg.url}
              alt=""
              className="w-full h-full object-cover object-[70%_center] opacity-70 group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
              loading="lazy"
            />
            {/* Dark green overlay */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.95) 35%, hsl(var(--primary) / 0.8) 60%, hsl(var(--primary) / 0.6) 80%, hsl(var(--primary) / 0.45) 100%)" }} />
          </div>

          {/* Content */}
          <div className="relative px-7 py-10 md:px-14 md:py-14 grid md:grid-cols-[1.15fr_1fr] gap-8 md:gap-12 items-center min-h-[320px]">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-3.5 py-1.5 mb-5">
                <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-[0.7rem] font-bold text-primary-foreground tracking-[0.18em] uppercase">
                  SCAS&#8209;geregistreerd sportdiëtist
                </span>
              </div>

              <h2 className="font-serif text-primary-foreground text-2xl md:text-4xl leading-[1.1] mb-4">
                Train jij hard, maar zie je weinig <em className="not-italic text-primary-foreground/80">tot geen progressie?</em>
              </h2>
              <p className="text-primary-foreground/80 font-light text-sm md:text-base max-w-md leading-relaxed mb-6">
                Dan is er een grote kans dat het aan je voeding ligt. Met de juiste brandstof haal je méér uit je training, wedstrijd en herstel.
              </p>

              <span className="inline-flex items-center gap-2.5 bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-full text-sm group-hover:gap-3.5 transition-all duration-300 shadow-lg">
                Ontdek sportdiëtetiek
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </div>

            {/* Sports list with subtitles */}
            <div className="hidden md:flex flex-col gap-2.5">
              {[
                { label: "Krachtsport", sub: "Bulken of cutten" },
                { label: "Vechtsport", sub: "Op wedstrijdgewicht komen, zonder slap gevoel in de ring" },
                { label: "Wielersport", sub: "Wat neem je praktisch mee voor onderweg?" },
                { label: "Teamsport", sub: "Pieken op wedstrijddag, sneller herstellen erna" },
              ].map((s) => (
                <div key={s.label} className="bg-primary-foreground/[0.08] backdrop-blur-sm border border-primary-foreground/20 rounded-xl px-4 py-3 hover:bg-primary-foreground/[0.14] hover:border-primary-foreground/35 transition-all">
                  <div className="text-primary-foreground font-semibold text-sm tracking-wide">{s.label}</div>
                  <div className="text-primary-foreground/70 text-xs font-light leading-snug mt-0.5">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SportdietistTeaser;
