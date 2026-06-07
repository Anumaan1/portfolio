import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Development Intern",
    company: "SRDT Pvt. Ltd.",
    period: "Internship",
    type: "Full Stack",
    points: [
      "Developed responsive web applications using HTML, CSS, and JavaScript.",
      "Built backend functionality using Python and integrated MySQL databases.",
      "Collaborated on debugging and performance optimization of applications.",
    ],
  },
  {
    role: "Mobile Application Developer Intern",
    company: "Mobile Dev Internship",
    period: "Internship",
    type: "Mobile",
    points: [
      "Developed Java-based mobile applications.",
      "Implemented user interfaces and application features.",
      "Participated in testing and bug fixing.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 text-center">
          Experience
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Work History
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative sm:pl-16"
                data-testid={`experience-item-${i}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[18px] top-5 w-4 h-4 rounded-full bg-primary border-2 border-background hidden sm:block" />

                <div className="p-6 rounded-xl glass-card hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-accent">
                        <Briefcase size={16} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-base" data-testid={`exp-role-${i}`}>
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">{exp.company}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {exp.period}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
