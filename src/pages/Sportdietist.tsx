import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import sportImg from "@/assets/sport-bg-generated.jpg.asset.json";
import rowanSportImg from "@/assets/rowan-sportdietist.png.asset.json";
import { Dumbbell, Bike, Swords, Volleyball, Medal, Sparkles } from "lucide-react";
import { useEffect } from "react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const helpAreas = [
  {
    title: "Spiermassa opbouwen",
    items: [
      "Voedingsschema op maat voor spiermassa",
      "Eiwitinname en eiwitverdeling over de dag",
      "Herstelmaaltijden: wanneer en wat innemen",
      "Vetmassa verlagen terwijl spiermassa behouden/blijft groeien",
    ],
  },
  {
    title: "Wedstrijdgewicht halen",
    items: [
      "Verantwoord afvallen zonder prestaties te verminderen",
      "Gewicht halen voor wedstrijden/competities",
      "Veilige herstelstrategie na de weging",
      "Tijdpad en voeding rondom de weegdag",
    ],
  },
  {
    title: "Voeding bij blessures",
    items: [
      "Ondersteunen van herstel",
      "Beperken van spierverlies",
      "Terugkeer naar sport",
      "Praktische voedingsadviezen bij blessure",
    ],
  },
  {
    title: "Prestatieverbetering",
    items: [
      "Trainingsvoeding",
      "Wedstrijdvoeding",
      "Hydratatie",
      "Supplementadvies",
    ],
  },
];

const audiences = [
  { title: "Krachttraining", icon: Dumbbell, items: ["Bulken", "Cutten"] },
  { title: "Duursporten", icon: Bike, items: ["Hardlopen", "Triatlon", "Wielersport"] },
  { title: "Vechtsporten", icon: Swords, items: ["(Kick)boksen", "MMA", "Judo", "BJJ", "Worstelen", "Taekwondo", "en nog veel meer"] },
  { title: "Balsporten", icon: Volleyball, items: ["Voetbal", "Handbal", "Volleybal", "etc."] },
  { title: "Atletiek", icon: Medal, items: ["Hordelopen", "Hoogspringen", "Verspringen", "Kogelstoten", "Speerwerpen", "etc."] },
  { title: "Turnen", icon: Sparkles, items: ["Brug", "Balk", "Ringen", "etc."] },
];

const benefits = [
  "Harder trainen",
  "Sneller herstellen",
  "Blessures beter ondersteunen",
  "Meer spiermassa opbouwen",
  "Op gewicht komen of afvallen",
  "Op topniveau presteren",
];

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
};

