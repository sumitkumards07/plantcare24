'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Timeline() {
  const steps = [
    "Emergency Maintenance",
    "AMC",
    "Automation",
    "Predictive AI",
    "Industrial OS"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-16 md:py-24 relative z-10 overflow-hidden">
      <div className="glass-card rounded-[24px] md:rounded-[32px] p-6 md:p-12 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 to-accent-green/5 rounded-[24px] md:rounded-[32px] pointer-events-none" />
        
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-12 text-center md:text-left">The Industrial Evolution</h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative"
        >
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-border -translate-y-1/2 z-0" />

          {steps.map((step, index) => (
            <motion.div key={index} variants={itemVariants} className="flex items-center w-full md:w-auto relative z-10">
              <div className="bg-white border-2 border-border rounded-full px-6 py-3 font-semibold text-primary shadow-sm whitespace-nowrap transition-colors hover:border-accent-blue w-full md:w-auto text-center">
                {step}
              </div>
              
              {index < steps.length - 1 && (
                <div className="md:hidden py-2 text-muted flex justify-center w-full">
                  <ArrowRight className="w-5 h-5 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
