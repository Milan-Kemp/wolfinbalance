import { useState, useEffect } from "react";
import logoImg from "@/assets/logo-wib.png";
import logoWhiteImg from "@/assets/logo-wib-white.png";

const Navbar = ({ forceScrolled = false }: { forceScrolled?: boolean }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(forceScrolled);

  useEffect(() => {
    const handle = () => setScrolled(forceScrolled || window.scrollY > 20);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, [forceScrolled]);

  // Desktop: hero is white, so navbar is always light
  // Mobile: hero is dark, navbar is transparent until scrolled
  const desktopScrolled = true;
  const isScrolled = scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300`}>
      {/* Desktop navbar */}
      <div className="hidden lg:flex bg-background/95 backdrop-blur-xl border-b border-border shadow-sm h-16 md:h-[4.5rem] items-center">
        <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 group">
            <img src={logoImg} alt="Wolf in Balance" className="h-14 w-auto rounded-xl transition-transform duration-300 group-hover:scale-105" />
          </a>
          
          <div className="flex items-center gap-9">
            {[
              { href: "/#over", label: "Over mij" },
              { href: "/#tarieven", label: "Tarieven" },
              { href: "/workshops", label: "Workshops" },
              { href: "/partners", label: "Samenwerkingen" },
              { href: "/sportdietist", label: "Sportdietist" },
            ].map(link => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-muted-foreground hover:text-foreground transition-colors text-sm font-medium after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/contact"
              className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-semibold hover:shadow-md transition-all duration-300 hover:-translate-y-0.5"
            >
              Afspraak maken
            </a>
          </div>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className={`lg:hidden transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}>
        <div className="container mx-auto px-6 flex items-center justify-between h-16 md:h-[4.5rem]">
          <a href="/" className="flex items-center gap-3 group">
            <img src={isScrolled ? logoImg : logoWhiteImg} alt="Wolf in Balance" className="h-12 w-auto rounded-xl transition-transform duration-300 group-hover:scale-105" />
          </a>
          
          <button className={`p-2 -mr-2 transition-colors ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} onClick={() => setOpen(!open)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-background/95 backdrop-blur-xl border-b border-border px-6 py-5 space-y-3">
          <a href="/#over" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">Over mij</a>
          <a href="/#tarieven" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">Tarieven</a>
          <a href="/workshops" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">Workshops</a>
          <a href="/partners" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">Samenwerkingen</a>
          <a href="/sportdietist" onClick={() => setOpen(false)} className="block text-foreground font-medium py-2">Sportdietist</a>
          
          <a href="/contact" onClick={() => setOpen(false)} className="block bg-primary text-primary-foreground px-5 py-3 rounded-xl text-sm font-semibold text-center mt-3">
            Afspraak maken
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
