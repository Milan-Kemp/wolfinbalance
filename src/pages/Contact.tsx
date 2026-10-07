import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import contactImg from "@/assets/rowan-contact.jpg";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  naam: z.string().trim().min(1, "Vul je naam in").max(100),
  email: z.string().trim().email("Vul een geldig e-mailadres in").max(255),
  telefoon: z.string().trim().max(20).optional(),
  onderwerp: z.string().min(1, "Kies een onderwerp"),
  bericht: z.string().trim().min(1, "Vul een bericht in").max(2000),
  vindplaats: z.string().min(1, "Selecteer hoe je bij mij terecht bent gekomen"),
  voorwaarden_akkoord: z.literal(true, { errorMap: () => ({ message: "Je moet akkoord gaan met de Algemene Voorwaarden" }) }),
});

type ContactForm = z.infer<typeof contactSchema>;

const onderwerpen = [
  "Intake / kennismaking",
  "Vervolgconsult",
  "Sportvoeding",
  "Samenwerking",
  "Overig",
];

const vindplaatsOpties = [
  "Via Google",
  "Via social media",
  "Via een bekende",
  "Reclamemateriaal (folder/visitekaart/poster/billboard)",
  "Overig",
];

const inputClass = (hasError: boolean) =>
  `w-full bg-background border ${hasError ? "border-destructive" : "border-border"} rounded-lg px-3.5 py-2.5 text-foreground text-sm placeholder:text-muted-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/15 focus:border-primary/40 transition-all`;

