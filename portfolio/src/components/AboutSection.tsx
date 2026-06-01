const skills = ["Java", "Python", "React", "AI/ML", "Cloud Computing", "JavaScript", "TypeScript", "Node.js"];

const AboutSection = () => (
  <section id="about" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
        About <span className="gradient-text">Me</span>
      </h2>
      <div className="max-w-3xl mx-auto text-center mb-10">
        <p className="text-muted-foreground text-lg leading-relaxed">
          I'm a B.Tech CSE student passionate about building innovative solutions at the intersection of
          AI/ML and Cloud Computing. I love creating full-stack applications that solve real-world problems
          and constantly explore new technologies to expand my skill set.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="glass-card px-5 py-2.5 text-sm font-medium text-foreground cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
