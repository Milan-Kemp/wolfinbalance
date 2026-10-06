import { useRef, useState, useEffect, useCallback } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const GOOGLE_MAPS_URL = "https://www.google.com/maps/place/Wolf+in+Balance/@52.5024213,5.0773331,17z/data=!3m1!4b1!4m6!3m5!1s0x47c605cce12ad463:0xf1a06101d60a9479!8m2!3d52.5024213!4d5.0773331!16s%2Fg%2F11ynylxk3t!18m1!1e1";

const reviews = [
  {
    name: "Thijs Heineman",
    text: "Ik ben in februari begonnen bij Rowan met als doel om droog te trainen, in 5 maanden tijd hebben we al mooie resultaten gehaald! Rowan is een fijne diëtist die met je meedenkt en een plan opstelt die ook echt bij je past.",
    rating: 5,
    timeAgo: "5 dagen geleden",
  },
  {
    name: "__D.I.0N__",
    text: "Ik ben zeer tevreden over de deskundigheid van Rowan, hij stelt zijn adviezen geheel af op mijn doelen wat tevens goed te combineren valt met het dagelijks leven, zo ben ik in een tijdsbestek van een aantal maanden precies op het punt gekomen waar ik naartoe wilde gaan!",
    rating: 5,
    timeAgo: "1 week geleden",
  },
  {
    name: "Ryan Saltani",
    text: "Top begeleiding gehad van Rowan!",
    rating: 5,
    timeAgo: "3 maanden geleden",
  },
  {
    name: "Cas Casiano",
    text: "Begin januari een traject gevolgd bij Rowan om spiermassa aan te komen. Ik bleef stagneren voor een aantal jaar en zag weinig progressie en toen via de website bij Rowan beland. Nu ben ik al 3 maanden lang bezig en inmiddels al 2 kg netto spiermassa aangekomen. Naast voeding maakte hij mij ook erg bewust van mijn slaapritme waarin ik het nut ervan lang tijd had onderschat. Rowan was mijn stok achter de deur en heeft me al erg ver op weg geholpen, nog niet waar ik wil zijn maar we zijn al goed op weg, zeker een aanrader!!",
    rating: 5,
    timeAgo: "4 maanden geleden",
  },
  {
    name: "Milan Kemp",
    text: "Ik bezocht Rowan met het doel gezonder te leren eten, en dat is zeker gelukt. Hij luistert goed en heeft advies gegeven dat echt bij mij past. Dankzij zijn begeleiding heb ik een gezonder eetpatroon opgebouwd dat ik ook echt volhoud. Absolute aanrader!",
    rating: 5,
    timeAgo: "4 maanden geleden",
  },
  {
    name: "K",
    text: "Wat een fantastische service! Zeer goed advies gekregen waar ik zelf nog nooit eerder over na had gedacht. Bedankt Rowan!",
    rating: 5,
    timeAgo: "4 maanden geleden",
  },
  {
    name: "David Langenberg",
    text: "Deskundig advies gekregen waar ik écht mee verder kon. Top!",
    rating: 4,
    timeAgo: "4 maanden geleden",
  },
  {
    name: "Emma Seijbel",
    text: "Ik ben zeer deskundig geholpen door Rowan. Er was een fijne sfeer en ik voelde mij op mijn gemak.",
    rating: 5,
    timeAgo: "6 maanden geleden",
  },
  {
    name: "Thijs Neggers",
    text: "Goed geholpen door Rowan, fijn gesprek gehad en veel inzicht gekregen in mijn eigen voeding. Ik kan het iedereen aanraden!",
    rating: 5,
    timeAgo: "5 maanden geleden",
  },
  {
    name: "Kristel van Overeem",
    text: "Rowan is een prettige en deskundige diëtist. Dank je wel voor de goede en fijne begeleiding 🙏",
    rating: 5,
    timeAgo: "5 maanden geleden",
  },
  {
    name: "Noussair gh",
    text: "Hele fijne ervaring bij Wolf in Balance met Rowan Wolf als diëtist! Rowan neemt echt de tijd om te luisteren en geeft duidelijke, persoonlijke adviezen die precies aansluiten op jouw leefstijl. Zijn enthousiaste en professionele aanpak motiveert om gezonder te leven zonder dat het ingewikkeld wordt. Echt een aanrader voor iedereen die op een positieve manier met voeding en gezondheid bezig wil zijn!",
    rating: 5,
    timeAgo: "5 maanden geleden",
  },
];

const GoogleIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        className={`w-3.5 h-3.5 ${i < count ? "text-yellow-400" : "text-muted"}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const Reviews = () => {
  const { ref, isVisible } = useScrollReveal();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const isMobile = useIsMobile();
  const autoScrollRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pauseTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const startAutoScroll = useCallback(() => {
    if (isMobile) return;
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(() => {
      const el = scrollRef.current;
      if (!el) return;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: 340, behavior: "smooth" });
      }
    }, 4000);
  }, [isMobile]);

  const pauseAutoScroll = useCallback((resumeDelay = 8000) => {
    if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    autoScrollRef.current = null;
    if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => startAutoScroll(), resumeDelay);
  }, [startAutoScroll]);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) el.addEventListener("scroll", checkScroll, { passive: true });
    return () => el?.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
      if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
    };
  }, [startAutoScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = dir === "left" ? -340 : 340;
    el.scrollBy({ left: amount, behavior: "smooth" });
    pauseAutoScroll();
  };

  return (
    <section className="py-10 md:py-16 bg-secondary overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-10`}>
          <span className="inline-block text-xs font-semibold text-primary tracking-[0.25em] uppercase mb-3">
            Ervaringen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Wat cliënten zeggen
          </h2>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <GoogleIcon />
            <Stars count={5} />
            <span className="text-muted-foreground text-sm font-light">
              4.9 op Google
            </span>
          </a>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => !isMobile && pauseAutoScroll(99999999)}
        onMouseLeave={() => !isMobile && startAutoScroll()}
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-secondary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-secondary to-transparent z-10 pointer-events-none" />

        {/* Arrow buttons */}
        <button
          onClick={() => scroll("left")}
          className={`absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-label="Vorige"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={() => scroll("right")}
          className={`absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center shadow-md transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          aria-label="Volgende"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>

        {/* Scrollable reviews */}
        <div
          ref={scrollRef}
          className={`flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide ${isMobile ? "px-[calc(50vw-140px)]" : "px-12"}`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {reviews.map((review, i) => (
            <div key={i} className={`flex-shrink-0 w-[280px] md:w-[340px] ${isMobile ? "snap-center" : "snap-start"}`}>
              <div className="bg-card rounded-2xl border border-border p-5 md:p-6 h-full hover:border-primary/20 hover:-translate-y-1 transition-all duration-300" style={{ boxShadow: "var(--card-shadow)" }}>
                <div className="flex items-center justify-between mb-3">
                  <Stars count={review.rating} />
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                  >
                    <GoogleIcon />
                    <span className="text-[10px] font-medium text-muted-foreground">{review.timeAgo}</span>
                  </a>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-4 line-clamp-4">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <span className="text-foreground text-sm font-medium block leading-tight">{review.name}</span>
                    <span className="text-muted-foreground text-[10px]">Google Review</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll indicator dots */}
        <div className="flex justify-center gap-1.5 mt-4">
          {reviews.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/20" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
