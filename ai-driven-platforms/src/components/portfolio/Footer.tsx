const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Developer Portfolio. Built with React & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
