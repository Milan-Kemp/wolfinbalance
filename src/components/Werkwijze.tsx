import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import heroImg from "@/assets/rowan-hero.jpg";
import clientImg from "@/assets/rowan-client.jpg";
import bodyCompImg from "@/assets/analysis-body-composition.png";
import overweightImg from "@/assets/analysis-overweight.png";
import segmentalImg from "@/assets/analysis-segmental-muscles.png";

const steps = [
  {
    step: "01",
    title: "Kennismaking",
    desc: "We bespreken je doelen, eetgewoontes en levensstijl in een vrijblijvend gesprek. Zo leer ik jou kennen en kunnen we samen bepalen wat het beste bij je past.",
    image: heroImg,
  },
  {
    step: "02",
    title: "Analyse & Meting",
    desc: "Een professionele lichaamsanalyse met o.a. lichaamssamenstelling, vetpercentage, spiermassa en meer. Dit geeft een compleet beeld van waar je staat.",
    image: clientImg,
    analysisImages: [bodyCompImg, overweightImg, segmentalImg],
  },
  {
    step: "03",
    title: "Persoonlijk Plan",
    desc: "Je ontvangt een op maat gemaakt voedingsschema dat écht bij jou past. Ik houd hierbij veel rekening met je persoonlijke wensen en smaakvoorkeuren.",
    image: null,
    isSchemaImage: true,
  },
  {
    step: "04",
    title: "Begeleiding & Resultaat",
    desc: "Via regelmatige check-ins sturen we bij waar nodig en vieren we je successen. Samen werken we toe naar een blijvend gezondere leefstijl.",
    image: clientImg,
  },
];

const Werkwijze = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16 md:mb-24`}>
          <span className="inline-block text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">
            Hoe werkt het?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-3">
            Jouw traject in 4 stappen
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto font-light">
            Van eerste gesprek tot blijvend resultaat.
          </p>
        </div>

        {/* Vertical timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="space-y-16 md:space-y-0">
            {steps.map((s, i) => (
              <StepCard key={i} step={s} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StepCard = ({ step, index }: { step: typeof steps[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className="relative md:py-16">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <div className={`w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg transition-all duration-700 ${isVisible ? "scale-100 opacity-100" : "scale-50 opacity-0"}`}>
          {step.step}
        </div>
      </div>

      <div className={`grid md:grid-cols-2 gap-8 lg:gap-16 items-center`}>
        {/* Content side */}
        <div className={`${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:order-2"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} transition-all duration-700 ease-out`}>
          {/* Mobile step indicator */}
          <div className="flex md:hidden items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
              {step.step}
            </div>
            <div className="h-px flex-1 bg-border" />
          </div>

          <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-3">{step.title}</h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light mb-5">{step.desc}</p>

          {step.analysisImages && (
            <div className={`inline-flex items-start gap-3 bg-secondary rounded-xl p-4 border border-border ${isEven ? "md:ml-auto" : ""}`}>
              <span className="text-xl flex-shrink-0">📊</span>
              <div className={isEven ? "md:text-left" : ""}>
                <p className="text-foreground text-sm font-medium mb-0.5">Professionele InBody meting</p>
                <p className="text-muted-foreground text-xs font-light">Lichaamssamenstelling, vetpercentage, spiermassa en visceraal vet.</p>
              </div>
            </div>
          )}

          {step.isSchemaImage && (
            <div className={`inline-flex items-start gap-3 bg-secondary rounded-xl p-4 border border-border ${isEven ? "md:ml-auto" : ""}`}>
              <span className="text-xl flex-shrink-0">🍽️</span>
              <div className={isEven ? "md:text-left" : ""}>
                <p className="text-foreground text-sm font-medium mb-0.5">Op maat gemaakt</p>
                <p className="text-muted-foreground text-xs font-light">Geen standaard schema, maar eentje dat écht bij jou past.</p>
              </div>
            </div>
          )}
        </div>

        {/* Visual side */}
        <div className={`${isEven ? "md:order-2 md:pl-16" : "md:pr-16"} ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} transition-all duration-700 delay-200 ease-out`}>
          {step.analysisImages ? (
            <div className="grid grid-cols-1 gap-2.5">
              {step.analysisImages.map((img, i) => (
                <div key={i} className="bg-card rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md">
                  <img
                    src={img}
                    alt={["Lichaamssamenstelling", "Overgewicht analyse", "Spiermassa analyse"][i]}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          ) : step.isSchemaImage ? (
            <VoedingsschemaCard />
          ) : (
            <div className="relative group rounded-2xl overflow-hidden shadow-lg">
              <img
                src={step.image!}
                alt={step.title}
                className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const VoedingsschemaCard = () => (
  <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-lg">
    {/* Header */}
    <div className="bg-primary px-6 py-5">
      <h4 className="font-serif text-xl md:text-2xl text-primary-foreground mb-1">
        Zo kan een dag eruit zien
      </h4>
      <p className="text-primary-foreground/70 text-sm font-light">
        Geen standaard dieetlijst. Wel structuur en flexibiliteit.
      </p>
    </div>

    <div className="p-5 md:p-6 space-y-4">
      {/* Ontbijt */}
      <div>
        <p className="text-foreground font-semibold text-sm mb-2.5 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs">☀️</span>
          Ontbijt
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
            <p className="text-xs font-semibold text-primary mb-1.5">🥖 Optie 1</p>
            <ul className="text-muted-foreground text-xs font-light space-y-0.5">
              <li>Volkoren brood of crackers</li>
              <li>Mager beleg</li>
              <li>Een bron van zuivel</li>
            </ul>
          </div>
          <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
            <p className="text-xs font-semibold text-primary mb-1.5">🥣 Optie 2</p>
            <ul className="text-muted-foreground text-xs font-light space-y-0.5">
              <li>Kwark of yoghurt</li>
              <li>Ontbijtgranen</li>
              <li>Fruit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tussendoor */}
      <div>
        <p className="text-foreground font-semibold text-sm mb-2.5 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs">⏰</span>
          Tussendoor
        </p>
        <div className="grid grid-cols-2 gap-2.5">
          <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
            <p className="text-muted-foreground text-xs font-light">🍘 Crackers met mager hartig beleg</p>
          </div>
          <div className="bg-secondary/80 rounded-lg p-3 border border-border/50">
            <p className="text-muted-foreground text-xs font-light">🍏 Fruit met een handje ongezouten noten</p>
          </div>
        </div>
      </div>

      {/* Structuur */}
      <div className="pt-3 border-t border-border">
        <p className="text-foreground font-semibold text-xs uppercase tracking-widest mb-2.5 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-primary/10 flex items-center justify-center text-xs">📐</span>
          Structuur
        </p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {["Regelmaat in eetmomenten", "Voldoende eiwitten per moment", "Koolhydraten + eiwit + vet", "Afgestemd op jouw doelen"].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              <p className="text-muted-foreground text-xs font-light">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Footer accent */}
    <div className="bg-primary/5 border-t border-border px-6 py-3 text-center">
      <p className="text-primary text-xs font-medium">✨ Afgestemd op jouw smaak & doelen</p>
    </div>
  </div>
);

export default Werkwijze;
