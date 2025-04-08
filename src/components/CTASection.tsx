
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 z-0" />
      <div className="absolute top-1/3 -left-24 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-1/3 -right-24 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Unity Journey?</h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Join thousands of students mastering Unity game development with our comprehensive, self-paced learning program.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-xl mx-auto">
            {[
              "Access to all 9 core modules",
              "Introduction and conclusion resources",
              "Project files and examples",
              "Self-paced learning experience"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-2 justify-center md:justify-start">
                <CheckCircle className="h-5 w-5 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/modules">
              <Button size="lg" className="px-8">Start Learning Now</Button>
            </Link>
            <Link to="/details">
              <Button variant="outline" size="lg">View Course Details</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
