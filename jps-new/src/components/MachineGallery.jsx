import React from 'react';
import { motion } from 'framer-motion';

// Dynamically import all images from the machines assets folder
const machineImages = import.meta.glob('/src/assets/machines/*.{png,jpg,jpeg,svg,webp}', { eager: true });

const MachineGallery = () => {
    // Convert the object of modules to an array of URLs
    const images = Object.values(machineImages).map((mod) => mod.default);

    if (images.length === 0) {
        return (
            <div className="text-center py-10 border border-white/10 rounded-lg bg-white/5">
                <p className="text-gray-400">Add machine photos to <code className="text-primary">src/assets/machines</code> to see them here.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {images.map((src, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="aspect-video bg-gray-800 rounded-lg overflow-hidden border border-white/10 group relative"
                >
                    <img
                        src={src}
                        alt={`Machine ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                    <div className="absolute bottom-4 left-4">
                        <span className="text-white font-heading font-bold uppercase tracking-wider text-sm border-l-2 border-primary pl-2">
                            Infrastructure View {index + 1}
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default MachineGallery;
