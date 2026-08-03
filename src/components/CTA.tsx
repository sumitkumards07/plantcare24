'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log("Waitlist submission: ", data);
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 py-16 md:py-32 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card rounded-[20px] md:rounded-[40px] p-8 sm:p-12 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/10 to-transparent pointer-events-none" />
        
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-primary tracking-tight mb-4 md:mb-6 relative z-10">
          Be First.<br />
          <span className="text-muted">Join India's Industrial Revolution.</span>
        </h2>
        
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg relative group mt-6 md:mt-8 z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-2xl md:rounded-[35px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Desktop: pill layout */}
          <div className="hidden sm:flex relative items-center w-full h-[64px] md:h-[70px] bg-white border border-border rounded-full p-2 shadow-sm transition-all hover:shadow-md hover:border-accent-blue/30 overflow-hidden">
            <input 
              {...register('email', { required: true })}
              type="email" 
              placeholder="Enter your business email" 
              className="flex-1 h-full bg-transparent outline-none px-6 text-primary placeholder:text-muted/60 text-sm md:text-base"
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="h-full bg-primary text-primary-foreground px-6 md:px-8 rounded-full font-semibold flex items-center justify-center transition-colors hover:bg-hover hover:shadow-lg text-sm md:text-base"
            >
              Notify Me
            </motion.button>
          </div>

          {/* Mobile: stacked layout */}
          <div className="flex sm:hidden flex-col gap-3 w-full">
            <input 
              {...register('email', { required: true })}
              type="email" 
              placeholder="Enter your business email" 
              className="w-full h-14 bg-white border border-border rounded-2xl px-5 text-primary placeholder:text-muted/60 text-sm outline-none shadow-sm focus:border-accent-blue/40 transition-colors"
            />
            <motion.button 
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full h-14 bg-primary text-primary-foreground rounded-2xl font-semibold flex items-center justify-center space-x-2 transition-colors active:bg-hover shadow-md text-base"
            >
              <span>Notify Me</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
