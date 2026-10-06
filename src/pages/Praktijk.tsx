import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import officeImg from "@/assets/praktijk-office.jpg";
import bodymeterImg from "@/assets/praktijk-bodymeter.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Praktijk = () => {
  const { ref: ref1, isVisible: v1 } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-3xl">
          <span className="inline-block text-sm font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            De praktijk
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-tight">
            Welkom bij Wolf in Balance
          </h1>
          <p className="text-muted-foreground text-lg font-light leading-relaxed">
            Een professionele en persoonlijke omgeving waar jouw gezondheid centraal staat. 
            Neem een kijkje in de praktijk.
          </p>
        </div>
      </section>

      {/* Office */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={ref1} className={`reveal ${v1 ? "visible" : ""} grid md:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/[0.04] rounded-[2rem] -rotate-2" />
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow-hover)" }}>
                <img src={officeImg} alt="Praktijkruimte Wolf in Balance" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                De spreekkamer
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-5 font-light">
                In een rustige en moderne omgeving ontvang ik je voor een persoonlijk consult. 
                De praktijk is ingericht om je op je gemak te laten voelen, met aandacht voor 
                sfeer en privacy.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light">
                Tijdens het consult bespreken we jouw doelen, analyseren we je voedingspatroon 
                en stellen we samen een plan op dat past bij jouw leefstijl. Alles in een 
                ontspannen setting zonder haast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body Meter */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div ref={ref2} className={`reveal ${v2 ? "visible" : ""} grid md:grid-cols-2 gap-12 lg:gap-20 items-center`}>
            <div className="md:order-2 relative">
              <div className="absolute -inset-4 bg-accent/[0.06] rounded-[2rem] rotate-2" />
              <div className="relative rounded-2xl overflow-hidden" style={{ boxShadow: "var(--card-shadow-hover)" }}>
                <img src={bodymeterImg} alt="Body Analyse Systeem bij Wolf in Balance" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div className="md:order-1">
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
                Body Analyse Systeem
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-5 font-light">
                Met het professionele Body Analyse Systeem krijgen we in enkele seconden een 
                compleet beeld van jouw lichaamssamenstelling, van vetpercentage en spiermassa 
                tot vochtbalans.
              </p>
              <p className="text-muted-foreground leading-relaxed font-light mb-6">
                Deze meting vormt de basis voor een gericht en persoonlijk voedingsadvies. 
                Zo werken we niet op gevoel, maar op data. Bij elk volgend consult meten we 
                opnieuw, zodat je jouw voortgang concreet kunt zien.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { label: "Vetpercentage", icon: "📊" },
                  { label: "Spiermassa", icon: "💪" },
                  { label: "Vochtbalans", icon: "💧" },
                  { label: "Visceraal vet", icon: "🎯" },
                  { label: "En nog veel meer", icon: "✨" },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-4 border border-border text-center">
                    <span className="text-xl block mb-1">{item.icon}</span>
                    <span className="text-sm text-foreground font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center max-w-2xl">
          <h2 className="text-3xl font-serif text-foreground mb-4">Benieuwd naar jouw resultaten?</h2>
          <p className="text-muted-foreground font-light mb-8">
            Plan een afspraak en ontdek wat het Body Analyse Systeem over jouw lichaam vertelt.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            Afspraak maken
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Praktijk;
