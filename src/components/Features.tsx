'use client';

import { motion, Variants } from 'framer-motion';
import { Factory, ShieldCheck, Cpu } from 'lucide-react';

export default function Features() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const features = [
    {
      icon: <Factory className="w-8 h-8 text-accent-blue" />,
      title: "Factory Downtime",
      description: "Every hour of machine downtime costs businesses thousands.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-accent-green" />,
      title: "Verified Engineers",
      description: "Find trusted industrial experts in minutes.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Predictive Maintenance",
      description: "Prevent failures before they happen.",
    },
  ];

  return (
    <section id="services" className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 md:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-tight">Why We're Building This</h2>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8"
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ y: -5 }}
            className="glass-card rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col items-start transition-all hover:shadow-xl hover:border-white/80"
          >
            <div className="w-12 md:w-16 h-12 md:h-16 rounded-xl md:rounded-2xl bg-white flex items-center justify-center shadow-sm mb-4 md:mb-6 border border-border/50">
              {feature.icon}
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3">{feature.title}</h3>
            <p className="text-muted text-base md:text-lg leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
