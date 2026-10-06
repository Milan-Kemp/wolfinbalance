import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const packages = [
  {
    name: "Kickstart",
    price: "€105",
    time: "Intake: 60 min + Uitwerking: 30 min",
    features: [
      "Eerste consult / intake",
      "Basisvoedingsschema met besproken adviezen",
      "Persoonlijk suppletieadvies (indien nodig)",
    ],
    desc: "Voor wie graag een eerste richting en praktische handvatten wil.",
    popular: false,
    icon: "🚀",
    detail:
      "Het Kickstart-pakket is ideaal als je een eerste stap wilt zetten. Tijdens het intakegesprek van 60 minuten bespreken we jouw doelen, voedingsgewoontes en eventuele klachten. Daarna werk ik een basisvoedingsschema uit met concrete adviezen die je direct kunt toepassen. Indien nodig krijg je ook een suppletieadvies op maat. Dit pakket geeft je richting zonder dat het overweldigend wordt.",
  },
  {
    name: "In Balans",
    price: "€140",
    time: "Intake: 60 min + Uitwerking: 60 min",
    features: [
      "Eerste consult / intake",
      "Volledige voedingsanalyse (energie, macro & micro)",
      "Persoonlijke energiebehoefte berekening",
      "Op maat gemaakt voedingsschema, op de gram nauwkeurig berekend voor jouw lichaam en doelen",
      "Persoonlijk suppletieadvies (indien nodig)",
    ],
    desc: "Voor wie een volledig en persoonlijk plan wil.",
    popular: true,
    icon: "⚖️",
    detail:
      "Het In Balans-pakket is het meest gekozen pakket en biedt een compleet traject. Na een uitgebreide intake analyseer ik jouw volledige voedingspatroon op energie, macro- en micronutriënten. Op basis hiervan bereken ik jouw persoonlijke energiebehoefte en stel ik een voedingsschema op dat op de gram nauwkeurig is afgestemd op jouw lichaam en doelen. Alles wordt persoonlijk uitgewerkt zodat het aansluit bij jouw leefstijl.",
  },
  {
    name: "In Topvorm",
    price: "€170",
    time: "Intake: 60 min + Uitwerking: 90 min",
    features: [
      "Eerste consult / intake",
      "Voedingsanalyse op rust- en sportdagen",
      "Schema's voor rust- en trainingsdag",
      "Sportspecifieke voedingsadviezen",
      "Wedstrijddag schema (indien van toepassing)",
      "Persoonlijk suppletieadvies (indien nodig)",
    ],
    desc: "Voor fanatiekelingen die alles willen afstemmen op prestaties.",
    popular: false,
    icon: "🏆",
    detail:
      "Het In Topvorm-pakket is ontworpen voor sporters die het maximale uit hun voeding willen halen. Na de intake maak ik aparte voedingsschema's voor rustdagen én trainingsdagen, afgestemd op jouw sport en trainingsbelasting. Bij wedstrijdsporters stel ik ook een specifiek wedstrijddagschema op. Alle adviezen zijn sportspecifiek en gericht op optimale prestatie en herstel.",
  },
];

