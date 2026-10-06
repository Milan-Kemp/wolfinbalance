import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Check, Clock, HeartHandshake, ShieldCheck, ArrowRight } from "lucide-react";

const Bedankt = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Bedankt · Wolf in Balance";

    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);

    const desc = document.createElement("meta");
    desc.name = "description";
    desc.content = "Bedankt voor je bericht. Ik neem binnen 24 uur persoonlijk contact met je op.";
    document.head.appendChild(desc);

    return () => {
      document.title = prevTitle;
      document.head.removeChild(meta);
      document.head.removeChild(desc);
    };
  }, []);

  const verwachtingen = [
    {
      icon: Clock,
      title: "Binnen 24 uur",
      text: "Persoonlijk contact op werkdagen",
    },
    {
      icon: HeartHandshake,
      title: "Vrijblijvend",
      text: "Eerst kennismaken, daarna kies jij",
    },
    {
      icon: ShieldCheck,
      title: "Vergoed",
      text: "Eerste 3 uur via je basisverzekering",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar forceScrolled />

      <main className="flex-1 pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-3xl text-center">
          {/* Check icon */}
          <div
            className="mx-auto w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-in zoom-in-50 fade-in duration-700"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center">
              <Check className="w-7 h-7 md:w-8 md:h-8 text-primary-foreground" strokeWidth={3} />
            </div>
          </div>

          <span className="inline-block text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-3">
            Bericht ontvangen
          </span>

          <h1 className="text-3xl md:text-5xl font-serif text-foreground mb-5 leading-tight">
            Bedankt voor je bericht!
          </h1>

          <p className="text-muted-foreground text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            Je hebt zojuist een mooie eerste stap gezet richting meer energie, balans en een gezonder leven.
            Ik neem binnen 24 uur (op werkdagen) persoonlijk contact met je op om samen te kijken hoe ik je het beste kan helpen.
          </p>

          {/* Verwachtingen */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
            {verwachtingen.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="bg-card rounded-2xl border border-border p-5 text-left"
                  style={{ boxShadow: "var(--card-shadow)" }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-xs text-muted-foreground font-light leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-xl text-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Terug naar home
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/praktijk"
              className="inline-flex items-center gap-2 border border-border bg-background text-foreground font-medium px-6 py-2.5 rounded-xl text-sm hover:bg-accent/5 transition-all duration-300"
            >
              Bekijk de praktijk
            </Link>
          </div>

          {/* Direct contact */}
          <div className="pt-6 border-t border-border/60 max-w-md mx-auto">
            <p className="text-xs text-muted-foreground/70 font-light mb-2 uppercase tracking-wider">
              Liever direct contact?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-1 text-sm">
              <a href="tel:+31629996628" className="text-foreground hover:text-primary transition-colors font-light">
                📞 06-29996628
              </a>
              <a href="mailto:info@wolfinbalance.nl" className="text-foreground hover:text-primary transition-colors font-light">
                ✉️ info@wolfinbalance.nl
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bedankt;
