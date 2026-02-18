import React from 'react';

const StatsSection = () => {
    const stats = [
        { value: '12+', label: 'Years Experience' },
        { value: '500+', label: 'Happy Clients' },
        { value: '1M+', label: 'Parts Delivered' },
        { value: '24/7', label: 'Support Available' },
    ];

    return (
        <section className="bg-secondary py-12 border-t border-white/10 relative z-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center group border-r border-white/10 last:border-0 hover:bg-white/5 py-4 transition-colors">
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </h3>
                            <p className="text-gray-400 font-bold uppercase tracking-widest text-xs md:text-sm">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
