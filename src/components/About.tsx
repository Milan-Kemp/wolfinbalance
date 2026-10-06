import { useState, useEffect, useCallback, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import platoImg from "@/assets/partner-plato.jpg";
import fitteImg from "@/assets/partner-fitte.jpg";
import goedlichaamImg from "@/assets/partner-goedlichaam-clean.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const specialisaties = [
  {
    icon: "⚖️",
    title: "Afvallen & aankomen",
    desc: "Duurzaam op gewicht komen met een persoonlijk plan.",
    detail:
      "Of je nu wilt afvallen of juist aankomen, samen stellen we een plan op dat past bij jouw lichaam en leefstijl. Geen crashdiëten, maar een duurzame aanpak met aandacht voor jouw energiebehoefte, eetgewoontes en doelen. Stap voor stap werken we naar een gezond en haalbaar gewicht.",
  },
  {
    icon: "🏋️",
    title: "Sportvoeding",
    desc: "Optimale voeding voor prestatie en herstel.",
    detail:
      "Als sporter wil je het maximale uit je training halen. Met een op maat gemaakt voedingsplan afgestemd op jouw sport, trainingsschema en wedstrijddagen optimaliseren we je prestaties en herstel. Van macroverdeling tot timing, alles wordt tot in detail uitgewerkt.",
  },
  {
    icon: "🩺",
    title: "Medische voeding",
    desc: "Voedingsadvies bij diabetes, PDS en meer.",
    detail:
      "Bij medische aandoeningen zoals diabetes, PDS, coeliakie of nierziekten is de juiste voeding essentieel. Als diëtist werk ik samen met jouw arts of specialist om een voedingsplan op te stellen dat aansluit bij jouw diagnose en behandeling. Evidence-based en persoonlijk.",
  },
  {
    icon: "🌱",
    title: "Leefstijl coaching",
    desc: "Gezonde gewoontes die écht blijven.",
    detail:
      "Gezond eten begint bij gezonde gewoontes. Samen kijken we naar je dagritme, stressniveau, slaap en beweging. We werken aan kleine, haalbare veranderingen die op de lange termijn het verschil maken. Geen tijdelijke oplossingen, maar blijvende resultaten.",
  },
];

const partners = [
  { name: "Sport- en Gezondheidscentrum Plato", logo: platoImg },
  { name: "De Fitte Medewerker", logo: fitteImg },
  { name: "GoedLichaam", logo: goedlichaamImg },
];

const partnersSet = [...partners, ...partners, ...partners, ...partners];
const partnersMarquee = [...partnersSet, ...partnersSet];

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

