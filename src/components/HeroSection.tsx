import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center hero-glow overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 border border-primary/20">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for internships & opportunities
        </div>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4" data-testid="hero-name">
          <span className="gradient-text">Anumaan</span>
          <br />
          <span className="text-foreground">Jaiswal</span>
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl font-medium text-muted-foreground mb-3" data-testid="hero-title">
          B.Tech CSE Student &amp; Full Stack Developer
        </p>

        <p className="text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed" data-testid="hero-location">
          Shri Ramswaroop Memorial College of Engineering &amp; Management, Lucknow
          <br />
          <span className="text-sm">Oct 2023 – Oct 2027</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <a
            href="https://www.linkedin.com/in/anumaan-jaiswal-5a251b279/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
            data-testid="hero-linkedin-btn"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
          <a
            href="https://github.com/Anumaan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-muted transition-colors border border-border"
            data-testid="hero-github-btn"
          >
            <SiGithub size={16} />
            GitHub
          </a>
          <a
            href="mailto:lakshyajaiswal2004@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-muted transition-colors border border-border"
            data-testid="hero-email-btn"
          >
            <Mail size={16} />
            Email Me
          </a>
          <a
            href="tel:+918381800000"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-secondary text-secondary-foreground font-medium text-sm hover:bg-muted transition-colors border border-border"
            data-testid="hero-phone-btn"
          >
            <Phone size={16} />
            +91 8381800000
          </a>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors animate-bounce"
          data-testid="hero-scroll-cue"
        >
          <span className="text-xs font-medium">Scroll down</span>
          <ArrowDown size={16} />
        </a>
      </div>
    </section>
  );
}
