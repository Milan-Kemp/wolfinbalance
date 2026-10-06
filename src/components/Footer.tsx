import { useState } from "react";
import logoImg from "@/assets/logo-wib-white.png";
import kpImg from "@/assets/kp-beeldmerk.png";
import vsenLogo from "@/assets/vsen-logo.png.asset.json";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type LegalDoc = "klachten" | "privacy" | "voorwaarden" | null;

const Footer = () => {
  const [openDoc, setOpenDoc] = useState<LegalDoc>(null);

  return (
    <footer className="bg-foreground">
      {/* Map */}
      <div className="w-full h-[300px] bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.5!2d5.0714!3d52.4953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6097a7c9a0001%3A0x1!2sMonseigneur+C.+Veermanlaan+6%2C+1131+KH+Volendam!5e0!3m2!1snl!2snl!4v1"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen
          loading="eager"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locatie Wolf in Balance"
          className="w-full h-full"
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <img src={logoImg} alt="Wolf in Balance" className="h-10 w-auto mb-4 rounded-lg opacity-90" />
            <p className="text-background/50 text-sm font-light">Diëtistenpraktijk</p>
            <p className="text-background/30 text-xs mt-1 font-light">Jouw gezondheid, onze missie.</p>
          </div>
          <div>
            <h4 className="text-background font-semibold mb-4 text-[10px] tracking-[0.2em] uppercase">Contact</h4>
            <div className="space-y-2">
              <p className="text-background/50 text-sm font-light">📞 06-29996628</p>
              <p className="text-background/50 text-sm font-light">✉️ info@wolfinbalance.nl</p>
              <p className="text-background/50 text-sm font-light">📍 Monseigneur C. Veermanlaan 6</p>
              <p className="text-background/35 text-xs font-light pl-6">1131 KH Volendam</p>
            </div>
          </div>
          <div>
            <h4 className="text-background font-semibold mb-4 text-[10px] tracking-[0.2em] uppercase">Links</h4>
            <div className="space-y-2">
              <a href="/partners" className="text-background/50 hover:text-background text-sm block transition-colors font-light">Partners</a>
              <a href="/contact" className="text-background/50 hover:text-background text-sm block transition-colors font-light">Contact</a>
              <a href="https://www.instagram.com/wolfinbalance/" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background text-sm block transition-colors font-light">Instagram</a>
              <a href="https://wa.me/31629996628" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background text-sm block transition-colors font-light">WhatsApp</a>
              <button onClick={() => setOpenDoc("klachten")} className="text-background/50 hover:text-background text-sm block transition-colors font-light text-left w-full py-3 md:py-1 cursor-pointer touch-manipulation relative z-10">Klachtenregeling</button>
              <button onClick={() => setOpenDoc("privacy")} className="text-background/50 hover:text-background text-sm block transition-colors font-light text-left w-full py-3 md:py-1 cursor-pointer touch-manipulation relative z-10">Privacyverklaring</button>
              <button onClick={() => setOpenDoc("voorwaarden")} className="text-background/50 hover:text-background text-sm block transition-colors font-light text-left w-full py-3 md:py-1 cursor-pointer touch-manipulation relative z-10">Algemene Voorwaarden</button>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 mt-10 pt-5 flex flex-col items-start gap-6">
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-2">
              <img src={kpImg} alt="Kwaliteitsregister Paramedici" className="h-10 w-auto opacity-70" />
              <span className="text-background/30 text-[10px] font-light">Geregistreerd in het<br/>Kwaliteitsregister Paramedici</span>
            </div>
            <a
              href="https://sportdietetiek.nl/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vereniging Sportvoedings Experts Nederland"
              className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity"
            >
              <img src={vsenLogo.url} alt="Vereniging Sportvoedings Experts Nederland" className="h-12 w-auto" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-background/10 w-full">
          <p className="text-background/20 text-xs font-light text-center md:text-left">© 2026 Wolf in Balance – Diëtistenpraktijk. Alle rechten voorbehouden.</p>
        </div>
      </div>

      {/* Single Dialog for all legal documents */}
      <Dialog open={openDoc !== null} onOpenChange={(o) => !o && setOpenDoc(null)}>
        <DialogContent className="w-[85vw] max-w-2xl max-h-[80vh] overflow-y-auto p-4 sm:p-6 rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              {openDoc === "klachten" && "Klachtenregeling"}
              {openDoc === "privacy" && "Privacyverklaring"}
              {openDoc === "voorwaarden" && "Algemene Voorwaarden"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              {openDoc === "klachten" && "Klachtenregeling van Wolf in Balance"}
              {openDoc === "privacy" && "Privacyverklaring van Wolf in Balance"}
              {openDoc === "voorwaarden" && "Algemene voorwaarden van Wolf in Balance"}
            </DialogDescription>
          </DialogHeader>
          <div className="text-muted-foreground space-y-4 text-sm leading-relaxed">
            {openDoc === "klachten" && (
              <>
                <p>Wolf in Balance streeft naar het leveren van kwalitatief hoogwaardige en persoonlijke zorg. Het kan echter voorkomen dat een cliënt niet tevreden is over de dienstverlening. In dat geval wordt het op prijs gesteld dat de cliënt dit kenbaar maakt, zodat er samen naar een passende oplossing gezocht kan worden.</p>
                <p>Wanneer een cliënt een klacht heeft, wordt verzocht om eerst contact op te nemen met de diëtist. In veel gevallen kan een klacht in onderling overleg worden besproken en opgelost. Indien dit niet leidt tot een bevredigende oplossing, heeft de cliënt de mogelijkheid om de klacht formeel in te dienen.</p>
                <p>Wolf in Balance is aangesloten bij het Klachtenloket Paramedici. Dit is een onafhankelijke organisatie die ondersteuning biedt bij het indienen en behandelen van klachten binnen de paramedische zorg. De cliënt kan zich tot dit loket wenden voor advies, bemiddeling of het indienen van een klacht.</p>
                <p>Indien de klacht niet naar tevredenheid wordt opgelost via bemiddeling, kan deze worden voorgelegd aan de geschillencommissie. Deze commissie beoordeelt de klacht onafhankelijk en doet een bindende uitspraak.</p>
                <p>Meer informatie over de procedure is te vinden via het Klachtenloket Paramedici. De diëtist conformeert zich aan de geldende wet- en regelgeving, waaronder de Wet kwaliteit, klachten en geschillen zorg (Wkkgz).</p>
              </>
            )}
            {openDoc === "privacy" && (
              <>
                <p>Wolf in Balance hecht grote waarde aan de bescherming van persoonsgegevens en verwerkt deze in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</p>
                <h3 className="text-foreground font-semibold text-base pt-2">1. Verantwoordelijke</h3>
                <p>Wolf in Balance is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze verklaring.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">2. Verwerkte persoonsgegevens</h3>
                <p>Wolf in Balance verwerkt persoonsgegevens doordat de cliënt gebruik maakt van de dienstverlening en/of deze gegevens zelf verstrekt. Het kan hierbij gaan om:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Voor- en achternaam</li>
                  <li>Adresgegevens</li>
                  <li>Telefoonnummer</li>
                  <li>E-mailadres</li>
                  <li>Gezondheidsgegevens (indien relevant voor dieetadvies)</li>
                  <li>Overige persoonsgegevens die actief worden verstrekt</li>
                </ul>
                <h3 className="text-foreground font-semibold text-base pt-2">3. Doeleinden en grondslagen</h3>
                <p>Persoonsgegevens worden verwerkt voor de volgende doeleinden:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Het uitvoeren van de overeenkomst</li>
                  <li>Het kunnen bieden van passende begeleiding</li>
                  <li>Het onderhouden van contact</li>
                  <li>Het informeren over wijzigingen in diensten</li>
                </ul>
                <p>De verwerking is gebaseerd op toestemming van de cliënt, uitvoering van de overeenkomst en/of wettelijke verplichtingen.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">4. Bewaartermijn</h3>
                <p>Persoonsgegevens worden niet langer bewaard dan noodzakelijk voor het doel waarvoor zij zijn verzameld, met inachtneming van wettelijke bewaartermijnen. In de meeste gevallen geldt een maximale bewaartermijn van 5 jaar.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">5. Delen van persoonsgegevens</h3>
                <p>Persoonsgegevens worden niet verkocht aan derden. Gegevens worden uitsluitend gedeeld indien dit noodzakelijk is voor de uitvoering van de overeenkomst of om te voldoen aan een wettelijke verplichting.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">6. Beveiliging</h3>
                <p>Wolf in Balance neemt passende technische en organisatorische maatregelen om persoonsgegevens te beschermen tegen verlies, misbruik en onbevoegde toegang.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">7. Rechten van betrokkenen</h3>
                <p>De cliënt heeft het recht om persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Daarnaast heeft de cliënt het recht om bezwaar te maken tegen verwerking en het recht op gegevensoverdraagbaarheid.</p>
                <p>Verzoeken kunnen worden ingediend via e-mail. Er wordt binnen een redelijke termijn gereageerd.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">8. Cookies</h3>
                <p>Indien van toepassing maakt de website gebruik van functionele en analytische cookies om de werking van de website te verbeteren.</p>
              </>
            )}
            {openDoc === "voorwaarden" && (
              <>
                <p>Deze algemene voorwaarden zijn van toepassing op alle diensten, producten en overeenkomsten van Wolf in Balance, gevestigd en vertegenwoordigd door Rowan Wolf, diëtist. Door gebruik te maken van de diensten van Wolf in Balance verklaart de cliënt zich akkoord met deze voorwaarden.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">1. Definities</h3>
                <p>Onder diëtist wordt verstaan Rowan Wolf, handelend als zelfstandig gevestigd diëtist en bevoegd conform de Wet BIG. Onder cliënt wordt verstaan de natuurlijke persoon die gebruik maakt van de dienstverlening. Onder dieetadvies wordt verstaan voedingsadvies op basis van een medische indicatie. Onder voedingsadvies wordt verstaan advies gericht op algemene gezondheid en leefstijl.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">2. Totstandkoming van de overeenkomst</h3>
                <p>De overeenkomst tussen cliënt en diëtist komt tot stand op het moment dat een afspraak wordt gemaakt, zowel mondeling, telefonisch, digitaal als via de website. Tijdens de intake (op locatie of online) wordt de aard van de dienstverlening vastgesteld.</p>
                <p>De diëtist heeft een inspanningsverplichting en geen resultaatsverplichting. Dit betekent dat de diëtist zich naar beste kunnen inspant om de cliënt te begeleiden, maar geen garantie kan geven op specifieke resultaten.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">3. Uitvoering van de dienstverlening</h3>
                <p>De cliënt is verantwoordelijk voor het volledig en naar waarheid verstrekken van relevante (medische) informatie. Onjuiste of onvolledige informatie kan invloed hebben op de kwaliteit van de begeleiding.</p>
                <p>De diëtist behoudt zich het recht voor om de begeleiding te beëindigen indien er onvoldoende medewerking is van de cliënt of indien de begeleiding naar verwachting niet effectief zal zijn.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">4. Vergoedingen en declaraties</h3>
                <p>Consulten worden gedeclareerd per 15 minuten en omvatten zowel directe als indirecte tijd. Dieetadvies kan (gedeeltelijk) worden vergoed vanuit de basisverzekering, afhankelijk van de polisvoorwaarden van de cliënt.</p>
                <p>Indien geen vergoeding (meer) plaatsvindt via de zorgverzekeraar, ontvangt de cliënt zelf de factuur. De cliënt blijft te allen tijde verantwoordelijk voor betaling, ongeacht vergoeding door de zorgverzekeraar.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">5. Betalingsvoorwaarden</h3>
                <p>Facturen dienen binnen 7 dagen na factuurdatum te worden voldaan. Bij overschrijding van deze termijn is de cliënt automatisch in verzuim zonder nadere ingebrekestelling.</p>
                <p>Vanaf het moment van verzuim is de diëtist gerechtigd wettelijke rente en buitengerechtelijke incassokosten in rekening te brengen. Deze incassokosten bedragen minimaal 15% van het openstaande bedrag met een minimum van €29, tenzij de wet anders bepaalt.</p>
                <p>Alle kosten die voortvloeien uit het incasseren van de vordering komen voor rekening van de cliënt.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">6. Annulering en no-show</h3>
                <p>Afspraken dienen minimaal 24 uur van tevoren (op werkdagen) te worden geannuleerd. Bij te late annulering of het niet verschijnen op de afspraak (no-show) behoudt de diëtist zich het recht voor het consult volledig in rekening te brengen.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">7. Aansprakelijkheid</h3>
                <p>De diëtist is niet aansprakelijk voor schade die voortvloeit uit het opvolgen van adviezen, tenzij er sprake is van opzet of grove nalatigheid.</p>
                <p>De diëtist is evenmin aansprakelijk voor schade als gevolg van onjuiste of onvolledige informatie verstrekt door de cliënt.</p>
                <p>Het gebruik van voedingsschema's, dagmenu's en adviezen geschiedt te allen tijde op eigen verantwoordelijkheid van de cliënt.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">8. Communicatie en elektronische dienstverlening</h3>
                <p>Communicatie kan plaatsvinden via e-mail, telefoon of andere digitale middelen. De diëtist kan niet garanderen dat elektronische communicatie volledig veilig is, maar neemt passende maatregelen om dit te waarborgen.</p>
                <h3 className="text-foreground font-semibold text-base pt-2">9. Toepasselijk recht</h3>
                <p>Op alle overeenkomsten is Nederlands recht van toepassing.</p>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </footer>
  );
};

export default Footer;