const About = () => {
  const { ref: ref1, isVisible: v1 } = useScrollReveal();
  const { ref: ref2, isVisible: v2 } = useScrollReveal();
  const { ref: ref4, isVisible: v4 } = useScrollReveal();
  const [openSpec, setOpenSpec] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const playerRef = useRef<any>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile === undefined) return;
    if (playerRef.current) return;

    const targetId = "about-yt-player";

    const initPlayer = () => {
      const el = document.getElementById(targetId);
      if (!el) return;
      new window.YT.Player(targetId, {
        videoId: "aTYCFXjER7c",
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: "aTYCFXjER7c",
          controls: 1,
          showinfo: 0,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onReady: (e: any) => {
            playerRef.current = e.target;
            e.target.mute();
            e.target.playVideo();
          },
        },
      });
    };

    const timer = setTimeout(() => {
      if (window.YT && window.YT.Player) {
        initPlayer();
      } else {
        if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          document.head.appendChild(tag);
        }
        window.onYouTubeIframeAPIReady = initPlayer;
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [isMobile]);

  const toggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p || typeof p.isMuted !== "function") return;
    if (p.isMuted()) {
      p.unMute();
      setIsMuted(false);
    } else {
      p.mute();
      setIsMuted(true);
    }
  }, []);

  return (
    <section className="py-14 md:py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Herken je dit + Specialisaties */}
        <div ref={ref4} className={`reveal ${v4 ? "visible" : ""} grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16`}>
          <div className="bg-secondary rounded-2xl p-7 border border-border">
            <h3 className="text-lg font-serif text-foreground mb-5">Herken je dit?</h3>
            <ul className="space-y-3">
              {[
                { main: "Je hebt weinig energie", sub: "Altijd diezelfde middagdip rond 16:00u" },
                { main: "Je valt af en komt aan", sub: "Je boekt resultaat op de korte termijn, maar vasthouden is lastig" },
                { main: "Je begint elke week opnieuw", sub: "Bij elke terugval geef je op en heb je een schuldgevoel" },
                { main: "Je weet wat (on)gezond is", sub: "maar er ontbreekt structuur" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center text-[10px] font-bold mt-0.5">✓</span>
                  <div>
                    <span className="font-medium text-foreground">{item.main}</span>
                    {item.sub && <span className="block text-xs text-muted-foreground font-light mt-0.5">{item.sub}</span>}
                  </div>
                </li>
              ))}
            </ul>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 mt-5 w-full text-center"
            >
              Plan je gratis intake →
            </a>
          </div>

          <div className="flex flex-col gap-3">
            {specialisaties.map((s, i) => (
              <button
                key={i}
                onClick={() => setOpenSpec(i)}
                className={`reveal-delay-${i + 1} bg-card rounded-xl p-5 border border-border hover:border-primary/20 hover:-translate-y-0.5 transition-all duration-300 group flex items-center gap-4 text-left cursor-pointer`}
                style={{ boxShadow: "var(--card-shadow)" }}
              >
                <div className="text-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">{s.icon}</div>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground text-sm mb-0.5">{s.title}</h4>
                  <p className="text-muted-foreground text-xs font-light leading-relaxed">{s.desc}</p>
                </div>
                <span className="text-muted-foreground/40 group-hover:text-primary transition-colors text-lg flex-shrink-0">→</span>
              </button>
            ))}
          </div>
        </div>

        {/* Intro */}
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div ref={ref1} className={`reveal ${v1 ? "visible" : ""}`}>
            <span className="inline-block text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">
              Over de praktijk
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-6 leading-tight">
              Wie is Rowan?
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-4 font-light">
              Mijn naam is <strong className="text-foreground font-semibold">Rowan Wolf</strong>, diëtist en eigenaar van Wolf in Balance. 
              Tijdens mijn begeleiding kijk ik verder dan alleen voeding: als diëtist stem ik persoonlijk voedingsadvies af 
              met doelen die we samen opstellen.
            </p>
            <p className="text-muted-foreground leading-relaxed text-sm mb-8 font-light">
              Ik geloof in mogelijkheden, niet in beperkingen, en help je stap voor stap naar een gezonde balans.
              Met een achtergrond in sportvoeding en klinische diëtetiek help ik een breed scala aan cliënten.
            </p>

            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10 flex items-start gap-3">
              <span className="text-xl flex-shrink-0">💡</span>
              <p className="text-foreground text-sm leading-relaxed font-light">
                Wist je dat de eerste 3 uur bij de diëtist <strong className="font-semibold">vergoed</strong> worden door de basisverzekering?
              </p>
            </div>
          </div>

          <div ref={ref2} className={`reveal-right ${v2 ? "visible" : ""}`}>
            <div className="relative w-full max-w-[320px] mx-auto aspect-[9/16] rounded-2xl overflow-hidden shadow-xl">
              <div id="about-yt-player" className="w-full h-full" />
              <button
                onClick={toggleMute}
                className="absolute bottom-3 right-3 z-10 bg-black/60 backdrop-blur-sm text-white rounded-full p-3 hover:bg-black/80 transition-colors"
                aria-label={isMuted ? "Geluid aan" : "Geluid uit"}
              >
                {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Specialisatie dialogs */}
      {specialisaties.map((s, i) => (
        <Dialog key={i} open={openSpec === i} onOpenChange={(open) => !open && setOpenSpec(null)}>
          <DialogContent className="sm:max-w-lg">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3 text-xl font-serif">
                <span className="text-2xl">{s.icon}</span>
                {s.title}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground leading-relaxed pt-3 text-sm">
                {s.detail}
              </DialogDescription>
            </DialogHeader>
            <div className="pt-2">
              <a
                href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20wil%20graag%20een%20afspraak%20inplannen."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
              >
                Afspraak maken
              </a>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </section>
  );
};

export default About;
