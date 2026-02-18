import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Cpu, TrendingUp, Activity } from 'lucide-react';
import MachineGallery from './MachineGallery';

const machines = [
    { machine: 'VMC', make: 'Haas', capacity: '3 Axis', quantity: 9 },
    { machine: 'VMC', make: 'Haas', capacity: '4 Axis', quantity: 2 },
    { machine: 'VMC', make: 'Haas', capacity: '5 Axis', quantity: 1 },
    { machine: 'CNC Turning', make: 'LMW', capacity: 'Dia 150 & 230mm', quantity: 4 },
    { machine: 'Vaccume Router', make: 'India Make, Machine Tools', capacity: '1 mtr x 1 mtr', quantity: 1 },
    { machine: 'Router', make: 'India Make, Machine Tools', capacity: '1 mtr x 1 mtr', quantity: 1 },
    { machine: 'Milling With DRO', make: 'Precicut, Taiwan', capacity: '950 x 750', quantity: 6 },
    { machine: 'Lathe', make: 'Jyoti', capacity: '500MM & 1200mm', quantity: 6 },
    { machine: 'Welding Rectifier', make: 'ESAB', capacity: '400 AMP', quantity: 3 },
    { machine: 'Welding Rectifier', make: 'ESAB', capacity: '600 AMP', quantity: 3 },
    { machine: 'MIG Machine', make: 'ADORE', capacity: '400 AMP', quantity: 2 },
    { machine: 'Grinder', make: 'Dewalt', capacity: '8, 6, 4 inch', quantity: 8 },
    { machine: 'Submerge Arc', make: 'ADORE', capacity: '400 AMP', quantity: 1 },
    { machine: 'Rolling Machine', make: 'Local', capacity: 'Up to 25mm', quantity: 1 },
    { machine: 'Pipe Cutting Machine', make: 'Dewalt', capacity: '8 inch dia', quantity: 2 },
    { machine: 'Surface Grinder', make: 'Ramanna', capacity: '400mm', quantity: 2 },
    { machine: 'Slotter', make: 'Jyoti', capacity: '50mm', quantity: 1 },
    { machine: 'Power Hecksaw', make: 'New Star', capacity: '300mm', quantity: 2 },
    { machine: 'Heating Furnace', make: 'Shakti', capacity: 'L-1mtr', quantity: 1 },
    { machine: 'Digital Profile Projector', make: 'Mitutoyo', capacity: '400mm', quantity: 1 },
    { machine: 'Sliding Head', make: 'Tsugami', capacity: 'Dia20mm', quantity: 2 },
    { machine: 'Laser Marking Machine', make: 'Imported', capacity: '-', quantity: 1 },
    { machine: 'Air Compressor', make: 'Elgi', capacity: '500ltr & 250ltr', quantity: 2 },
    { machine: 'Diesel Generator', make: '-', capacity: '162kva, 125kva, 40kva', quantity: 3 },
    { machine: 'Surface Table', make: '-', capacity: '1 mtr x 1mtr, 1 mtr x 2mtr', quantity: 2 },
];

const Infrastructure = () => {
    return (
        <section id="infrastructure" className="py-20 bg-secondary relative overflow-hidden">
            {/* Background Mesh */}
            <div className="absolute inset-0 z-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #EAB308 1px, transparent 0)', backgroundSize: '40px 40px' }}>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Infrastructure</h2>
                    <div className="w-24 h-1 bg-primary mx-auto"></div>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        State-of-the-art manufacturing facility equipped with the latest machinery to ensure precision and quality.
                    </p>
                </motion.div>

                {/* Capacity Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg"
                    >
                        <Settings className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">4000 Parts/Day</h3>
                        <p className="text-gray-400">Total Machining Capacity (2 Working Shifts)</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-lg relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors"></div>
                        <TrendingUp className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">50% Utilized</h3>
                        <p className="text-gray-400">Current Production (1000 Parts/Shift)</p>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-white/5 backdrop-blur-sm border border-primary/30 p-8 rounded-lg shadow-[0_0_15px_rgba(234,179,8,0.1)]"
                    >
                        <Activity className="w-10 h-10 text-primary mb-4" />
                        <h3 className="text-2xl font-bold text-white mb-2">50% Spare Capacity</h3>
                        <p className="text-gray-400">Available for New Projects (2000 Parts/Day)</p>
                    </motion.div>
                </div>

                {/* Imagery Grid - Dynamic from src/assets/machines */}
                <MachineGallery />

                {/* Machines Table */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="overflow-x-auto rounded-lg border border-white/10 bg-white/5 backdrop-blur-md"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/10 border-b border-white/10">
                                <th className="p-4 text-primary font-heading uppercase tracking-wider">Machine</th>
                                <th className="p-4 text-primary font-heading uppercase tracking-wider">Make</th>
                                <th className="p-4 text-primary font-heading uppercase tracking-wider">Capacity</th>
                                <th className="p-4 text-primary font-heading uppercase tracking-wider text-right">Qty</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5 text-gray-300 text-sm">
                            {machines.map((item, index) => (
                                <tr key={index} className="hover:bg-white/5 transition-colors">
                                    <td className="p-4 font-medium text-white">{item.machine}</td>
                                    <td className="p-4">{item.make}</td>
                                    <td className="p-4">{item.capacity}</td>
                                    <td className="p-4 text-right font-bold text-primary">{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
};

export default Infrastructure;
