import { motion } from 'motion/react';
import { Code2, Users, Zap, Target } from 'lucide-react';
import { aboutCredibility } from '../config/about';

export function AboutCredibility() {
    const iconMap = {
        'Modern Web Technologies': Code2,
        'Technical SEO': Zap,
        'UI/UX Design': Users,
        'default': Target
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="container mx-auto px-6 relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        {aboutCredibility.title}
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        {aboutCredibility.excerpt}
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
                    {/* Left: Expertise */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-blue-400">Uzmanlığımız</h3>
                        <div className="space-y-4">
                            {aboutCredibility.expertise.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group cursor-pointer"
                                >
                                    <div className="flex-shrink-0 p-2 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/30 transition-colors">
                                        <Code2 className="w-5 h-5 text-blue-400" />
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{exp}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Center: Tools */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-purple-400">Hizmet Yaklaşımımız</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {aboutCredibility.tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                    className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/30 hover:text-purple-400 transition-all text-center text-sm font-medium text-gray-300"
                                >
                                    {tool}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Approach */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6 text-pink-400">Yaklaşımımız</h3>
                        <div className="space-y-4">
                            {aboutCredibility.approach.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.08 }}
                                    className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                                >
                                    <div className="flex-shrink-0 p-1.5 bg-pink-500/20 rounded-lg group-hover:bg-pink-500/30 transition-colors mt-0.5">
                                        <Zap className="w-4 h-4 text-pink-400" />
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-center p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10"
                >
                    <p className="text-gray-300 mb-4">
                        Daha fazla bilgi mi istiyorsunuz? <br className="md:hidden" /> Tam hakkımızda sayfasını ziyaret edin.
                    </p>
                    <a
                        href="#hakkimizda"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                        İlgili Bölüme Atla →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
