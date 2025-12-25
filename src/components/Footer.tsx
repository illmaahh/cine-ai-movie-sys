import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const footerLinks = [
    {
      title: "Explore",
      links: [
        { name: "Movies", href: "/movies" },
        { name: "Genres", href: "/genres" },
        { name: "New Releases", href: "/new" },
        { name: "Top Rated", href: "/top-rated" },
      ],
    },
    {
      title: "Features",
      links: [
        { name: "Watch Together", href: "/watch-together" },
        { name: "My List", href: "/my-list" },
        { name: "AI Recommendations", href: "/recommendations" },
        { name: "Friends", href: "/friends" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Feedback", href: "/feedback" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Cookie Policy", href: "/cookies" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-card/30 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 md:col-span-1">
            <Logo size="md" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              AI-powered movie discovery platform. Find your next favorite film with personalized recommendations.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 Cine AI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Powered by Advanced AI Recommendation Engine
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
