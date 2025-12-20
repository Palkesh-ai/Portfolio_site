import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar } from "lucide-react";

const projects = [
  {
    title: "StaffJet – AI-Powered Hiring Platform",
    period: "Ongoing",
    stack: ["Next.js", "TypeScript", "Tailwind", "Node.js", "OpenAI API"],
    highlights: [
      "Built AI features for job description generation and candidate evaluation",
      "Designed OpenAI-powered APIs for skill extraction and job summarization",
      "Implemented billing dashboard with subscription and usage tracking",
    ],
    featured: true,
  },
  {
    title: "Job Portal Application",
    period: "Feb 2025 – Mar 2025",
    stack: ["MERN", "Redux Toolkit", "JWT", "Stripe", "AWS"],
    highlights: [
      "Developed full-stack job portal with role-based access control",
      "Integrated Stripe payments and AWS S3 for secure resume uploads",
      "Deployed on AWS EC2 with environment-based configuration",
    ],
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12 text-center">
          Projects
        </h2>
        
        <div className="grid gap-6">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className={`bg-card border-border/50 overflow-hidden ${
                project.featured ? "ring-1 ring-primary/10" : ""
              }`}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl font-medium text-foreground">
                        {project.title}
                      </CardTitle>
                      {project.featured && (
                        <Badge variant="secondary" className="text-xs">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" />
                      {project.period}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="font-normal text-xs py-1 px-2.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
