import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-background" />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground leading-tight text-balance">
            Full-Stack Developer Building Scalable AI-Driven Platforms
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Specialized in JavaScript backend systems, Next.js frontends, and GenAI integrations for production-grade web applications.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button 
            size="lg" 
            className="group px-8 py-6 text-base font-medium"
            onClick={() => document.getElementById('product')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Product
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8 py-6 text-base font-medium"
            onClick={() => window.location.href="https://drive.google.com/uc?export=download&id=1ynC1NF4zJGx1NkQ_1zuguC_BhqIMa05-"}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
