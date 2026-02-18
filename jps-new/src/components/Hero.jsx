import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-secondary">
            {/* Background Video */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <div className="absolute inset-0 bg-secondary/60 mix-blend-multiply z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/80 to-transparent z-10"></div>
                <video
                    autoPlay
                    loop
                    muted
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="https://videos.pexels.com/video-files/5824586/5824586-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    {/* Fallback image if video fails to load */}
                    <img src="https://images.unsplash.com/photo-1565514020176-db715975d0b4?q=80&w=2670&auto=format&fit=crop" alt="Industrial Background" className="w-full h-full object-cover" />
                </video>
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 z-10 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#EAB308 1px, transparent 1px), linear-gradient(90deg, #EAB308 1px, transparent 1px)', backgroundSize: '60px 60px' }}>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
                <div className="max-w-4xl text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="h-[2px] w-12 bg-primary"></div>
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base">ISO 9001:2015 Certified Manufacturing</span>
                        </div>

                        <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl leading-none mb-6 text-shadow-lg">
                            INDUSTRIAL <span className="text-stroke-primary text-transparent">PRECISION</span> <br />
                            <span className="text-white">ENGINEERING.</span>
                        </h1>

                        <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mb-10 border-l-4 border-primary pl-6 py-2 bg-black/20 backdrop-blur-sm">
                            Advanced CNC Manufacturing | Cast Nylon & PEEK Components | Custom Engineering Solutions for Heavy Industry.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="contact" smooth={true} offset={-100}>
                                <button className="px-8 py-4 bg-primary text-secondary font-heading font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-secondary transition-all duration-300 flex items-center gap-2 group w-full sm:w-auto justify-center shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                                    Get a Quote
                                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>

                            <Link to="infrastructure" smooth={true} offset={-100}>
                                <button className="px-8 py-4 border-2 border-white/30 backdrop-blur-sm text-white font-heading font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-secondary transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center">
                                    Our Infrastructure
                                    <ArrowRight size={20} />
                                </button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-primary"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-primary to-transparent animate-pulse"></div>
            </motion.div>
        </section>
    );
};

export default Hero;
