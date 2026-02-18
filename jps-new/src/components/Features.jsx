import React from 'react';
import { Award, Truck, Wrench, ShieldCheck } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Wrench size={40} />,
            title: "In-House Manufacturing",
            desc: "Complete control over production ensuring consistent quality."
        },
        {
            icon: <Award size={40} />,
            title: "Custom Fabrication",
            desc: "Tailored solutions for your specific industrial needs."
        },
        {
            icon: <ShieldCheck size={40} />,
            title: "ISO Certified Quality",
            desc: "Strict adherence to ISO 9001:2015 standards."
        },
        {
            icon: <Truck size={40} />,
            title: "Pan-India Delivery",
            desc: "Reliable logistics to deliver parts anywhere on time."
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 pl-12 pr-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-6 border border-gray-100 hover:border-primary/50 hover:shadow-xl transition-all duration-300 group">
                            <div className="mb-6 p-4 bg-gray-50 text-secondary group-hover:bg-primary group-hover:text-secondary rounded-full transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-secondary mb-3 uppercase">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {feature.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
