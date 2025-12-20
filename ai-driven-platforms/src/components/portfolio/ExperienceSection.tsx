import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "QualiMtrix Technologies",
    location: "Indore, India",
    period: "Nov 2024 – Present",
    responsibilities: [
      "Developed scalable REST APIs with Node.js and Express supporting thousands of monthly requests",
      "Optimized MongoDB queries and indexing, reducing API response time by 35%",
      "Integrated Redux Toolkit for predictable state management in React apps",
      "Worked in agile sprints with cross-functional teams",
    ],
  },
  {
    title: "MERN Stack Intern",
    company: "Linkites Infotech",
    location: "Indore, India",
    period: "Feb 2024 – Apr 2024",
    responsibilities: [
      "Built end-to-end MERN features including authentication, CRUD APIs, and dashboards",
      "Implemented JWT authentication and role-based authorization",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-12">
          Experience
        </h2>
        
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={exp.company} className="relative pl-8 border-l-2 border-border">
              <div className="absolute -left-3 top-0 p-1.5 bg-background border-2 border-border rounded-full">
                <Briefcase className="h-4 w-4 text-foreground" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium text-foreground">
                    {exp.title}
                  </h3>
                  <p className="text-foreground font-medium">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 mt-1.5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp) => (
                    <li key={resp} className="text-muted-foreground flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-muted-foreground/50 shrink-0" />
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
