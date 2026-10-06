import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Wordt een consult bij de diëtist vergoed?",
    a: "Ja! De eerste 3 uur diëtetiek per kalenderjaar worden vergoed vanuit de basisverzekering. Afhankelijk van je aanvullende verzekering kun je aanspraak maken op extra uren. Check vooraf je polis of neem contact op, ik help je graag.",
  },
  {
    q: "Heb ik een verwijzing nodig van de huisarts?",
    a: "Nee, sinds 2012 heb je geen verwijzing meer nodig om naar een diëtist te gaan. Je kunt dus rechtstreeks een afspraak maken. Sommige verzekeraars vragen wel een verwijsbrief voor vergoeding. Controleer dit bij je zorgverzekeraar.",
  },
  {
    q: "Hoe ziet een eerste consult eruit?",
    a: "Tijdens het eerste consult (± 60 minuten) bespreken we je eetgewoontes, gezondheidsdoelen en eventuele klachten. Ik neem metingen af en samen stellen we een persoonlijk plan op dat past bij jouw leefstijl.",
  },
  {
    q: "Moet ik een streng dieet volgen?",
    a: "Absoluut niet. Ik geloof niet in strenge diëten. We werken samen aan een voedingspatroon dat bij je past, met ruimte voor alles wat je lekker vindt. Kleine, haalbare aanpassingen zorgen voor blijvend resultaat.",
  },
  {
    q: "Voor wie is diëtetiek geschikt?",
    a: "Diëtetiek is voor iedereen: van sporters die hun prestaties willen verbeteren, tot mensen met overgewicht, diabetes, PDS of andere aandoeningen. Ook als je simpelweg gezonder wilt eten, ben je welkom.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="py-14 md:py-20 bg-secondary">
      <div className="container mx-auto px-6 lg:px-12">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""} text-center mb-16`}>
          <span className="inline-block text-sm font-semibold text-accent tracking-[0.2em] uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground mb-4">
            Veelgestelde vragen
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-light">
            Antwoorden op de meest gestelde vragen over onze praktijk en begeleiding.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card rounded-2xl border border-border px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground font-medium text-sm md:text-base hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed font-light pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
