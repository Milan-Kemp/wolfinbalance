import logoInterpolis from "@/assets/insurers/interpolis.png";
import logoVgz from "@/assets/insurers/vgz.png";
import logoAsr from "@/assets/insurers/asr.png";
import logoZilverenKruis from "@/assets/insurers/zilverenkruis.png";
import logoPzp from "@/assets/insurers/pzp.svg";
import logoAchmea from "@/assets/insurers/achmea.svg";
import logoOhra from "@/assets/insurers/ohra.png";
import logoOnvz from "@/assets/insurers/onvz.png";
import logoDsw from "@/assets/insurers/dsw.webp";
import logoZekur from "@/assets/insurers/zekur.png";
import logoVinkvink from "@/assets/insurers/vinkvink.jpg";
import logoMenzis from "@/assets/insurers/menzis.png";
import logoFbto from "@/assets/insurers/fbto.jfif";
import logoZiezo from "@/assets/insurers/ziezo.png";
import logoAnderzorg from "@/assets/insurers/anderzorg.png";
import logoCz from "@/assets/insurers/cz.svg";
import logoNn from "@/assets/insurers/nn.png";
import logoUnive from "@/assets/insurers/unive.png";
import logoVgzBewust from "@/assets/insurers/vgzbewust.png";

type Verzekeraar = { name: string; logo: string };

const zorgverzekeraars: Verzekeraar[] = [
  { name: "Achmea", logo: logoAchmea },
  { name: "Zilveren Kruis", logo: logoZilverenKruis },
  { name: "Interpolis", logo: logoInterpolis },
  { name: "FBTO", logo: logoFbto },
  { name: "ZieZo", logo: logoZiezo },
  { name: "CZ", logo: logoCz },
  { name: "OHRA", logo: logoOhra },
  { name: "Nationale Nederlanden", logo: logoNn },
  { name: "PZP", logo: logoPzp },
  { name: "VGZ", logo: logoVgz },
  { name: "Unive", logo: logoUnive },
  { name: "ZEKUR", logo: logoZekur },
  { name: "VGZBewust", logo: logoVgzBewust },
  { name: "Menzis", logo: logoMenzis },
  { name: "Anderzorg", logo: logoAnderzorg },
  { name: "VinkVink", logo: logoVinkvink },
  { name: "A.s.r", logo: logoAsr },
  { name: "DSW", logo: logoDsw },
  { name: "ONVZ", logo: logoOnvz },
];

const InsurersMarquee = () => {
  const items = [...zorgverzekeraars, ...zorgverzekeraars];

  return (
    <section className="relative z-10 -mt-16 md:-mt-20 pt-20 pb-16 bg-background overflow-hidden lg:mt-0 lg:py-16">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-sm font-semibold text-primary text-center tracking-[0.2em] uppercase">
          Vergoeding mogelijk via o.a.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee" style={{ width: "fit-content" }}>
          {items.map((v, i) => (
            <div key={`${v.name}-${i}`} className="flex-shrink-0 mx-3 md:mx-4">
              <div className="bg-card border-2 border-primary rounded-2xl px-8 md:px-10 flex items-center justify-center w-[200px] md:w-[260px] h-[100px] md:h-[130px] shadow-sm">
                <img
                  src={v.logo}
                  alt={`${v.name} logo`}
                  className="max-h-[60px] md:max-h-[80px] w-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsurersMarquee;
