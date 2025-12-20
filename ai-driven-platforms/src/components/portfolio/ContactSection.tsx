import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-2xl mx-auto text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
          Let's Build Something Impactful
        </h2>
        
        <p className="text-lg text-muted-foreground leading-relaxed">
          I'm open to full-time roles, internships, and product-driven opportunities.
          If you're looking for a developer who understands backend systems, AI integration, and real-world product needs — let's connect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <Button variant="default" size="lg" className="gap-2" asChild>
            <a href="mailto:palkeshsharma456@gmail.com">
              <Mail className="h-4 w-4" />
              Email
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://linkedin.com/in/palkesh-ai" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </Button>
          
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <a href="https://github.com/palkesh-ai" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </Button>``
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
