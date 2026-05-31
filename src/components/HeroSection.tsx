import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    {/* Animated background orbs */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] animate-pulse" style={{ animationDelay: "2s" }} />
    </div>

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Available for opportunities</span>
          </div>

          <h1
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up leading-tight"
            style={{ animationDelay: "0.1s" }}
          >
            Hi, I'm{" "}
            <span className="gradient-text">Kore</span>
            <br />
            <span className="gradient-text">Upendar</span>
          </h1>

          <p
            className="text-xl sm:text-2xl text-muted-foreground mb-2 animate-fade-in-up font-heading font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            AI Engineer
          </p>
          <p
            className="text-lg text-primary/80 mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            AI Enthusiast &bull; Cloud Explorer
          </p>

          <p
            className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up text-base leading-relaxed"
            style={{ animationDelay: "0.3s" }}
          >
            Building smart solutions with code and creativity. Passionate about
            crafting seamless digital experiences that make an impact.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="group relative px-7 py-3.5 rounded-xl font-semibold text-primary-foreground overflow-hidden transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a
              href="#contact"
              className="glass-card px-7 py-3.5 rounded-xl font-semibold text-foreground hover:text-primary transition-colors !transform-none"
            >
              Contact Me
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex gap-3 justify-center lg:justify-start animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            {[
              { icon: Github, href: "https://github.com/", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/feed/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:koreupendar12345@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl border border-border bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right – profile image */}
        <div className="flex-shrink-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="relative">
            {/* Outer glow rings */}
            <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 blur-2xl animate-pulse" />
            <div className="absolute -inset-3 rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
            <div className="absolute -inset-8 rounded-full border border-secondary/5 animate-[spin_30s_linear_infinite_reverse]" />

            {/* Decorative dots */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary/60 blur-[2px] animate-pulse" />
            <div className="absolute -bottom-3 -left-3 w-3 h-3 rounded-full bg-secondary/50 blur-[2px] animate-pulse" style={{ animationDelay: "1s" }} />

            {/* Image container */}
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-primary via-secondary to-accent animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-background p-0.5">
                <img
                  src={profileImg}
                  alt="Kore Upendar"
                  className="w-full h-full object-cover object-top rounded-full"
                  width={512}
                  height={512}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  </section>
);

export default HeroSection;
