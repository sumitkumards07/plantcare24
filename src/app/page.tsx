import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Timeline from "@/components/Timeline";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Timeline />
      <CTA />
      <Footer />
    </main>
  );
}
