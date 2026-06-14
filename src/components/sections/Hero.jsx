import profile from '../../data/profile.json';
import { Button } from '../ui/Button';
import { Download, ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-primary font-mono text-sm sm:text-base mb-4 tracking-wider">
            Hello, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-text mb-4 leading-tight">
            {profile.name}
          </h1>

          {/* Title with gradient */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gradient mb-6">
            {profile.title}
          </h2>

          {/* Tagline */}
          <p className="text-text-secondary text-base sm:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            {profile.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="gradient" size="lg" href="#projects">
              View My Work
            </Button>
            <Button variant="secondary" size="lg" href={profile.resumeUrl}>
              <Download size={18} />
              Download Resume
            </Button>
            <Button variant="ghost" size="lg" href="#contact">
              Get In Touch
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About">
            <ChevronDown size={24} className="text-text-tertiary" />
          </a>
        </div>
      </div>
    </section>
  );
}
