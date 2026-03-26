// pages/services/[slug].jsx
import { useRouter } from "next/router";
import { services } from "../../Data/servicesData";
import ServicePage from "../../components/ServicePage";

export default function Page() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Chargement…</p>;

  const service = services.find((s) => s.slug === slug);
  if (!service) return <p>Service non trouvé</p>;

  const servicesSimilaires = services
    .filter((s) => s.slug !== slug)
    .map((s) => ({
      name: s.name,
      imageHero: s.imageHero,
      shortDescription: s.description.slice(0, 100) + "..."
    }));

  // Passe-les directement dans le service
  const serviceWithSimilaires = { ...service, servicesSimilaires };

  console.log("Service trouvé : ", serviceWithSimilaires);
  return <ServicePage service={serviceWithSimilaires} />;
}