const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <p className="font-heading text-primary text-lg font-bold tracking-wider mb-2">MAMSC</p>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Martial Arts and Multi Sports Club. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
