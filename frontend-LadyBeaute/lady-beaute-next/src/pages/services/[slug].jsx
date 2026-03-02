// pages/services/[slug].jsx
import ServicePage from "../../components/ServicePage";

const API_URL = "https://blessed-connection-657913a5dc.strapiapp.com";

// Récupère tous les slugs pour pré-générer les pages
export async function getStaticPaths() {
  const res = await fetch(`${API_URL}/api/services`);
  const data = await res.json();

  const paths = data.data.map((service) => ({
    params: { slug: service.slug },
  }));

  return {
    paths,
    fallback: "blocking", // Génère à la volée si le slug n’existe pas encore
  };
}

// Récupère les données pour un slug donné
export async function getStaticProps({ params }) {
  const { slug } = params;

const url = `${API_URL}/api/services?filters[slug][$eq]=${slug}&populate[imageHero]=true&populate[images]=true&populate[servicesSimilaires][populate]=imageHero&populate[faq]=true`;

  const res = await fetch(url);
  const data = await res.json();

  if (!data.data || data.data.length === 0) {
    return { notFound: true };
  }

  const serviceData = data.data[0];

  const similar =
    serviceData.servicesSimilaires?.map((s) => ({
      id: s.id,
      name: s.name,
      imageHero: s.imageHeroPath || "",
      shortDescription: s.description?.slice(0, 100) + "..." || "",
    })) || [];

const formattedService = {
  name: serviceData.name,
  imageHero: serviceData.imageHeroPath || "",
  images: serviceData.imagesPath || [],
  description: serviceData.description,
  sessionDetails: serviceData.sessionDetails,
  benefits: serviceData.benefits,
  sessionsAvailable: serviceData.sessionsAvailable,
  duration: serviceData.duration,
  price: serviceData.price,
  servicesSimilaires: similar,
  faq: serviceData.faq || [],
};

  return {
    props: { service: formattedService },
    revalidate: 60, // régénère toutes les 60s
  };
}

export default function Service({ service }) {
  return <ServicePage {...service} />;
}
