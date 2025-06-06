import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message envoyé:", formData);
        setSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="min-h-screen max-w-3xl mx-auto px-4 py-12 animate-fadeIn">
            <h1 className="text-4xl font-bold text-brand-primary mb-10 text-center font-playfair">
                Contactez-nous
            </h1>

            {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded text-center animate-fadeInUp">
                    Merci pour votre message, nous vous répondrons rapidement !
                </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                    <label htmlFor="name" className="block mb-2 font-medium text-brand-text">
                        Nom
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="w-full px-4 py-2 border border-brand-accent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2 font-medium text-brand-text">
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="exemple@mail.com"
                        className="w-full px-4 py-2 border border-brand-accent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-brand-text">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message ici..."
                        className="w-full px-4 py-2 border border-brand-accent rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    />
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-brand-primary text-brand-heading px-8 py-3 rounded-md hover:bg-brand-primary/90 transition font-semibold"
                    >
                        Envoyer
                    </button>
                </div>
            </form>
        </div>
    );
}
