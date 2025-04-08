
import React from 'react';
import { BookOpen, Code, Layout, Monitor, Puzzle, Shield, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <Card className="relative overflow-hidden border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-accent"></div>
    <CardContent className="pt-6">
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="mb-2 font-bold text-xl">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
);

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <BookOpen />,
      title: "9 Comprehensive Modules",
      description: "Structured learning path with detailed modules covering all aspects of Unity development."
    },
    {
      icon: <Zap />,
      title: "Self-Paced Learning",
      description: "Learn at your own pace with accessible content available whenever you need it."
    },
    {
      icon: <Code />,
      title: "Practical Examples",
      description: "Real-world code examples and projects to reinforce your understanding."
    },
    {
      icon: <Monitor />,
      title: "Interactive Lessons",
      description: "Engage with interactive content designed to make learning fun and effective."
    },
    {
      icon: <Puzzle />,
      title: "Project-Based Learning",
      description: "Build your portfolio with guided projects throughout the course."
    },
    {
      icon: <Users />,
      title: "Community Support",
      description: "Connect with fellow students to share ideas and get help when needed."
    },
    {
      icon: <Layout />,
      title: "Responsive Interface",
      description: "Access your course content on any device with our mobile-friendly design."
    },
    {
      icon: <Shield />,
      title: "Lifetime Access",
      description: "One-time payment for unlimited access to all course materials and updates."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Master Unity</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our comprehensive course is designed to take you from beginner to professional with these amazing features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
