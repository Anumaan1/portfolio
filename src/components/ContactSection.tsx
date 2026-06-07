import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const contactItems = [
  {
    icon: <Mail size={20} className="text-primary" />,
    label: "Email",
    value: "lakshyajaiswal2004@gmail.com",
    href: "mailto:lakshyajaiswal2004@gmail.com",
    testId: "contact-email",
  },
  {
    icon: <Phone size={20} className="text-primary" />,
    label: "Phone",
    value: "+91 8381800000",
    href: "tel:+918381800000",
    testId: "contact-phone",
  },
  {
    icon: <FaLinkedin size={20} className="text-primary" />,
    label: "LinkedIn",
    value: "anumaan-jaiswal-5a251b279",
    href: "https://www.linkedin.com/in/anumaan-jaiswal-5a251b279/",
    testId: "contact-linkedin",
  },
  {
    icon: <SiGithub size={20} className="text-primary" />,
    label: "GitHub",
    value: "github.com/Anumaan1",
    href: "https://github.com/Anumaan1",
    testId: "contact-github",
  },
  {
    icon: <MapPin size={20} className="text-primary" />,
    label: "Location",
    value: "Lucknow, India",
    href: null,
    testId: "contact-location",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Contact
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 max-w-md mx-auto">
          I'm open to internships, collaborations, and exciting opportunities. Feel free to reach out through any channel below.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left">
          {contactItems.map((item) => (
            <div key={item.testId} data-testid={item.testId}>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-5 rounded-xl glass-card hover:shadow-md hover:border-primary/30 transition-all"
                >
                  <div className="p-2.5 rounded-lg bg-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              ) : (
                <div className="flex items-center gap-4 p-5 rounded-xl glass-card">
                  <div className="p-2.5 rounded-lg bg-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Big CTA */}
        <div className="mt-12">
          <a
            href="mailto:lakshyajaiswal2004@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            data-testid="contact-cta-email"
          >
            <Mail size={16} />
            Send me an email
          </a>
        </div>
      </div>
    </section>
  );
}
