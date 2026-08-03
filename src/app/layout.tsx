import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plantcare24 - Industrial Maintenance Network",
  description: "Connecting factories with verified industrial engineers for emergency machine maintenance, preventive maintenance, automation support, and annual maintenance contracts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-accent-blue selection:text-white relative overflow-x-hidden">
        {/* Background Blob */}
        <div className="fixed top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-accent-blue/20 via-gray-300/20 to-white/20 blur-[100px] -z-10 pointer-events-none mix-blend-multiply" />
        {/* Blueprint Grid */}
        <div className="fixed inset-0 blueprint-grid opacity-[0.05] -z-20 pointer-events-none" />
        
        {children}
      </body>
    </html>
  );
}
