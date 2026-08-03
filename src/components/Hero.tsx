'use client';

import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, Factory, Activity, UserCheck, Wrench, Package } from 'lucide-react';

export default function Hero() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log("Waitlist submission: ", data);
    // Add success logic here
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-4 md:px-12 pt-12 md:pt-20 pb-[280px] sm:pb-[240px] md:pb-32 flex flex-col lg:flex-row items-center gap-4 lg:gap-16 min-h-[85vh]">
      
      {/* Left Column: Content */}
      <motion.div 
        className="flex-1 flex flex-col items-start z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="mb-6 flex items-center space-x-3 text-accent-blue">
          <div className="w-8 h-[2px] bg-accent-blue"></div>
          <span className="uppercase tracking-widest text-sm font-bold">Plantcare24</span>
        </motion.div>

        <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-black text-primary leading-[0.95] tracking-tight mb-8">
          Coming <br /> Soon.
        </motion.h1>

        <motion.p variants={fadeUp} className="text-lg md:text-xl text-muted max-w-lg mb-12 leading-relaxed">
          Connecting factories with verified industrial engineers for emergency maintenance, preventive servicing, automation support, and annual maintenance contracts.
        </motion.p>

        <motion.form 
          variants={fadeUp} 
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-md relative flex items-center group mb-4"
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
              className="h-full bg-primary text-primary-foreground px-8 rounded-[28px] font-semibold flex items-center space-x-2 transition-colors hover:bg-hover hover:shadow-lg"
            >
              <span>Notify Me</span>
            </motion.button>
          </div>
        </motion.form>

        <motion.p variants={fadeUp} className="text-sm text-muted/80">
          No spam. Only important launch updates.
        </motion.p>
      </motion.div>

      {/* Right Column: 3D Dashboard Elements */}
      <div className="flex-1 relative w-full h-[400px] md:h-[600px] mt-8 lg:mt-0 z-10 perspective-1000 scale-[0.65] sm:scale-75 lg:scale-100 origin-top">
        <motion.div 
          className="absolute inset-0 w-full h-full relative"
          initial={{ opacity: 0, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Dashboard Base */}
          <div className="absolute inset-10 bg-white/80 backdrop-blur-2xl border border-white rounded-[30px] shadow-2xl overflow-hidden flex flex-col p-6">
            <div className="w-full flex justify-between items-center mb-8 pb-4 border-b border-border/50">
               <div className="flex space-x-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               <span className="text-sm font-medium text-muted">Plantcare24 OS</span>
            </div>

            {/* Internal layout simulating dashboard */}
            <div className="flex-1 grid grid-cols-2 gap-4">
               {/* Skeleton blocks */}
               <div className="bg-gray-50 rounded-2xl p-4 border border-border/30 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4">
                     <Activity className="text-accent-blue w-6 h-6" />
                  </div>
                  <div>
                    <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-16 h-3 bg-gray-100 rounded"></div>
                  </div>
               </div>
               <div className="bg-gray-50 rounded-2xl p-4 border border-border/30 flex flex-col justify-between">
                  <div className="w-12 h-12 bg-accent-green/10 rounded-xl flex items-center justify-center mb-4">
                     <CheckCircle2 className="text-accent-green w-6 h-6" />
                  </div>
                  <div>
                    <div className="w-24 h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="w-16 h-3 bg-gray-100 rounded"></div>
                  </div>
               </div>
               <div className="col-span-2 bg-gray-50 rounded-2xl p-4 border border-border/30 h-32 flex items-end space-x-2">
                  <div className="w-1/6 h-1/3 bg-accent-green/30 rounded-t"></div>
                  <div className="w-1/6 h-1/2 bg-accent-green/40 rounded-t"></div>
                  <div className="w-1/6 h-full bg-accent-green/60 rounded-t"></div>
                  <div className="w-1/6 h-2/3 bg-accent-green/50 rounded-t"></div>
                  <div className="w-1/6 h-3/4 bg-accent-green/70 rounded-t"></div>
                  <div className="w-1/6 h-5/6 bg-accent-green rounded-t"></div>
               </div>
            </div>
          </div>

          {/* Floating Cards Overlaid */}
          {/* 1. Machine Health */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-4 -left-12 glass-card p-4 rounded-[20px] w-64 flex items-center space-x-4 shadow-xl z-20"
          >
            <div className="relative w-12 h-12 rounded-full border-4 border-accent-green/20 flex items-center justify-center">
               <div className="absolute inset-0 rounded-full border-4 border-accent-green border-l-transparent rotate-45"></div>
               <Factory className="w-5 h-5 text-accent-green" />
            </div>
            <div>
              <p className="text-sm font-medium text-primary">CNC Machine</p>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-muted">Status:</span>
                <span className="text-xs font-bold text-accent-green">Healthy 96%</span>
              </div>
            </div>
          </motion.div>

          {/* 2. Emergency Request */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 -right-8 glass-card p-5 rounded-[20px] w-72 shadow-xl z-30"
          >
            <div className="flex justify-between items-start mb-3">
               <div>
                 <p className="text-xs text-muted uppercase tracking-wider mb-1">Emergency Request</p>
                 <p className="text-sm font-semibold text-primary">Engineer Assigned</p>
               </div>
               <div className="bg-accent-blue/10 text-accent-blue text-xs px-2 py-1 rounded-md font-bold">ETA 18 Min</div>
            </div>
            <button className="w-full bg-accent-blue text-white text-xs font-medium py-2 rounded-xl flex items-center justify-center space-x-1">
               <span className="relative flex h-2 w-2 mr-2">
                 <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                 <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
               </span>
               Live Tracking
            </button>
          </motion.div>

          {/* 3. Engineer Profile */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-16 -left-8 glass-card p-4 rounded-[20px] w-72 shadow-xl z-20 flex items-center space-x-4"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
              <UserCheck className="w-6 h-6 text-gray-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <p className="text-sm font-semibold text-primary">Rajesh Patel</p>
                <div className="w-4 h-4 bg-accent-blue rounded-full flex items-center justify-center text-white text-[10px]">✓</div>
              </div>
              <p className="text-xs text-muted">Automation Engineer</p>
              <div className="flex items-center space-x-1 mt-1">
                <span className="text-amber-400 text-xs">★★★★★</span>
                <span className="text-xs text-muted ml-1">145 Jobs</span>
              </div>
            </div>
          </motion.div>

          {/* 4. Maintenance Report */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 right-12 glass-card p-5 rounded-[20px] w-64 shadow-xl z-30"
          >
            <p className="text-xs text-muted mb-3">Maintenance Report</p>
            <p className="text-sm font-semibold text-primary mb-3">Inspection Complete</p>
            <div className="space-y-2">
               {['Electrical', 'Mechanical', 'Safety'].map((item) => (
                 <div key={item} className="flex justify-between items-center border-b border-border/40 pb-2 last:border-0 last:pb-0">
                   <span className="text-xs text-muted">{item}</span>
                   <CheckCircle2 className="w-4 h-4 text-accent-green" />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* 5. Spare Parts */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 glass-card p-3 rounded-[16px] w-48 shadow-xl z-40 flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-accent-blue/10 rounded-lg flex items-center justify-center">
              <Package className="w-5 h-5 text-accent-blue" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary">Bearing</p>
              <p className="text-[10px] text-accent-green font-medium">Available in Ahmedabad</p>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Hero Bottom Bar */}
      <motion.div 
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 left-4 right-4 md:left-12 md:right-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 z-20 bg-white/60 md:bg-transparent backdrop-blur-xl md:backdrop-blur-none p-6 md:p-0 rounded-3xl md:rounded-none border border-border/50 md:border-transparent shadow-xl md:shadow-none"
      >
        {/* Bottom Left: Socials */}
        <div className="flex items-center space-x-3">
          {['LinkedIn', 'Twitter', 'YouTube', 'Instagram', 'GitHub'].map((social) => (
            <a 
              key={social} 
              href={`#${social.toLowerCase()}`}
              className="w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-white group"
              aria-label={social}
            >
              <span className="text-[10px] font-bold group-hover:text-white uppercase tracking-tighter">{social.substring(0,2)}</span>
            </a>
          ))}
        </div>

        {/* Bottom Right: Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {['Privacy', 'Terms', 'Contact', 'FAQ'].map((link) => (
            <a 
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
