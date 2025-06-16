import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ServicePage from "../../components/ServicePage";
import Loader from "../../components/Loader";

const API_URL = "https://blessed-connection-657913a5dc.strapiapp.com";

const Service = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const url = `${API_URL}/api/services?filters[slug][$eq]=${slug}&populate[imageHero]=true&populate[images]=true&populate[servicesSimilaires][populate]=imageHero`;

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`Erreur HTTP : ${res.status}`);
        }

        const data = await res.json();

        if (data.data.length === 0) {
          setError("Service non trouvé");
          return;
        }

        const serviceData = data.data[0];

        const similar = serviceData.servicesSimilaires?.map((s) => ({
          id: s.id,
          name: s.name,
          imageHero: s.imageHero?.url,
          shortDescription:
            s.description?.slice(0, 100) + "..." || "",
        })) || [];

        const formattedService = {
          name: serviceData.name,
          imageHero: serviceData.imageHero.url,
          images: serviceData.images?.map(
            (img) => img.url
          ) || [],
          description: serviceData.description,
          sessionDetails: serviceData.sessionDetails,
          benefits: serviceData.benefits,
          sessionsAvailable: serviceData.sessionsAvailable,
          duration: serviceData.duration,
          price: serviceData.price,
          servicesSimilaires: similar,
        };

        setService(formattedService);
        setError(null);
      } catch (err) {
        console.error("Erreur API : ", err);
        setError("Erreur lors du chargement");
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) return <Loader />;

  if (error) return <p>{error}</p>;
  if (!service) return null;

  return <ServicePage {...service} />;
};

export default Service;
