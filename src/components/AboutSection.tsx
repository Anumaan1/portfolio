import { Code2, Database, Globe, Cpu } from "lucide-react";

const highlights = [
  {
    icon: <Code2 size={20} className="text-primary" />,
    title: "Full Stack Development",
    desc: "Building responsive web apps with HTML, CSS, JavaScript, and Python backends.",
  },
  {
    icon: <Database size={20} className="text-primary" />,
    title: "Database Management",
    desc: "Designing and querying MySQL/SQL databases with CRUD operations.",
  },
  {
    icon: <Globe size={20} className="text-primary" />,
    title: "Web Development",
    desc: "Creating scalable, user-friendly web interfaces and backend systems.",
  },
  {
    icon: <Cpu size={20} className="text-primary" />,
    title: "DSA & Problem Solving",
    desc: "Strong foundation in Data Structures & Algorithms with Python.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="section-fade-in">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 leading-tight">
            Passionate about building
            <br />
            <span className="gradient-text">scalable software</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I'm a Computer Science Engineering student with strong foundations in
            Data Structures &amp; Algorithms, Python, Java, Web Development, and SQL.
            I'm passionate about building scalable software solutions and
            continuously learning new technologies.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Experienced in developing web applications, database-driven systems,
            and problem-solving through hands-on coding projects. I've worked as a
            Full Stack Development Intern and Mobile Application Developer Intern,
            giving me real-world engineering exposure.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {highlights.map((item, i) => (
            <div
              key={i}
              className="p-5 rounded-xl glass-card hover:shadow-md transition-shadow"
              data-testid={`about-highlight-${i}`}
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
