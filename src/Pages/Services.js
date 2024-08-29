// src/pages/Services.js
import React from 'react';
import './Services.css';

function Services() {
    const services = [
        {
            title: "Web Development",
            description: "We offer cutting-edge web development services tailored to your business needs.",
            icon: "🌐",
        },
        {
            title: "Graphic Design",
            description: "Creative and impactful graphic design services to make your brand stand out.",
            icon: "🎨",
        },
        {
            title: "SEO Optimization",
            description: "Improve your website’s visibility with our expert SEO optimization services.",
            icon: "📈",
        },
        // Add more services as needed
    ];

    return (
        <div className="services-container">
            <h1 className="services-title">My Services</h1>
            <div className="services-grid">
                {services.map((service, index) => (
                    <div key={index} className="service-card">
                        <div className="service-icon">{service.icon}</div>
                        <h2 className="service-title">{service.title}</h2>
                        <p className="service-description">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
