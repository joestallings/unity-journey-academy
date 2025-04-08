
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ModuleGrid from '@/components/ModuleGrid';
import { modules } from '@/data/moduleData';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Search } from 'lucide-react';

const AllModules = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');
  
  const filteredModules = modules.filter(module => {
    const matchesSearch = module.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         module.description.toLowerCase().includes(searchTerm.toLowerCase());
                         
    if (filter === 'all') return matchesSearch;
    if (filter === 'completed') return matchesSearch && module.isCompleted;
    if (filter === 'in-progress') return matchesSearch && module.progress > 0 && !module.isCompleted;
    if (filter === 'not-started') return matchesSearch && module.progress === 0 && !module.isLocked;
    if (filter === 'locked') return matchesSearch && module.isLocked;
    
    return matchesSearch;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Course Modules</h1>
            <p className="text-muted-foreground text-lg max-w-3xl">
              Explore all modules in the Unity Journey Academy. Complete them in order to master Unity game development from basics to advanced topics.
            </p>
          </div>
          
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="text" 
                placeholder="Search modules..." 
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Modules</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="not-started">Not Started</SelectItem>
                <SelectItem value="locked">Locked</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          {filteredModules.length > 0 ? (
            <ModuleGrid modules={filteredModules} />
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground text-lg">No modules match your search criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AllModules;
