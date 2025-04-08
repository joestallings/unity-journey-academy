
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CTASection from '@/components/CTASection';
import TestimonialsSection from '@/components/TestimonialsSection';
import { modules } from '@/data/moduleData';
import ModuleGrid from '@/components/ModuleGrid';

const Index = () => {
  // Show only the first 3 modules on the home page
  const featuredModules = modules.slice(0, 3);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <FeaturesSection />
        
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Modules</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Begin your learning journey with these introductory modules
              </p>
            </div>
            
            <ModuleGrid modules={featuredModules} />
            
            <div className="mt-10 text-center">
              <a 
                href="/modules" 
                className="inline-flex items-center text-primary hover:text-accent transition-colors font-medium"
              >
                View all modules
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        
        <TestimonialsSection />
        
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
