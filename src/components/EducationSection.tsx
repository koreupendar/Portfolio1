import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <section id="education" className="py-20">
    <div className="container mx-auto px-6">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
        <span className="gradient-text">Education</span>
      </h2>
      <div className="max-w-xl mx-auto glass-card p-8 gradient-border text-center">
        <GraduationCap className="mx-auto mb-4 text-primary" size={40} />
        <h3 className="font-heading text-xl font-semibold text-foreground mb-1">
          B.Tech — Computer Science & Engineering
        </h3>
        <p className="text-muted-foreground mb-2">2022 – 2026</p>
        <div className="h-px w-16 mx-auto bg-primary/30 my-4" />
        <p className="text-lg font-medium text-primary">CGPA: 7.5</p>
      </div>
    </div>
  </section>
);

export default EducationSection;
