import { Github } from "lucide-react";

const projects = [
  {
    title: "Password Management System",
    description: "A secure password manager with encryption, auto-generation, and multi-device sync capabilities.",
    tech: ["Java", "Spring Boot", "MySQL"],
    github: "https://github.com/koreupendar/password-management-HCJS",
  },
  {
    title: "Handwritten Digit Recognition",
    description: "Deep learning model achieving 98%+ accuracy on MNIST dataset with a real-time drawing canvas.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/koreupendar/Handwritten-Digit-Recognition",
  },
  {
    title: "AI Customer Support ChatGPT",
    description: "An intelligent chatbot powered by NLP for automated customer support with context-aware responses.",
    tech: ["Python", "OpenAI", "React"],
  },
  {
    title: "SwapSkills Platform",
    description: "A peer-to-peer skill exchange platform connecting learners with complementary expertise.",
    tech: ["React", "Node.js", "MongoDB"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Projects</span>
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="glass-card p-6 flex flex-col gradient-border">
            <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">{p.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/15 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 px-4 py-2 rounded-md text-sm font-medium border border-border text-foreground hover:bg-muted transition-colors">
                  <Github size={14} /> GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
