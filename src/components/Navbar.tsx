import { useState, useEffect } from "react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-lg font-semibold text-primary tracking-tight"
          data-testid="nav-logo"
        >
          AJ<span className="text-foreground">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/Anumaan1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-github"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/anumaan-jaiswal-5a251b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-linkedin"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:lakshyajaiswal2004@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="nav-email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          data-testid="nav-menu-toggle"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border px-6 pb-4">
          <ul className="flex flex-col gap-3 pt-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 mt-4 pt-4 border-t border-border">
            <a href="https://github.com/Anumaan1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <SiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/anumaan-jaiswal-5a251b279/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <FaLinkedin size={18} />
            </a>
            <a href="mailto:lakshyajaiswal2004@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail size={18} />
            </a>
            <a href="tel:+918381800000" className="text-muted-foreground hover:text-foreground">
              <Phone size={18} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
