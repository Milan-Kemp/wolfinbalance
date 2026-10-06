import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);

    // Set proper document title (voorkomt dat Google "404" indexeert)
    const previousTitle = document.title;
    document.title = "Pagina niet gevonden | Wolf in Balance";

    // Voeg noindex meta tag toe zodat Google deze pagina niet indexeert
    const robotsMeta = document.createElement("meta");
    robotsMeta.name = "robots";
    robotsMeta.content = "noindex, follow";
    document.head.appendChild(robotsMeta);

    const googlebotMeta = document.createElement("meta");
    googlebotMeta.name = "googlebot";
    googlebotMeta.content = "noindex, follow";
    document.head.appendChild(googlebotMeta);

    // Verwijder canonical zodat Google deze URL niet als canoniek ziet
    const existingCanonical = document.querySelector('link[rel="canonical"]');
    const canonicalHref = existingCanonical?.getAttribute("href") ?? null;
    if (existingCanonical) existingCanonical.remove();

    // Signaleer 404 status via prerender header (voor prerender services)
    const prerenderStatus = document.createElement("meta");
    prerenderStatus.name = "prerender-status-code";
    prerenderStatus.content = "404";
    document.head.appendChild(prerenderStatus);

    return () => {
      document.title = previousTitle;
      robotsMeta.remove();
      googlebotMeta.remove();
      prerenderStatus.remove();
      if (existingCanonical && canonicalHref) {
        const restored = document.createElement("link");
        restored.rel = "canonical";
        restored.href = canonicalHref;
        document.head.appendChild(restored);
      }
    };
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center px-6">
        <h1 className="mb-4 text-4xl font-bold">Pagina niet gevonden</h1>
        <p className="mb-6 text-xl text-muted-foreground">
          Deze pagina bestaat niet (meer). Geen zorgen, we helpen je verder.
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          Terug naar de homepagina
        </a>
      </div>
    </div>
  );
};

export default NotFound;
