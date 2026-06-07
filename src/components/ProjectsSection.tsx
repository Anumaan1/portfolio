import { SiGithub } from "react-icons/si";
import { ExternalLink, Car, Gamepad2, Hotel } from "lucide-react";

const projects = [
  {
    title: "Ride Price Comparison App",
    icon: <Car size={22} className="text-primary" />,
    description:
      "An application to compare ride fares across multiple platforms. Integrates APIs to fetch fare information in real time and implements recommendation logic to suggest the most cost-effective option.",
    tags: ["API Integration", "Python", "Web Development", "Real-time Data"],
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Snake Game",
    icon: <Gamepad2 size={22} className="text-primary" />,
    description:
      "An interactive Snake Game built using Python. Implements game logic, collision detection, and scoring system. Enhanced user experience with smooth controls and gameplay.",
    tags: ["Python", "Game Logic", "OOP", "Collision Detection"],
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "Hotel Management System",
    icon: <Hotel size={22} className="text-primary" />,
    description:
      "A database-driven hotel management application with booking management, customer records, and room allocation features. Performs CRUD operations using MySQL.",
    tags: ["MySQL", "CRUD", "Database Design", "Python"],
    color: "from-violet-500/10 to-purple-500/10",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3 text-center">
          Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-center">
          Things I've Built
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          A collection of projects showcasing my skills in full stack development, Python, and database management.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-xl glass-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              data-testid={`project-card-${i}`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-accent">
                    {project.icon}
                  </div>
                  <a
                    href="https://github.com/Anumaan1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`project-github-${i}`}
                  >
                    <SiGithub size={18} />
                  </a>
                </div>

                <h3 className="font-bold text-foreground text-base mb-2" data-testid={`project-title-${i}`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-accent text-accent-foreground text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/Anumaan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            data-testid="projects-github-link"
          >
            <SiGithub size={16} />
            View all projects on GitHub
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
