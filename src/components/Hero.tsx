import heroAsset from "@/assets/rowan-hero-new.jpg";
import heroCutout from "@/assets/rowan-mobile-hero-sept-2026.png";



const Hero = () => {
  const benefits = [
    "Persoonlijk advies",
    ["Haalbare", "veranderingen"],
    "Duurzaam resultaat",
  ];

  return (
    <section className="relative min-h-[680px] md:min-h-[calc(100vh-var(--social-proof-height,88px))] 2xl:min-h-0 flex flex-col bg-[#143D16] md:bg-white overflow-hidden pt-16 md:pt-[4.5rem]">
      {/* Mobile layout */}
      <div className="md:hidden grid grid-cols-2 min-h-[680px] pl-6 overflow-hidden items-start">
        {/* Left content */}
        <div className="pt-4 pb-10 md:py-14 md:pb-16 hero-stagger-1 relative z-10">
          <span className="block text-white/80 text-xs uppercase tracking-[2px] font-medium mb-3">
            DIËTISTENPRAKTIJK
          </span>

          <h1 className="text-[40px] md:text-[56px] font-bold leading-[0.95] text-white mb-3">
            <span className="block whitespace-nowrap">Krijg grip op</span>
            <span className="text-[#8cc48c] whitespace-nowrap">je voeding.</span>
          </h1>

          <p className="text-[14px] md:text-[17px] italic text-white/85 leading-snug mb-4 md:max-w-md">
            Werk stap voor stap naar een gezondere versie van jezelf.
          </p>

          <div className="flex flex-col gap-1.5 mb-4">
            {benefits.map((label) => (
              <div key={Array.isArray(label) ? label[0] : label} className="flex items-start gap-3 text-[15px] leading-tight text-white/90">
                <span className="text-[#8cc48c] font-bold mt-0.5">✓</span>
                <span className={Array.isArray(label) ? "" : "whitespace-nowrap"}>
                  {Array.isArray(label) ? (
                    <>
                      {label[0]}<br />{label[1]}
                    </>
                  ) : (
                    label
                  )}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20wil%20graag%20een%20afspraak%20inplannen."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-14 md:h-16 w-[170px] md:w-[210px] md:text-lg bg-[#8cc48c] text-white font-semibold rounded-full text-base hover:shadow-lg transition-all duration-300"
            >
              Afspraak maken
            </a>
            <a
              href="#tarieven"
              className="inline-flex items-center justify-center h-14 md:h-16 w-[170px] md:w-[210px] md:text-lg border border-white/50 text-white font-medium rounded-full text-base hover:bg-white/10 transition-all duration-300"
            >
              Bekijk tarieven →
            </a>
          </div>
        </div>

        {/* Right portrait — smaller and aligned with stat boxes */}
        <div className="self-start mt-12 md:mt-14 h-[560px] md:h-[600px] w-full hero-stagger-2 relative z-0">
          <img
            src={heroCutout}
            alt="Diëtist Rowan Wolf - Wolf in Balance"
            className="absolute top-0 left-[-128px] md:left-[-120px] h-full w-auto max-w-none drop-shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
          />
        </div>
      </div>

      {/* Desktop + tablet layout */}
      <div className="hidden md:flex flex-1 w-full relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] h-full w-full items-center">
          {/* Text content */}
          <div className="flex items-center justify-center px-6 lg:px-12 py-10 lg:py-12 2xl:py-20">
            <div className="max-w-xl w-full hero-stagger-1">

              <span className="inline-block text-[#254e17] font-bold tracking-[0.2em] text-[10px] uppercase mb-4 2xl:text-xs 2xl:mb-6">
                DIËTISTENPRAKTIJK
              </span>

              <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-serif text-[#254e17] mb-5 leading-tight 2xl:mb-6">
                Krijg grip op{" "}
                <em className="not-italic text-[#254e17]/80">je voeding.</em>
              </h1>

              <p className="text-sm italic text-[#254e17]/70 font-light mb-8 leading-relaxed 2xl:text-base 2xl:mb-10">
                Werk stap voor stap naar een gezondere versie van jezelf.
              </p>

              <p className="text-[#254e17]/50 text-sm italic mb-8 max-w-md leading-relaxed 2xl:text-base 2xl:mb-10">
                "Mijn missie is om mensen te helpen naar een gezondere en fittere versie van zichzelf, met een aanpak die écht bij je past."
              </p>

              <div className="flex flex-row gap-4 mb-10 2xl:gap-5 2xl:mb-12">
                <a
                  href="https://wa.me/31629996628?text=Hoi%20Rowan,%20ik%20wil%20graag%20een%20afspraak%20inplannen."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2.5 bg-[#254e17] text-white font-semibold px-7 py-3.5 rounded-full hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 text-sm 2xl:px-8 2xl:py-4 2xl:text-base whitespace-nowrap"
                >
                  <svg className="w-4 h-4 2xl:w-5 2xl:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Afspraak maken
                </a>
                <a
                  href="#tarieven"
                  className="inline-flex justify-center items-center gap-2 border border-[#254e17]/20 text-[#254e17] font-medium px-7 py-3.5 rounded-full hover:bg-[#254e17]/5 hover:border-[#254e17]/30 transition-all duration-300 text-sm 2xl:px-8 2xl:py-4 2xl:text-base"
                >
                  Bekijk tarieven →
                </a>
              </div>

              <div className="flex items-center gap-8 2xl:gap-10">
              {[
                  { icon: "user", label: "Persoonlijk\nadvies" },
                  { icon: "check", label: "Haalbare\nveranderingen" },
                  { icon: "star", label: "Duurzaam\nresultaat" },
                ].map((b) => (
                  <div key={b.label} className="flex items-center gap-3 text-[#254e17]/80 2xl:gap-4">
                    <div className="w-10 h-10 rounded-full border border-[#254e17]/15 flex items-center justify-center text-[#254e17] 2xl:w-12 2xl:h-12">
                      {b.icon === "user" && (
                        <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      )}
                      {b.icon === "check" && (
                        <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      {b.icon === "star" && (
                        <svg className="w-5 h-5 2xl:w-6 2xl:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm font-medium leading-tight max-w-[100px] whitespace-pre-line 2xl:text-base 2xl:max-w-[120px]">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop + tablet photo */}
          <div className="flex items-center justify-center h-full w-full px-4 lg:px-8">
            <div
              className="relative h-[440px] md:h-[460px] lg:h-[440px] xl:h-[420px] 2xl:h-[520px] aspect-[5/6] max-w-[90%] overflow-hidden hero-stagger-2"
              style={{ borderRadius: "45% 0 0 40%" }}
            >
              <img
                src={heroAsset}
                alt="Diëtist Rowan Wolf - Persoonlijke voedingsbegeleiding bij Wolf in Balance"
                className="absolute inset-0 w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>
        </div>
      </div>


    </section>

  );
};

export default Hero;
