import { Code2, Terminal, Globe, GitBranch } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2, desc: "OOP, Spring Boot, Enterprise" },
  { name: "Python", icon: Terminal, desc: "AI/ML, Data Science, Scripting" },
  { name: "HTML & CSS", icon: Globe, desc: "Responsive Design, Tailwind" },
  { name: "Git & VS Code", icon: GitBranch, desc: "Version Control, DevTools" },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto">
        {skills.map((s) => (
          <div key={s.name} className="glass-card p-6 flex flex-col items-center text-center gradient-border group">
            <s.icon className="text-primary group-hover:scale-110 transition-transform mb-3" size={36} />
            <h3 className="font-heading font-semibold text-foreground">{s.name}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
