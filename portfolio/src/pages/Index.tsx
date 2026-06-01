import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionObserver from "@/components/SectionObserver";

const Index = () => (
  <div className="relative min-h-screen overflow-x-hidden">
    <div className="bg-glow" />
    <Navbar />
    <HeroSection />
    <div className="section-reveal"><AboutSection /></div>
    <div className="section-reveal"><ProjectsSection /></div>
    <div className="section-reveal"><SkillsSection /></div>
    <div className="section-reveal"><EducationSection /></div>
    <div className="section-reveal"><ContactSection /></div>
    <Footer />
    <SectionObserver />
  </div>
);

export default Index;