const Sportdietist = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-20 md:pt-24 pb-16">
        <div className="absolute inset-0">
          <img src={sportImg.url} alt="" className="w-full h-full object-cover object-[70%_center] opacity-70" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(100deg, hsl(var(--primary)) 0%, hsl(var(--primary) / 0.95) 40%, hsl(var(--primary) / 0.7) 75%, hsl(var(--primary) / 0.5) 100%)" }} />
        </div>

        <div className="relative container mx-auto px-6 lg:px-12 max-w-6xl">
          <Section>
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/25 rounded-full px-4 py-1.5 mb-6">
              <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-[0.7rem] font-bold text-primary-foreground tracking-[0.2em] uppercase">
                SCAS&#8209;geregistreerd sportdiëtist
              </span>
            </div>

            <h1 className="font-serif text-primary-foreground text-4xl md:text-7xl leading-[1.02] mb-6 max-w-3xl">
              Sportvoeding voor <em className="not-italic text-primary-foreground/80">maximale prestaties.</em>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl font-light max-w-xl leading-relaxed mb-8">
              Haal meer uit je training, wedstrijd en herstel. Voeding is meer dan gezond eten, het is jouw brandstof.
            </p>

            <h2 className="font-serif text-primary-foreground text-xl md:text-2xl mb-4 max-w-xl">
              Waar kan een sportdietist bij helpen?
            </h2>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 max-w-xl mb-8">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-2.5 text-primary-foreground/85 text-sm md:text-base">
                  <svg className="w-4 h-4 text-primary-foreground/70 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20ben%20sporter%20en%20wil%20graag%20een%20afspraak%20inplannen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-primary-foreground text-primary font-semibold px-7 py-3.5 rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Plan een kennismaking
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </Section>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <Section>
            <div className="mb-8 md:mb-12">
              <h2 className="text-primary text-3xl md:text-4xl font-bold tracking-[0.25em] uppercase leading-tight">
                Eerst even voorstellen
              </h2>
            </div>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
              <div className="max-w-2xl">
                <p className="text-muted-foreground font-light leading-relaxed text-base md:text-lg mb-4">
                  Ik ben Rowan Wolf, <strong className="text-primary font-semibold">SCAS-geregistreerd sportdiëtist</strong> en het gezicht achter Wolf in Balance.
                </p>
                <p className="text-muted-foreground font-light leading-relaxed">
                  Met een passie voor sport en voeding help ik zowel recreatieve als wedstrijdsporters hun doelen te bereiken. Ik heb een speciale affiniteit met vechtsport, (voet)bal en krachtsport, maar er is ruime ervaring met sporters uit vrijwel alle disciplines.
                </p>
              </div>
              <img
                src={rowanSportImg.url}
                alt="Rowan Wolf, sportdiëtist bij Wolf in Balance"
                className="w-full md:w-80 lg:w-96 rounded-2xl object-cover object-top aspect-[4/5]"
              />
            </div>
          </Section>
        </div>
      </section>

      {/* Help areas */}
      <section className="py-16 md:py-24" style={{ background: "var(--hero-gradient)" }}>
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <Section className="text-center mb-12">
            <span className="text-xs font-bold text-primary-foreground/60 tracking-[0.25em] uppercase mb-3 block">
              Waar ik je mee help
            </span>
            <h2 className="font-serif text-primary-foreground text-3xl md:text-5xl leading-tight">
              Vier vlakken, één <em className="not-italic text-primary-foreground/70">aanpak.</em>
            </h2>
          </Section>

          <div className="grid md:grid-cols-2 gap-5">
            {helpAreas.map((area, i) => (
              <Section key={area.title}>
                <div className="bg-primary-foreground/[0.06] backdrop-blur-sm border border-primary-foreground/15 rounded-2xl p-7 md:p-8 h-full hover:border-primary-foreground/30 hover:bg-primary-foreground/[0.09] transition-all">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-full bg-primary-foreground/15 flex items-center justify-center text-primary-foreground font-bold text-sm">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-serif text-primary-foreground text-xl md:text-2xl">{area.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {area.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-primary-foreground/75 text-sm">
                        <span className="text-primary-foreground/50 mt-1.5">·</span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </Section>
            ))}
          </div>
        </div>
      </section>

      {/* For who */}
      <section className="py-16 md:py-24 bg-secondary/40">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <Section className="mb-12 md:mb-16">
            <h2 className="font-serif text-foreground text-4xl md:text-5xl lg:text-6xl leading-tight">
              Voor wie is <em className="not-italic text-primary/80">sportdiëtetiek?</em>
            </h2>
            <div className="h-1 w-24 bg-primary mt-6 md:mt-8" />
          </Section>
          <Section>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
              {audiences.map((a, i) => {
                const Icon = a.icon;
                return (
                  <div
                    key={a.title}
                    className="group relative h-full flex flex-col bg-card rounded-2xl border border-border shadow-sm p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 overflow-hidden"
                  >
                    <span className="absolute top-4 right-5 font-serif text-5xl text-primary/10 leading-none select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-foreground text-xl md:text-2xl">{a.title}</h3>
                    <div className="h-px bg-border my-4" />
                    <ul className="space-y-2">
                      {a.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-foreground/70 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </Section>
        </div>
      </section>



      {/* CTA */}
      <section className="pb-20 md:pb-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Section>
            <div className="relative rounded-3xl overflow-hidden p-10 md:p-14 text-center" style={{ background: "var(--hero-gradient)" }}>
              <h2 className="font-serif text-primary-foreground text-3xl md:text-4xl mb-4 leading-tight">
                Klaar om meer uit je sport te halen?
              </h2>
              <p className="text-primary-foreground/75 font-light mb-8 max-w-xl mx-auto">
                Voeding kan het verschil maken tussen nét niet en je beste prestatie. Samen maken we een plan dat past bij jouw sport, doelen en leven.
              </p>
              <a
                href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20ben%20sporter%20en%20wil%20graag%20een%20afspraak%20inplannen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-foreground text-primary font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                Afspraak maken
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </Section>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Sportdietist;
