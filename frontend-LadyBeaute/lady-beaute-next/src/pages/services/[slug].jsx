import React from "react";
import ServicePage from "../../components/ServicePage";

const API_URL = "https://blessed-connection-657913a5dc.strapiapp.com";

export async function getStaticPaths() {
  // Récupère tous les slugs des services pour pré-générer les pages statiques
  const res = await fetch(`${API_URL}/api/services`);
  const data = await res.json();

  const paths = data.data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return {
    paths,
    fallback: "blocking", // Génération à la demande pour les nouveaux services
  };
}

export async function getStaticProps({ params }) {
  // Récupère les données détaillées du service correspondant au slug
  const res = await fetch(
    `${API_URL}/api/services?filters[slug][$eq]=${params.slug}&populate=imageHero,images,servicesSimilaires.imageHero`
  );
  const data = await res.json();

  if (!data.data.length) {
    return { notFound: true }; // 404 si service non trouvé
  }

  const serviceData = data.data[0].attributes;

  // Prépare les services similaires pour le composant
  const servicesSimilaires = (serviceData.servicesSimilaires || []).map((s) => ({
    id: s.id,
    name: s.name,
    imageHero: s.imageHero?.data?.attributes?.url || "",
    shortDescription: s.description?.slice(0, 100) + "..." || "",
  }));

  // Prépare le tableau d'images (URLs)
  const images = (serviceData.images?.data || []).map((img) => img.attributes.url);

  return {
    props: {
      name: serviceData.name,
      imageHero: serviceData.imageHero?.data?.attributes?.url || "",
      images,
      description: serviceData.description,
      sessionDetails: serviceData.sessionDetails,
      benefits: serviceData.benefits || [],
      sessionsAvailable: serviceData.sessionsAvailable,
      duration: serviceData.duration,
      price: serviceData.price,
      servicesSimilaires,
    },
    revalidate: 60, // ISR : mise à jour toutes les 60 secondes max
  };
}

export default function Service({ ...props }) {
  return <ServicePage {...props} />;
}
