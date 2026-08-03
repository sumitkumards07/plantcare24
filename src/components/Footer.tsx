import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 border-t border-border/50 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-bold text-primary">Plantcare24</span>
          <span className="text-sm text-muted">Built for India's Industries. Launching 2027.</span>
        </div>

        {/* Right Side Links */}
        <div className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          <Link href="https://linkedin.com" className="hover:text-primary transition-colors">LinkedIn</Link>
        </div>

      </div>
      
      <div className="mt-8 text-center md:text-left text-xs text-muted/60">
        &copy; {new Date().getFullYear()} Plantcare24. All rights reserved.
      </div>
    </footer>
  );
}
