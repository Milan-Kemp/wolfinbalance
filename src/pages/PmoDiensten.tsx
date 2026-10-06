import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logoImg from "@/assets/logo.jpg";
import rowanImg from "@/assets/rowan-pmo.png";
import kidsHero from "@/assets/kids-workshop-hero.jpeg";
import kidsAction from "@/assets/kids-workshop-action.jpeg";
import kidsPresenting from "@/assets/kids-workshop-presenting.jpeg";
import kidsTable from "@/assets/kids-workshop-table.jpeg";

const steps = [
  {
    num: 1,
    title: "Meten en inventariseren",
    items: [
      "Metingen zoals bloeddruk, cholesterol en glucose",
      "Vragenlijst over leefstijl, werkdruk en energie",
    ],
  },
  {
    num: 2,
    title: "Persoonlijk inzicht",
    items: [
      "Duidelijke terugkoppeling per medewerker",
      "Persoonlijk gezondheidsprofiel & aandachtspunten",
    ],
  },
  {
    num: 3,
    title: "Van inzicht naar actie!",
    items: [
      "Praktische adviezen en leefstijlcoaching",
      "Optioneel vervolgtraject voor duurzame verandering",
    ],
  },
];


const PmoDiensten = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{ background: "var(--hero-gradient)" }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-foreground/[0.03] rounded-full -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-foreground/[0.03] rounded-full translate-y-1/3 -translate-x-1/3" />
        </div>
        <div className="container mx-auto px-6 lg:px-12 text-center relative z-10">
          <span className="inline-block text-primary-foreground/50 text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Voor bedrijven &amp; organisaties
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-primary-foreground mb-6 leading-tight">
            PMO &amp; Workshops
          </h1>
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed font-light">
            Investeer in de gezondheid van je medewerkers met een Preventief Medisch
            Onderzoek of een interactieve workshop op locatie.
          </p>
        </div>
      </section>

      {/* Kids Workshop Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-2 block">
              Voor kinderen
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-5 leading-tight">
              Workshops gezonde voeding voor kinderen
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed mb-4">
              Gezonde voeding hoeft niet ingewikkeld of saai te zijn. Tijdens de
              workshops van Wolf in Balance ontdekken kinderen op een speelse manier
              wat hun lichaam nodig heeft, waarom water drinken belangrijk is en hoe
              leuk kleurrijk eten kan zijn.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
              De workshop is interactief, laagdrempelig en afgestemd op jonge
              kinderen. Niet door te vertellen wat "goed" of "fout" is, maar door
              samen te ontdekken, proeven, bewegen en vragen te stellen.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-16" style={{ boxShadow: "var(--card-shadow)" }}>
            <img
              src={kidsHero}
              alt="Rowan geeft workshop gezonde voeding aan kinderen"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-5 leading-tight">
              Wat doen we tijdens de workshop?
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-4">
              Tijdens de workshop nemen kinderen deel aan een speelse ontdekkingsreis
              rondom gezonde voeding. Ze gaan actief aan de slag, gebruiken hun
              zintuigen en leren op een laagdrempelige manier meer over eten en
              drinken.
            </p>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              De workshop bestaat uit verschillende interactieve onderdelen waarin
              kinderen ontdekken dat gezonde keuzes niet ingewikkeld of saai hoeven
              te zijn. Er is ruimte om te kijken, ruiken, proeven, kiezen, vergelijken
              en vragen te stellen.
            </p>

            <div className="bg-secondary rounded-2xl border border-border p-6 md:p-8">
              <p className="text-foreground font-medium mb-4">
                Op een positieve manier leren kinderen onder andere:
              </p>
              <ul className="space-y-2.5">
                {[
                  "waarom water drinken belangrijk is",
                  "hoe je bewuster kunt kijken naar wat je eet en drinkt",
                  "waarom variatie op je bord belangrijk is",
                  "hoe kleuren, smaken en producten kunnen helpen om voeding leuker te maken",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="text-muted-foreground font-light flex items-start gap-3"
                  >
                    <span className="text-primary mt-1.5 text-lg leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground font-light leading-relaxed mt-6 italic text-sm">
                Alles gebeurt spelenderwijs, zonder nadruk op "goed" of "fout". Het
                doel is vooral dat kinderen nieuwsgierig worden, plezier ervaren en
                met een positief gevoel naar gezonde voeding kijken.
              </p>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden mb-16 max-w-2xl mx-auto" style={{ boxShadow: "var(--card-shadow)" }}>
            <img
              src={kidsAction}
              alt="Rowan schenkt drinken in tijdens kinderworkshop"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-5 leading-tight">
              Voor wie is de workshop geschikt?
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-8">
              De workshop is geschikt voor kinderen van ongeveer 4 t/m 12 jaar en kan
              worden gegeven op kinderopvanglocaties, BSO's, scholen of andere
              locaties.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { label: "Duur", value: "45 tot 75 minuten" },
                { label: "Groepsgrootte", value: "± 12 kinderen per groep" },
                { label: "Inclusief", value: "Materialen, proeverij en flyer met challenge voor thuis" },
              ].map((info, i) => (
                <div
                  key={i}
                  className="bg-card rounded-2xl border border-border p-6"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <span className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-2 block">
                    {info.label}
                  </span>
                  <p className="text-foreground font-light leading-relaxed">
                    {info.value}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground font-light leading-relaxed text-sm italic">
              Bij grotere groepen is het mogelijk om meerdere workshops of rondes te
              plannen.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-5 leading-tight">
              Challenge voor thuis
            </h3>
            <p className="text-muted-foreground font-light leading-relaxed">
              Na afloop krijgen de kinderen een flyer mee naar huis. Hierop staat een
              kleine challenge, zodat ze thuis verder kunnen praten over wat ze
              hebben geleerd. Zo wordt gezonde voeding niet alleen iets van de
              workshop, maar ook een gesprek aan de keukentafel.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden mb-16 max-w-2xl mx-auto" style={{ boxShadow: "var(--card-shadow)" }}>
            <img
              src={kidsTable}
              alt="Rowan tijdens kinderworkshop gezonde voeding"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="bg-secondary rounded-3xl p-10 md:p-14 border border-border text-center">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Workshop aanvragen
            </h3>
            <p className="text-muted-foreground font-light mb-8 max-w-xl mx-auto leading-relaxed">
              Wil je een speelse en leerzame workshop gezonde voeding organiseren op
              jouw opvang, school of locatie? Neem gerust contact op. Ik denk graag
              mee over een passende invulling.
            </p>
            <a
              href="/contact"
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

      {/* Divider */}
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="h-px bg-border" />
      </div>

      {/* PMO Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: text + image */}
            <div>
              <span className="text-xs font-semibold text-primary tracking-[0.15em] uppercase mb-2 block">
                Preventief Medisch Onderzoek
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-tight">
                Een PMO of Health Check
              </h2>
              <p className="text-muted-foreground leading-relaxed font-light mb-5">
                Hoge bloeddruk, diabetes of een te hoog cholesterol sluipen er vaak in
                zonder dat je iets merkt. Met een Preventief Medisch Onderzoek (PMO)
                breng je de gezondheid van je medewerkers tijdig in kaart en voorkom je
                problemen voordat ze ontstaan.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light mb-8">
                Een{" "}
                <a
                  href="https://defittemedewerker.nl/pmo-op-locatie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-accent transition-colors"
                >
                  PMO op locatie
                </a>{" "}
                is niet alleen een investering in vitalere medewerkers met minder
                verzuim, maar ook een kans om een gezondere bedrijfscultuur te
                stimuleren.
              </p>
              <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
                <img
                  src={rowanImg}
                  alt="Rowan Wolf in Balance PMO"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Right: steps */}
            <div className="space-y-6 lg:pt-16">
              <h3 className="text-xl font-serif text-foreground italic mb-8">
                Zo werkt een PMO bij jullie op locatie
              </h3>
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="bg-card rounded-2xl border border-border p-6"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {step.title}
                      </h4>
                      <ul className="space-y-1.5">
                        {step.items.map((item, i) => (
                          <li
                            key={i}
                            className="text-muted-foreground font-light flex items-start gap-2"
                          >
                            <span className="text-primary mt-1">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-secondary rounded-2xl border border-border p-6 mt-4">
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  Op het gebied van PMO's en Health Checks hebben Wolf in Balance en{" "}
                  <a
                    href="https://defittemedewerker.nl/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline underline-offset-2 hover:text-accent transition-colors"
                  >
                    De Fitte Medewerker
                  </a>{" "}
                  hun krachten gebundeld.
                </p>
                <p className="text-muted-foreground text-xs font-light mt-3 italic">
                  Volgens de Arbowet (
                  <a
                    href="https://wetten.overheid.nl/BWBR0010346/2025-07-01/#Hoofdstuk4_Artikel18"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    artikel 18
                  </a>
                  ) ben je als werkgever verplicht om periodiek een PMO aan te bieden aan
                  werknemers.
                </p>
              </div>

              <a
                href="https://defittemedewerker.nl/contact/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-semibold px-7 py-3.5 rounded-xl hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 mt-2"
              >
                Plan een PMO of Health Check
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          <div className="bg-secondary rounded-3xl p-10 md:p-14 border border-border">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Genoeg gelezen? Kom in actie!
            </h2>
            <p className="text-muted-foreground font-light mb-8 max-w-lg mx-auto">
              Neem contact op voor een PMO, Health Check of workshop op maat voor
              jouw organisatie.
            </p>
            <a
              href="/contact"
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

export default PmoDiensten;
