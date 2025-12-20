import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Brain, DollarSign, LayoutDashboard, Server, Zap } from "lucide-react";

const modules = [
  {
    icon: Brain,
    title: "AI Job Intelligence Module",
    description: "AI-driven system for generating structured job descriptions, skills, responsibilities, and experience requirements from minimal input.",
    contributions: [
      "Backend APIs for AI-powered job data generation",
      "Prompt engineering for consistent, structured outputs",
      "Frontend integration for auto-filling job forms",
    ],
  },
  {
    icon: DollarSign,
    title: "Billing & Token Usage System",
    description: "Internal system to track AI usage, token consumption, and billing metrics for HR administrators.",
    contributions: [
      "Token usage tracking APIs",
      "Admin dashboard for real-time usage visibility",
      "Secure access control for billing data",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Admin & HR Dashboards",
    description: "Clean and responsive dashboards for HR teams to manage jobs, candidates, and AI-driven workflows.",
    contributions: [
      "Modular dashboard UI using Next.js and Tailwind",
      "Optimized API consumption and state management",
      "UX focused on clarity and speed",
    ],
  },
];

const architectureHighlights = [
  "Scalable REST API architecture using JavaScript",
  "Clear separation of frontend and backend concerns",
  "Secure data handling and role-based access",
  "AI services abstracted behind backend APIs",
];

const impacts = [
  "Reduced manual job creation time using AI automation",
  "Improved HR productivity through centralized dashboards",
  "Enabled controlled and measurable AI usage via billing system",
];

const ProductSection = () => {
  return (
    <section id="product" className="py-24 px-6 bg-background">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Product Header */}
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full">
            <Briefcase className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Flagship Product</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
            StaffJet – AI-Powered Hiring Platform
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            StaffJet is a full-scale hiring and recruitment platform designed to automate and optimize HR workflows using AI-powered intelligence and scalable backend systems.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Badge variant="outline" className="py-1.5 px-4 text-sm">
              Full-Stack Developer
            </Badge>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["JavaScript", "Next.js", "TypeScript", "MongoDB", "OpenAI API", "Tailwind CSS"].map((tech) => (
                <Badge key={tech} variant="secondary" className="py-1.5 px-3 text-sm font-normal">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Key Modules */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Key Modules & Contributions
          </h3>
          
          <div className="grid gap-6">
            {modules.map((module) => (
              <Card key={module.title} className="bg-card border-border/50 overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-secondary">
                      <module.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <CardTitle className="text-xl font-medium text-foreground">
                        {module.title}
                      </CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {module.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 pl-16">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-foreground">What I Built:</p>
                    <ul className="space-y-1.5">
                      {module.contributions.map((contribution) => (
                        <li key={contribution} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                          {contribution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Architecture & Impact */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="bg-secondary/50 border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-foreground" />
                <CardTitle className="text-lg font-medium">System & Architecture</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {architectureHighlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-secondary/50 border-border/50">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-foreground" />
                <CardTitle className="text-lg font-medium">Impact</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <ul className="space-y-2">
                {impacts.map((impact) => (
                  <li key={impact} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                    {impact}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
