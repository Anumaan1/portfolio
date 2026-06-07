const technicalSkills = [
  { name: "Python", level: 85 },
  { name: "Data Structures & Algorithms", level: 80 },
  { name: "JavaScript", level: 75 },
  { name: "HTML / CSS", level: 85 },
  { name: "MySQL / SQL", level: 78 },
  { name: "Web Development", level: 80 },
  { name: "Git / GitHub", level: 75 },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Adaptability",
  "Quick Learner",
  "Communication",
  "Collaboration",
];

const certifications = [
  {
    title: "Python Full Stack Development",
    issuer: "SRDT Pvt. Ltd.",
    icon: "🐍",
  },
  {
    title: "Yuva AI Learning",
    issuer: "TCS iON",
    icon: "🤖",
  },
  {
    title: "Full Stack Development Internship",
    issuer: "Certificate",
    icon: "🏆",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 text-center">
          Skills
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
          Technical Toolkit
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical skills with bars */}
          <div>
            <h3 className="font-semibold text-foreground text-lg mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {technicalSkills.map((skill, i) => (
                <div key={skill.name} data-testid={`skill-bar-${i}`}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full skill-bar-fill"
                      style={{
                        width: `${skill.level}%`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills + Certifications */}
          <div className="space-y-8">
            {/* Soft Skills */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-5">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
                    data-testid={`soft-skill-${skill.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="font-semibold text-foreground text-lg mb-5">Certifications &amp; Achievements</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 rounded-xl glass-card"
                    data-testid={`cert-item-${i}`}
                  >
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{cert.title}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
