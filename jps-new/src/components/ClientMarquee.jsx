import React from 'react';
import { motion } from 'framer-motion';

// Dynamically import all images from the clients assets folder
const clientImages = import.meta.glob('/src/assets/clients/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const ClientMarquee = () => {
    // Convert the object of modules to an array of URLs
    const clients = Object.values(clientImages).map((mod) => mod.default);

    // If no clients, show nothing or placeholder
    if (clients.length === 0) {
        return (
            <div className="bg-white py-10 border-b border-gray-100">
                <div className="container mx-auto text-center">
                    <p className="text-gray-400 text-sm uppercase tracking-widest">Global Trusted Partners</p>
                    <div className="h-10"></div> {/* Spacer */}
                </div>
            </div>
        );
    }

    return (
        <section className="bg-white py-12 border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-8 text-center">
                <p className="text-secondary/60 font-bold text-sm uppercase tracking-[0.2em]">Trusted By Industry Leaders</p>
            </div>

            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-white to-transparent"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-white to-transparent"></div>

                {/* Marquee Container */}
                <motion.div
                    className="flex items-center gap-16 whitespace-nowrap"
                    animate={{ x: [0, -1000] }} // Adjust -1000 based on actual width
                    transition={{
                        repeat: Infinity,
                        duration: 30, // Adjust speed
                        ease: "linear"
                    }}
                >
                    {/* Double the list for seamless loop */}
                    {[...clients, ...clients].map((src, index) => (
                        <div key={index} className="flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <img src={src} alt="Client Logo" className="h-12 w-auto object-contain" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ClientMarquee;
