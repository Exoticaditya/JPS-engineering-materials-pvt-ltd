import React from 'react';
import { Settings, Cog, Wrench, Layers, Factory, Box } from 'lucide-react';

const ProductCategories = () => {
    const categories = [
        {
            title: 'Cast Nylon Products',
            subtitle: 'Gears, Pulleys, Bushes',
            icon: <Cog size={32} />,
            image: 'https://images.unsplash.com/photo-1635398246479-7c4fe8e5a7b3?auto=format&fit=crop&q=80', // Gear/Nylon generic
            description: 'High load-bearing capacity and wear resistance for heavy machinery.'
        },
        {
            title: 'High-Performance PEEK',
            subtitle: 'Thermal Stability',
            icon: <Layers size={32} />,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80', // Tech material
            description: 'Exceptional chemical resistance and high-temperature performance.'
        },
        {
            title: 'POM (Delrin) Parts',
            subtitle: 'Precision Components',
            icon: <Box size={32} />,
            image: 'https://images.unsplash.com/photo-1622675363311-ac97f3a9a6da?auto=format&fit=crop&q=80', // Plastic parts
            description: 'High stiffness, low friction, and excellent dimensional stability.'
        },
        {
            title: 'CNC Machining',
            subtitle: 'Custom Fabrication',
            icon: <Wrench size={32} />,
            image: 'https://images.unsplash.com/photo-1565439303660-318e38d011f0?auto=format&fit=crop&q=80', // CNC Machine
            description: 'Precision metal and plastic machining to your exact specifications.'
        },
        {
            title: 'Industrial Gears',
            subtitle: 'Spur, Helical, Worm',
            icon: <Settings size={32} />,
            image: 'https://images.unsplash.com/photo-1533261642231-15b57d5985b9?auto=format&fit=crop&q=80', // Gears
            description: 'Custom gear manufacturing for power transmission systems.'
        },
        {
            title: 'Polyurethane (PU)',
            subtitle: 'Rollers & Pads',
            icon: <Factory size={32} />,
            image: 'https://images.unsplash.com/photo-1581093583449-edb5adce8a13?auto=format&fit=crop&q=80', // Factory/Industrial
            description: 'Durable, abrasion-resistant elastomers for industrial applications.'
        }
    ];

    return (
        <section id="products" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-2">Our Expertise</span>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">Powering Industries With Precision</h2>
                    <div className="h-1 w-24 bg-primary mx-auto mt-4"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="group relative h-80 overflow-hidden cursor-pointer shadow-lg"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${item.image}')` }}
                            ></div>

                            {/* Default Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent transition-opacity duration-300 group-hover:opacity-0"></div>

                            {/* Icon Box */}
                            <div className="absolute top-0 right-0 bg-primary p-4 text-secondary z-20">
                                {item.icon}
                            </div>

                            {/* Default Content (Bottom) */}
                            <div className="absolute bottom-0 left-0 w-full p-6 text-white z-10 transition-all duration-300 group-hover:translate-y-full">
                                <h3 className="text-2xl font-heading font-bold uppercase mb-1">{item.title}</h3>
                                <p className="text-primary font-medium tracking-wide text-sm">{item.subtitle}</p>
                            </div>

                            {/* Hover Content (Slides Up) */}
                            <div className="absolute inset-0 bg-primary/95 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out flex flex-col justify-center items-center p-8 text-center text-secondary z-20">
                                <div className="mb-4 p-3 border-2 border-secondary rounded-full">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl font-heading font-bold uppercase mb-2">{item.title}</h3>
                                <p className="text-secondary/80 font-medium mb-6 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm border-b-2 border-secondary pb-1">
                                    Read More <span>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
