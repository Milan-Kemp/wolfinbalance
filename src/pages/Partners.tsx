import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import platoImg from "@/assets/partner-plato.jpg";
import fitteImg from "@/assets/partner-fitte.jpg";
import goedlichaamImg from "@/assets/partner-goedlichaam-clean.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const partners = [
  {
    name: "Sport- en Gezondheidscentrum Plato",
    logo: platoImg,
    url: "https://www.gezondheidscentrumplato.nl/",
    tagline: "Beweging, herstel & ontspanning",
    description:
      "Wolf in Balance werkt nauw samen met Sport- en Gezondheidscentrum Plato, een plek waar beweging, herstel en ontspanning samenkomen. Dankzij het multidisciplinaire team binnen Plato kunnen cliënten rekenen op deskundige begeleiding en korte lijntjes tussen verschillende specialisten.",
    extra:
      "Door deze samenwerking sluit voedingsadvies naadloos aan op training en behandeling. Zo ontstaat er een complete aanpak waarbij elke cliënt precies krijgt wat nodig is om duurzame stappen te zetten richting gezondheid en balans.",
  },
  {
    name: "De Fitte Medewerker",
    logo: fitteImg,
    url: "https://defittemedewerker.nl/",
    tagline: "Vitaliteit op de werkvloer",
    description:
      "Wolf in Balance werkt ook samen met De Fitte Medewerker in Purmerend. Een energieke organisatie die bedrijven helpt om hun medewerkers vitaler, fitter en veerkrachtiger te maken. Zij bieden onder andere workshops, stoelmassages, sportieve bedrijfsactiviteiten en inspirerende lezingen aan.",
    extra:
      "Voor workshops, health checks en PMO's bundelen Wolf in Balance en De Fitte Medewerker hun krachten. Wat ons verbindt? De overtuiging dat positiviteit, plezier en een persoonlijke benadering dé basis zijn voor duurzame verandering.",
  },
  {
    name: "GoedLichaam",
    logo: goedlichaamImg,
    url: "https://goedlichaam.nl/",
    tagline: "Lichamelijk & mentaal sterker",
    description:
      "Wolf in Balance werkt sinds kort ook samen met GoedLichaam, een betrokken praktijk die mensen helpt om zich zowel lichamelijk als mentaal sterker te voelen. Zij bieden begeleiding die echt past bij iemands leven: praktisch, persoonlijk en zonder standaardplannen.",
    extra:
      "Deze samenwerking sluit perfect aan bij mijn manier van werken. We delen dezelfde missie: mensen op een toegankelijke en positieve manier begeleiden naar meer energie, meer balans en meer vertrouwen in hun lichaam.",
  },
];

const PartnerCard = ({ partner, index }: { partner: typeof partners[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "visible" : ""} reveal-delay-${index + 1}`}
    >
      <div className="group bg-card rounded-3xl overflow-hidden border border-border transition-all duration-500 hover:border-primary/20"
        style={{ boxShadow: "var(--card-shadow)" }}
      >
        <div className="grid md:grid-cols-[320px_1fr] gap-0">
          {/* Logo side */}
          <div className="relative bg-secondary flex items-center justify-center p-12 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-primary/[0.03] group-hover:bg-primary/[0.06] transition-colors duration-500" />
            <img
              src={partner.logo}
              alt={partner.name}
              className="relative z-10 max-h-[80px] w-auto object-contain group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content side */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-2">
              {partner.tagline}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-5 leading-tight">{partner.name}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-light">{partner.description}</p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-light">{partner.extra}</p>
            <a
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-xl text-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 w-fit"
            >
              Bezoek website
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Partners = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-foreground/[0.03] rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/[0.03] rounded-full translate-y-1/3 -translate-x-1/3" />
        </div>
        <div ref={heroRef} className={`reveal ${heroVisible ? "visible" : ""} container mx-auto px-6 lg:px-12 text-center relative z-10`}>
          <span className="inline-block text-primary-foreground/50 text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Samenwerkingspartners
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6 leading-tight">
            Samen sterker
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Ik geloof dat goede zorg ontstaat wanneer experts hun krachten bundelen. 
            Daarom werk ik samen met partners die dezelfde visie delen: mensen begeleiden 
            naar een gezondere, sterkere en gebalanceerde leefstijl.
          </p>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-8">
          {partners.map((partner, i) => (
            <PartnerCard key={partner.name} partner={partner} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <div className="bg-secondary rounded-3xl p-10 md:p-14 border border-border">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Ook samenwerken?
            </h2>
            <p className="text-muted-foreground font-light mb-8 max-w-lg mx-auto">
              Ben je een professional in de gezondheids- of sportbranche en wil je samenwerken? Neem gerust contact op.
            </p>
            <a
              href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20ben%20ge%C3%AFnteresseerd%20in%20een%20samenwerking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Neem contact op
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
