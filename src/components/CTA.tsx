'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

export default function CTA() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log("Waitlist submission: ", data);
    // Add success logic here
  };

  return (
    <section className="w-full max-w-[1440px] mx-auto px-4 md:px-12 py-16 md:py-32 relative z-10">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card rounded-[24px] md:rounded-[40px] p-8 md:p-24 flex flex-col items-center text-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent-blue/10 to-transparent pointer-events-none" />
        
        <h2 className="text-3xl md:text-6xl font-bold text-primary tracking-tight mb-6 relative z-10">
          Be First.<br />
          <span className="text-muted">Join India's Industrial Revolution.</span>
        </h2>
        
        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-lg relative flex items-center group mt-8 z-10"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-[35px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative flex items-center w-full h-[70px] bg-white border border-border rounded-[35px] p-2 shadow-sm transition-all hover:shadow-md hover:border-accent-blue/30 overflow-hidden">
            <input 
              {...register('email', { required: true })}
              type="email" 
              placeholder="Enter your business email" 
              className="flex-1 h-full bg-transparent outline-none px-6 text-primary placeholder:text-muted/60"
            />
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="h-full bg-primary text-primary-foreground px-8 rounded-[28px] font-semibold flex items-center justify-center transition-colors hover:bg-hover hover:shadow-lg"
            >
              Notify Me
            </motion.button>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
