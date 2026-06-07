import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-center sm:text-left">
          <p className="font-mono font-semibold text-primary text-sm">Anumaan Jaiswal</p>
          <p className="text-xs text-muted-foreground mt-0.5">B.Tech CSE · SRMCEM Lucknow · 2023–2027</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Anumaan1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="footer-github"
          >
            <SiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/anumaan-jaiswal-5a251b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="footer-linkedin"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="mailto:lakshyajaiswal2004@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="footer-email"
          >
            <Mail size={18} />
          </a>
          <a
            href="tel:+918381800000"
            className="text-muted-foreground hover:text-foreground transition-colors"
            data-testid="footer-phone"
          >
            <Phone size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
