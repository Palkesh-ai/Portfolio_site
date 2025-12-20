const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-background">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-8">
          About Me
        </h2>
        
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I am a full-stack developer with a strong foundation in JavaScript and hands-on experience building scalable, AI-integrated web platforms.
          </p>
          
          <p>
            I focus on designing clean system architectures, reliable APIs, and user-friendly dashboards that solve real business problems in hiring and HR domains.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
