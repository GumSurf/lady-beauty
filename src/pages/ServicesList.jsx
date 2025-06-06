import { motion } from "framer-motion";

const activities = [
    {
        title: "Winner Filler",
        description: "Technique innovante pour repulper et hydrater intensément la peau.",
    },
    {
        title: "Microneedling / Dermapen / Soin hydrofacial",
        description: "Stimule le renouvellement cellulaire, traite les imperfections et affine le grain de peau.",
    },
    {
        title: "Microblading",
        description: "Sourcils redessinés poil par poil pour un résultat naturel longue durée.",
    },
    {
        title: "Lipocavitation Anticellulite",
        description: "Traitement ciblé contre la cellulite pour une peau plus lisse et tonifiée.",
    },
    {
        title: "Plasma Pen",
        description: "Soin non-invasif pour traiter rides, relâchement cutané et cicatrices.",
    },
    {
        title: "Ventouse Therapy",
        description: "Méthode ancestrale pour relancer la circulation et détendre les muscles.",
    },
];

const ServicesList = () => {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">
            <h2 className="text-4xl font-bold text-center text-brand-primary mb-12">
                Nos Activités
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {activities.map((activity, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="p-6 bg-brand-background rounded-xl shadow-md border border-brand-accent"
                    >
                        <h3 className="text-2xl font-semibold text-brand-primary mb-2">
                            {activity.title}
                        </h3>
                        <p className="text-brand-text">{activity.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicesList;
