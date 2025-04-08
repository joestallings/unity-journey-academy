
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="relative pt-20 pb-10 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-accent/20 rounded-full filter blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4 animate-fade-in">
              The Complete Self-Paced Learning Experience
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Master <span className="text-primary">Unity</span> Game Development
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Learn Unity from the ground up with our comprehensive, self-paced course designed for beginners and intermediate developers.
            </p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/modules">
                <Button size="lg" className="gap-2">
                  Start Learning
                  <ChevronRight size={16} />
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="gap-2">
                <Play size={16} className="text-primary" />
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center justify-center md:justify-start mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center border-2 border-background">
                    <span className="font-medium">{i}</span>
                  </div>
                ))}
              </div>
              <span className="ml-3">Join <span className="font-semibold">2,500+</span> students</span>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-10">
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="aspect-video bg-gradient-to-br from-primary to-accent/80 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center animate-pulse-glow">
                  <Play className="h-6 w-6 text-primary ml-1" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