const Contact = () => {
  const { ref: formRef, isVisible: formVisible } = useScrollReveal();
  const { toast } = useToast();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    naam: "",
    email: "",
    telefoon: "",
    onderwerp: "",
    bericht: "",
    vindplaats: "",
    voorwaarden_akkoord: false as boolean,
  });
  const [errors, setErrors] = useState<Partial<Record<string, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot: echte bezoekers zien dit veld niet, bots vullen het wel in.
    const honey = new FormData(e.currentTarget).get("_honey");
    if (honey) {
      navigate("/bedankt");
      return;
    }

    const result = contactSchema.safeParse(form);

    if (!result.success) {
      const fieldErrors: Partial<Record<string, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as string;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("naam", result.data.naam);
      formData.append("email", result.data.email);
      formData.append("telefoon", result.data.telefoon || "");
      formData.append("onderwerp", result.data.onderwerp);
      formData.append("bericht", result.data.bericht);
      formData.append("vindplaats", result.data.vindplaats);
      formData.append("voorwaarden_akkoord", "ja");
      formData.append("_subject", `Nieuw contactformulier: ${result.data.onderwerp}`);
      formData.append("_replyto", result.data.email);
      formData.append("_template", "table");
      formData.append("_captcha", "false");
      formData.append("_honey", "");

      const res = await fetch("https://formsubmit.co/ajax/afspraak@wolfinbalance.nl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });
      const data = await res.json().catch(() => null);
      if (!res.ok || String(data?.success) !== "true") {
        throw new Error(data?.message || `FormSubmit HTTP ${res.status}`);
      }

      setForm({ naam: "", email: "", telefoon: "", onderwerp: "", bericht: "", vindplaats: "", voorwaarden_akkoord: false });
      navigate("/bedankt");
    } catch (err) {
      console.error("Submit error:", err);
      toast({
        title: "Je bericht is niet verstuurd",
        description: "Er ging iets mis bij het versturen. Probeer het later opnieuw, of mail direct naar afspraak@wolfinbalance.nl of stuur een WhatsApp-bericht.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar forceScrolled />

      {/* Compact hero */}
      <section className="pt-28 pb-12 md:pt-32 md:pb-16">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl text-center">
          <span className="inline-block text-xs font-semibold text-accent tracking-[0.2em] uppercase mb-3">
            Contact
          </span>
          <h1 className="text-3xl md:text-4xl font-serif text-foreground mb-3">
            Afspraak maken
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto text-sm font-light leading-relaxed">
            Vul het formulier in en ik neem zo snel mogelijk contact met je op.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-20 md:pb-28">
        <div ref={formRef} className={`reveal ${formVisible ? "visible" : ""} container mx-auto px-6 lg:px-12 max-w-4xl`}>
          <div className="grid lg:grid-cols-[1fr_280px] gap-10 items-start">

            {/* Form card */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8" style={{ boxShadow: "var(--card-shadow)" }}>
              {submitted ? (
                <div className="text-center py-8">
                  <div className="text-4xl mb-4">✅</div>
                  <h2 className="text-xl font-serif text-foreground mb-2">Verstuurd!</h2>
                  <p className="text-muted-foreground text-sm font-light mb-6">
                    Je bericht is succesvol verzonden. Ik neem zo snel mogelijk contact met je op.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="text-primary text-sm font-medium hover:underline">
                    Opnieuw versturen
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="_honey"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="absolute -left-[9999px] h-0 w-0 opacity-0"
                  />
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">Naam *</label>
                      <input type="text" name="naam" value={form.naam} onChange={handleChange} placeholder="Je naam" className={inputClass(!!errors.naam)} />
                      {errors.naam && <p className="text-destructive text-[11px] mt-1">{errors.naam}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">E-mail *</label>
                      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="je@email.nl" className={inputClass(!!errors.email)} />
                      {errors.email && <p className="text-destructive text-[11px] mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">Telefoon</label>
                      <input type="tel" name="telefoon" value={form.telefoon} onChange={handleChange} placeholder="06-12345678" className={inputClass(false)} />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-foreground mb-1.5">Onderwerp *</label>
                      <select name="onderwerp" value={form.onderwerp} onChange={handleChange} className={inputClass(!!errors.onderwerp) + " appearance-none"}>
                        <option value="">Kies onderwerp</option>
                        {onderwerpen.map(o => <option key={o} value={o}>{o}</option>)}
                      </select>
                      {errors.onderwerp && <p className="text-destructive text-[11px] mt-1">{errors.onderwerp}</p>}
                    </div>
                  </div>

                  {/* Vindplaats dropdown */}
                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Hoe ben je bij mij terecht gekomen? *</label>
                    <select name="vindplaats" value={form.vindplaats} onChange={handleChange} className={inputClass(!!errors.vindplaats) + " appearance-none"}>
                      <option value="">Selecteer een optie</option>
                      {vindplaatsOpties.map(o => <option key={o} value={o}>{o}</option>)}
                    </select>
                    {errors.vindplaats && <p className="text-destructive text-[11px] mt-1">{errors.vindplaats}</p>}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-foreground mb-1.5">Bericht *</label>
                    <textarea name="bericht" value={form.bericht} onChange={handleChange} rows={7} placeholder="Waar kan ik je mee helpen?" className={inputClass(!!errors.bericht) + " resize-none"} />
                    {errors.bericht && <p className="text-destructive text-[11px] mt-1">{errors.bericht}</p>}
                  </div>

                  {/* Algemene Voorwaarden */}
                  <div className="pt-1">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={form.voorwaarden_akkoord}
                        onChange={(e) => {
                          setForm(prev => ({ ...prev, voorwaarden_akkoord: e.target.checked }));
                          if (errors.voorwaarden_akkoord) {
                            setErrors(prev => ({ ...prev, voorwaarden_akkoord: undefined }));
                          }
                        }}
                        className="mt-0.5 w-4 h-4 rounded border-border text-primary focus:ring-primary/30 accent-primary"
                      />
                      <span className="text-sm text-foreground font-light leading-snug">
                        Ik ga akkoord met de{" "}
                        <a href="#" onClick={(e) => { e.preventDefault(); /* footer dialog handles this */ }} className="text-primary font-medium hover:underline">
                          Algemene Voorwaarden
                        </a>{" "}
                        *
                      </span>
                    </label>
                    {errors.voorwaarden_akkoord && <p className="text-destructive text-[11px] mt-1 ml-7">{errors.voorwaarden_akkoord}</p>}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <p className="text-muted-foreground text-[11px] font-light hidden sm:block">
                      Je bericht wordt per e-mail verstuurd
                    </p>
                    <button type="submit" disabled={loading} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-2.5 rounded-xl text-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? "Versturen..." : "Versturen"}
                      {!loading && (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden" style={{ boxShadow: "var(--card-shadow)" }}>
                <img src={contactImg} alt="Rowan Wolf" className="w-full aspect-[4/5] object-cover object-top" />
              </div>

              <div className="space-y-2.5 px-1">
                <a href="tel:+31629996628" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  📞 06-29996628
                </a>
                <a href="mailto:info@wolfinbalance.nl" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors font-light">
                  ✉️ info@wolfinbalance.nl
                </a>
                <p className="text-xs text-muted-foreground/70 font-light">
                  📍 Monseigneur C. Veermanlaan 6, Volendam
                </p>
              </div>

              <p className="text-muted-foreground/60 text-[11px] font-light leading-relaxed px-1">
                💡 De eerste 3 uur diëtetiek per jaar worden vergoed door je basisverzekering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
