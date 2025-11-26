import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Instagram, Github } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="container mx-auto max-w-6xl px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#home" className="text-2xl font-bold">
              Alex<span className="text-primary">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-sm font-medium hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-sm font-medium hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up space-y-6">
            <Badge variant="secondary" className="text-xs font-medium">
              Graphic Designer & Visual Storyteller
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Hi, I'm <span className="gradient-text">Alex</span>.
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I design bold, expressive visuals that help brands tell their story. From digital campaigns 
              to brand identity, I create designs that stand out and connect.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary/50 text-foreground hover:bg-primary/10">
                <a href="#contact">Download Resume</a>
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="glow-border bg-gradient-to-br from-card to-secondary p-8 md:p-12">
              <div className="aspect-square flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary animate-pulse" />
                  </div>
                  <p className="text-xl font-bold text-primary">Portfolio Preview</p>
                  <p className="text-sm text-muted-foreground">Crafting visual excellence</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-xs font-medium">About Me</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              Designing with <span className="gradient-text">purpose</span> and personality
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Alex, a graphic designer with a passion for bold color, clean layouts, and storytelling 
                through visuals. I've worked on branding, social media campaigns, print materials, and digital 
                experiences for clients across different industries.
              </p>
              <p>
                My process is collaborative and research-driven. I love turning rough ideas into polished 
                designs that feel intentional, memorable, and aligned with a brand's identity.
              </p>
            </div>
          </div>

          <Card className="bg-card border-border p-8 space-y-6">
            <h3 className="text-xl font-bold mb-4">Quick Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-medium">Based in:</p>
                  <p className="text-sm text-muted-foreground">New York, NY</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-medium">Experience:</p>
                  <p className="text-sm text-muted-foreground">4+ years in graphic design</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-medium">Focus:</p>
                  <p className="text-sm text-muted-foreground">Branding, Social Media, Digital Design</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <div>
                  <p className="font-medium">Available for:</p>
                  <p className="text-sm text-muted-foreground">Freelance & collaborations</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="space-y-6 mb-12">
          <Badge variant="secondary" className="text-xs font-medium">Skills</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Tools & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A snapshot of the tools and disciplines I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border p-6 hover-glow hover:border-primary/50 transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              Design & Branding
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Brand Identity</Badge>
              <Badge variant="secondary">Logo Design</Badge>
              <Badge variant="secondary">Visual Systems</Badge>
              <Badge variant="secondary">Layout & Composition</Badge>
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover-glow hover:border-primary/50 transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              Digital & UI
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Social Media Graphics</Badge>
              <Badge variant="secondary">Web Banners</Badge>
              <Badge variant="secondary">Landing Page Layouts</Badge>
              <Badge variant="secondary">UI Mockups</Badge>
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover-glow hover:border-primary/50 transition-all duration-300 group">
            <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Adobe Photoshop</Badge>
              <Badge variant="secondary">Adobe Illustrator</Badge>
              <Badge variant="secondary">Figma</Badge>
              <Badge variant="secondary">InDesign</Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="space-y-6 mb-12">
          <Badge variant="secondary" className="text-xs font-medium">Projects</Badge>
          <h2 className="text-4xl md:text-5xl font-bold">
            Selected <span className="gradient-text">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated selection of branding, digital, and campaign work. Each project is designed to 
            balance creativity with clear communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <Card className="group overflow-hidden bg-card border-border hover-glow hover:border-primary/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-primary/30 border border-primary" />
                  <p className="text-sm text-muted-foreground">Project Image</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Urban Brew Coffee Rebrand
              </h3>
              <p className="text-sm text-muted-foreground">
                A full visual identity refresh for a local coffee brand, including logo, packaging, and social templates.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Branding</Badge>
                <Badge variant="outline" className="text-xs">Packaging</Badge>
                <Badge variant="outline" className="text-xs">Social Media</Badge>
              </div>
            </div>
          </Card>

          {/* Project 2 */}
          <Card className="group overflow-hidden bg-card border-border hover-glow hover:border-primary/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-purple-500/20 to-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-purple-500/30 border border-purple-500" />
                  <p className="text-sm text-muted-foreground">Project Image</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Neon Nights Music Festival
              </h3>
              <p className="text-sm text-muted-foreground">
                Poster series and social campaign exploring bold neon color palettes and geometric typography.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Poster Design</Badge>
                <Badge variant="outline" className="text-xs">Campaign</Badge>
              </div>
            </div>
          </Card>

          {/* Project 3 */}
          <Card className="group overflow-hidden bg-card border-border hover-glow hover:border-primary/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-pink-500/20 to-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-pink-500/30 border border-pink-500" />
                  <p className="text-sm text-muted-foreground">Project Image</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Luma Studio Social Kit
              </h3>
              <p className="text-sm text-muted-foreground">
                Instagram and TikTok content templates built for a minimalist photography studio.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Social Media</Badge>
                <Badge variant="outline" className="text-xs">Content Design</Badge>
              </div>
            </div>
          </Card>

          {/* Project 4 */}
          <Card className="group overflow-hidden bg-card border-border hover-glow hover:border-primary/50 transition-all duration-300">
            <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-secondary relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-16 h-16 mx-auto rounded-lg bg-blue-500/30 border border-blue-500" />
                  <p className="text-sm text-muted-foreground">Project Image</p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                Portfolio Landing Page Concept
              </h3>
              <p className="text-sm text-muted-foreground">
                A conceptual landing page layout focused on clean hierarchy and bold typography.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">UI Layout</Badge>
                <Badge variant="outline" className="text-xs">Concept</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact / Footer Section */}
      <section id="contact" className="container mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Let's <span className="gradient-text">work together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind, or just want to say hi? I'm always open to new collaborations and ideas.
            </p>
          </div>

          <div className="pt-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
              <a href="mailto:alex@example.com">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6 pt-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50">
        <div className="container mx-auto max-w-6xl px-6 py-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Alex – Graphic Designer. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