const Pricing = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();
  const [openPkg, setOpenPkg] = useState<number | null>(null);

  return (
    <section id="tarieven" className="py-14 md:py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <span className="inline-block text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">
            Tarieven
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Investeer in jezelf, zonder dat het jou geld kost!
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light">
            De eerste 3 uur worden vergoed vanuit je basisverzekering. Kies het pakket dat bij jou past.
          </p>
        </div>

        {/* Insurance banner */}
        <div className={`reveal ${isVisible ? "visible" : ""} max-w-3xl mx-auto mb-12`}>
          <div className="relative overflow-hidden rounded-2xl bg-primary/5 border border-primary/15 p-6 md:p-8">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl flex-shrink-0">
                🏥
              </div>
              <div>
                <h4 className="font-serif text-lg text-foreground mb-1">Vergoed door je basisverzekering</h4>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Je krijgt <span className="text-primary font-semibold">3 uur per kalenderjaar</span> vergoed vanuit de basisverzekering. 
                  Geen verwijzing nodig dankzij de Directe Toegankelijkheid Diëtetiek (DTD).
                </p>
                <p className="text-muted-foreground text-xs font-light mt-2 italic">
                  Let op: het eigen risico is hierbij van toepassing. Check altijd je eigen polis voor de exacte vergoeding.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`reveal reveal-delay-${i + 1} ${isVisible ? "visible" : ""} relative rounded-3xl border p-7 lg:p-8 transition-all duration-500 hover:-translate-y-2 flex flex-col ${
                pkg.popular
                  ? "bg-primary text-primary-foreground border-primary md:scale-[1.04]"
                  : "bg-card text-card-foreground border-border hover:border-primary/20"
              }`}
              style={{ boxShadow: pkg.popular ? "var(--card-shadow-hover)" : "var(--card-shadow)" }}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-5 py-1.5 rounded-full shadow-sm tracking-wide">
                  Meest gekozen
                </div>
              )}
              <h3 className="text-xl font-serif mb-1.5">{pkg.name}</h3>
              <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3.5 py-1.5 rounded-full mb-3 tracking-wide uppercase ${
                pkg.popular
                  ? "bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20"
                  : "bg-primary/10 text-primary border border-primary/20"
              }`}>
                Vergoed door verzekering
              </span>
              <p className={`text-sm mb-6 font-light ${pkg.popular ? "text-primary-foreground/55" : "text-muted-foreground"}`}>
                {pkg.time}
              </p>
              <div className={`h-px w-full mb-6 ${pkg.popular ? "bg-primary-foreground/15" : "bg-border"}`} />
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] mt-0.5 ${
                      pkg.popular ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
                    }`}>✓</span>
                    <span className="font-light">{f}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto space-y-2">
                <button
                  onClick={() => setOpenPkg(i)}
                  className={`block w-full text-center py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                    pkg.popular
                      ? "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25 border border-primary-foreground/20"
                      : "bg-secondary text-foreground hover:bg-muted border border-border"
                  }`}
                >
                  Meer info
                </button>
                <a
                  href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20wil%20graag%20een%20afspraak%20inplannen."
                  target="_blank"
                  className={`block text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    pkg.popular 
                      ? "bg-primary-foreground text-primary hover:shadow-lg hover:-translate-y-0.5" 
                      : "bg-primary text-primary-foreground hover:shadow-md hover:-translate-y-0.5"
                  }`}
                >
                  Kies dit pakket
                </a>
              </div>
            </div>
          ))}
        </div>

        <div ref={ref2} className={`reveal ${v2 ? "visible" : ""} max-w-3xl mx-auto grid sm:grid-cols-2 gap-6`}>
          <div className="bg-secondary rounded-2xl p-7 border border-border">
            <h4 className="font-serif text-lg text-foreground mb-4">Vervolgconsulten</h4>
              <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-light">Standaard (30 min)</span>
                <span className="text-foreground font-semibold">€45,00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-light">Kort (15 min)</span>
                <span className="text-foreground font-semibold">€22,50</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-2xl p-7 border border-border">
            <h4 className="font-serif text-lg text-foreground mb-4">Vergoeding</h4>
            <p className="text-muted-foreground text-sm leading-relaxed font-light">
              3 uur per kalenderjaar vergoed vanuit de basisverzekering. Zonder verwijzing mogelijk dankzij DTD.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed font-light mt-2 italic">
              Let op: het eigen risico is van toepassing. Check altijd je eigen polis.
            </p>
          </div>
        </div>
      </div>

      {/* Package detail dialogs */}
      {packages.map((pkg, i) => (
        <Dialog key={i} open={openPkg === i} onOpenChange={(open) => !open && setOpenPkg(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-xl font-serif">
                <span className="text-2xl">{pkg.icon}</span>
                {pkg.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground leading-relaxed pt-3 text-sm">
                {pkg.detail}
              </DialogDescription>
            </DialogHeader>
            <div className="border-t border-border pt-4 mt-2">
              <h4 className="text-sm font-semibold text-foreground mb-3">Wat zit erin:</h4>
              <ul className="space-y-2 mb-5">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary text-xs mt-0.5">✓</span>
                    <span className="font-light">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20wil%20graag%20een%20afspraak%20inplannen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Kies dit pakket
              </a>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default Pricing;
