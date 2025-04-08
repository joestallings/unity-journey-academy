
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Menu, User, LogIn, BookOpen } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = React.useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-gradient-to-br from-primary to-accent w-10 h-10 rounded-lg flex items-center justify-center">
            <BookOpen className="text-white h-6 w-6" />
          </div>
          <span className="font-montserrat font-bold text-xl">Unity Journey</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/modules" className="font-medium hover:text-primary transition-colors">Courses</Link></li>
              <li><Link to="/about" className="font-medium hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/faq" className="font-medium hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </nav>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              <span>Log In</span>
            </Button>
            <Button size="sm" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>Sign Up</span>
            </Button>
          </div>
        </div>
        
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/modules">Courses</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/about">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/faq">FAQ</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/login">Log In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/signup">Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
