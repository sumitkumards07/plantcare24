'use client';

import { motion, Variants } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { ArrowRight, CheckCircle2, Factory, Activity, UserCheck, Package, Globe, ExternalLink, Wrench } from 'lucide-react';

export default function Hero() {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data: any) => {
    console.log("Waitlist submission: ", data);
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };



  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-5 sm:px-8 md:px-12 pt-8 sm:pt-12 md:pt-20 pb-12 md:pb-32 min-h-[100dvh] md:min-h-[85vh] flex flex-col">
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        
        {/* Left Column: Content */}
        <motion.div 
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full"
          variants={staggerContainer}
          initial="hidden"
          animate="show"
        >
          {/* Brand Tag */}
          <motion.div variants={fadeUp} className="mb-4 md:mb-6 flex items-center space-x-3 text-accent-blue">
            <div className="w-6 md:w-8 h-[2px] bg-accent-blue"></div>
            <span className="uppercase tracking-[0.2em] text-xs md:text-sm font-bold">Plantcare24</span>
            <div className="w-6 md:w-8 h-[2px] bg-accent-blue lg:hidden"></div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 variants={fadeUp} className="text-[3.2rem] sm:text-6xl md:text-7xl lg:text-8xl font-black text-primary leading-[0.92] tracking-tight mb-6 md:mb-8">
            Coming<br />Soon.
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="text-base sm:text-lg md:text-xl text-muted max-w-md lg:max-w-lg mb-8 md:mb-12 leading-relaxed px-2 sm:px-0">
            Connecting factories with verified industrial engineers for emergency maintenance, preventive servicing, automation support, and annual maintenance contracts.
          </motion.p>

          {/* Waitlist Form — Desktop: pill, Mobile: stacked */}
          <motion.form 
            variants={fadeUp} 
            onSubmit={handleSubmit(onSubmit)}
            className="w-full max-w-md relative group mb-3 md:mb-4"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-green/20 rounded-2xl md:rounded-[35px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            
            {/* Desktop: Single row pill */}
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
                className="h-full bg-primary text-primary-foreground px-6 md:px-8 rounded-full font-semibold flex items-center space-x-2 transition-colors hover:bg-hover hover:shadow-lg text-sm md:text-base"
              >
                <span>Notify Me</span>
              </motion.button>
            </div>

            {/* Mobile: Stacked layout */}
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
          </motion.form>

          <motion.p variants={fadeUp} className="text-xs sm:text-sm text-muted/70">
            No spam. Only important launch updates.
          </motion.p>
        </motion.div>

        {/* Right Column: 3D Dashboard — hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block flex-1 relative w-full h-[600px] z-10">
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
              <div className="flex-1 grid grid-cols-2 gap-4">
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

            {/* Floating Card 1: Machine Health */}
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

            {/* Floating Card 2: Emergency Request */}
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

            {/* Floating Card 3: Engineer Profile */}
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

            {/* Floating Card 4: Maintenance Report */}
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

            {/* Floating Card 5: Spare Parts */}
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

        {/* Mobile Feature Preview Cards — visible only on mobile/tablet */}
        <motion.div 
          className="lg:hidden w-full grid grid-cols-2 gap-3 mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3">
            <div className="w-10 h-10 bg-red-500/10 rounded-xl flex items-center justify-center">
              <Wrench className="text-red-500 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Breakdown Support</p>
              <p className="text-xs text-red-500 font-bold mt-1">24/7 Response</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
              <UserCheck className="text-amber-600 w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Expert Engineer</p>
              <p className="text-xs text-amber-500 font-bold mt-1">Verified Pros</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3">
            <div className="w-10 h-10 bg-accent-green/10 rounded-xl flex items-center justify-center">
              <CheckCircle2 className="text-accent-green w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">AMC Maintenance</p>
              <p className="text-xs text-accent-green font-bold mt-1">Annual Contracts</p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-4 flex flex-col gap-3">
            <div className="w-10 h-10 bg-accent-blue/10 rounded-xl flex items-center justify-center">
              <Package className="text-accent-blue w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-primary">Spare Part Supply</p>
              <p className="text-xs text-accent-blue font-bold mt-1">Quick Delivery</p>
            </div>
          </div>
        </motion.div>
      </div>



    </section>
  );
}
