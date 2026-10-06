import platoImg from "@/assets/partner-plato.jpg";
import fitteImg from "@/assets/partner-fitte.jpg";
import goedlichaamImg from "@/assets/partner-goedlichaam-clean.png";

const partners = [
  { name: "Sport- en Gezondheidscentrum Plato", logo: platoImg },
  { name: "De Fitte Medewerker", logo: fitteImg },
  { name: "GoedLichaam", logo: goedlichaamImg },
];

const PartnerLogos = () => {
  // Double the set for seamless infinite loop (animation moves -50%)
  const set = [...partners, ...partners, ...partners, ...partners];
  const items = [...set, ...set];

  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container mx-auto px-6 mb-10">
        <p className="text-sm font-semibold text-muted-foreground text-center tracking-[0.2em] uppercase">
          Samenwerkingspartners
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee" style={{ width: "fit-content" }}>
          {items.map((partner, i) => (
            <div key={i} className="flex-shrink-0 mx-5 md:mx-8">
              <div className="bg-card border-2 border-primary rounded-2xl p-6 md:p-8 flex items-center justify-center w-[220px] md:w-[280px] h-[110px] md:h-[140px]">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-[60px] md:h-[80px] w-[140px] md:w-[180px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
