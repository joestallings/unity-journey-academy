
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: TestimonialProps[] = [
  {
    name: "Alex Johnson",
    role: "Indie Game Developer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Unity Journey Academy transformed my approach to game development. The structured modules and hands-on projects helped me create my first published game!",
    rating: 5
  },
  {
    name: "Sophia Williams",
    role: "3D Artist",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "As someone from an art background, I was worried about learning the technical aspects of Unity. This course made the transition smooth and enjoyable.",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Computer Science Student",
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    content: "The self-paced structure worked perfectly with my busy schedule. I could focus on areas where I needed more practice while moving quickly through familiar concepts.",
    rating: 4
  }
];

const TestimonialCard: React.FC<{ testimonial: TestimonialProps }> = ({ testimonial }) => {
  return (
    <Card className="h-full">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-muted'}`} 
            />
          ))}
        </div>
        
        <p className="mb-6 italic">"{testimonial.content}"</p>
        
        <div className="flex items-center">
          <div className="mr-4">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="rounded-full w-12 h-12 object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Students Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied students who have transformed their Unity skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
