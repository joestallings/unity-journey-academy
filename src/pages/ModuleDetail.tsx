
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { getModuleById, modules } from '@/data/moduleData';
import { ChevronLeft, ChevronRight, Check, Lock, BookOpen } from 'lucide-react';
import MarkdownRenderer from '@/components/MarkdownRenderer';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const ModuleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const moduleId = id ? parseInt(id) : -1;
  
  const [module, setModule] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [nextModule, setNextModule] = useState<any>(null);
  const [prevModule, setPrevModule] = useState<any>(null);
  const [contentError, setContentError] = useState<boolean>(false);
  
  useEffect(() => {
    const loadModule = async () => {
      setLoading(true);
      setContentError(false);
      try {
        // Load the current module with content
        const moduleData = await getModuleById(moduleId);
        
        if (!moduleData) {
          navigate('/modules');
          toast({
            title: "Module not found",
            description: "The requested module could not be found.",
            variant: "destructive"
          });
          return;
        }
        
        // Check if content is actually available
        if (!moduleData.content || moduleData.content.trim() === '') {
          setContentError(true);
        }
        
        setModule(moduleData);
        
        // Load neighboring modules (without content)
        const nextIndex = moduleId + 1;
        const prevIndex = moduleId - 1;
        
        if (nextIndex < modules.length) {
          const next = modules.find(m => m.id === nextIndex);
          if (next) setNextModule(next);
        }
        
        if (prevIndex >= 0) {
          const prev = modules.find(m => m.id === prevIndex);
          if (prev) setPrevModule(prev);
        }
      } catch (error) {
        console.error("Error loading module:", error);
        setContentError(true);
        toast({
          title: "Failed to load module",
          description: "There was a problem loading the module content.",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };
    
    loadModule();
    // Scroll to top when module changes
    window.scrollTo(0, 0);
  }, [moduleId, navigate, toast]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin inline-block w-8 h-8 border-4 border-current border-t-transparent text-primary rounded-full" role="status">
              <span className="sr-only">Loading...</span>
            </div>
            <p className="mt-4 text-muted-foreground">Loading module content...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
  
  if (!module) return null;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-wrap items-center gap-4">
            <Link to="/modules">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <ChevronLeft className="h-4 w-4" />
                All Modules
              </Button>
            </Link>
            
            <div className="flex items-center gap-2">
              <Progress value={module.progress} className="w-24 h-2" />
              <span className="text-sm text-muted-foreground">{module.progress}% complete</span>
            </div>
            
            {module.isCompleted && (
              <Badge variant="outline" className="ml-auto bg-accent/10 text-accent border-accent flex items-center gap-1">
                <Check className="h-3 w-3" />
                Completed
              </Badge>
            )}
            
            {module.isLocked && (
              <Badge variant="outline" className="ml-auto bg-muted border-muted-foreground flex items-center gap-1">
                <Lock className="h-3 w-3" />
                Locked
              </Badge>
            )}
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{module.title}</h1>
              
              <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-6">
                <img
                  src={module.image}
                  alt={module.title}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <BookOpen className="h-4 w-4" />
                  <span>{module.lessons} lessons</span>
                </div>
                <div className="text-muted-foreground">
                  Duration: {module.duration}
                </div>
              </div>
              
              {module.content && !contentError ? (
                <MarkdownRenderer content={module.content} />
              ) : (
                <div className="p-8 text-center border rounded-lg">
                  <p className="text-muted-foreground">
                    {contentError 
                      ? "We're having trouble loading this content. Please try refreshing the page."
                      : "Detailed content for this module will be available soon."}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-4" 
                    onClick={() => window.location.reload()}
                  >
                    Refresh Page
                  </Button>
                </div>
              )}
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-card border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Module Navigation</h3>
                
                <div className="space-y-4">
                  {prevModule && (
                    <Link to={`/module/${prevModule.id}`}>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <ChevronLeft className="h-4 w-4" />
                        <div className="text-left">
                          <div className="text-xs text-muted-foreground">Previous</div>
                          <div className="truncate max-w-[200px]">{prevModule.title}</div>
                        </div>
                      </Button>
                    </Link>
                  )}
                  
                  {nextModule && !nextModule.isLocked && (
                    <Link to={`/module/${nextModule.id}`}>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <div className="text-left">
                          <div className="text-xs text-muted-foreground">Next</div>
                          <div className="truncate max-w-[200px]">{nextModule.title}</div>
                        </div>
                        <ChevronRight className="h-4 w-4 ml-auto" />
                      </Button>
                    </Link>
                  )}
                  
                  {nextModule && nextModule.isLocked && (
                    <Button variant="outline" className="w-full justify-start gap-2" disabled>
                      <div className="text-left">
                        <div className="text-xs text-muted-foreground">Next (Locked)</div>
                        <div className="truncate max-w-[200px]">{nextModule.title}</div>
                      </div>
                      <Lock className="h-4 w-4 ml-auto" />
                    </Button>
                  )}
                  
                  <div className="pt-4">
                    <Button className="w-full">
                      Mark as Complete
                    </Button>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-primary hover:underline">Unity Official Documentation</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">Additional Learning Materials</a>
                    </li>
                    <li>
                      <a href="#" className="text-primary hover:underline">Project Files</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t">
            <h2 className="text-2xl font-bold mb-6">Continue Your Learning Journey</h2>
            
            <div className="flex flex-col md:flex-row gap-6 justify-between">
              {prevModule && (
                <Link to={`/module/${prevModule.id}`} className="flex-1">
                  <div className="border rounded-lg p-4 hover:border-primary transition-colors h-full">
                    <div className="flex items-center gap-2 mb-2 text-muted-foreground">
                      <ChevronLeft className="h-4 w-4" />
                      <span>Previous Module</span>
                    </div>
                    <h3 className="font-medium text-lg">{prevModule.title}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">{prevModule.description}</p>
                  </div>
                </Link>
              )}
              
              {nextModule && !nextModule.isLocked && (
                <Link to={`/module/${nextModule.id}`} className="flex-1">
                  <div className="border rounded-lg p-4 hover:border-primary transition-colors h-full">
                    <div className="flex items-center justify-end gap-2 mb-2 text-muted-foreground">
                      <span>Next Module</span>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                    <h3 className="font-medium text-lg">{nextModule.title}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">{nextModule.description}</p>
                  </div>
                </Link>
              )}
              
              {nextModule && nextModule.isLocked && (
                <div className="flex-1">
                  <div className="border rounded-lg p-4 bg-muted/20 h-full">
                    <div className="flex items-center justify-end gap-2 mb-2 text-muted-foreground">
                      <span>Next Module (Locked)</span>
                      <Lock className="h-4 w-4" />
                    </div>
                    <h3 className="font-medium text-lg">{nextModule.title}</h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2">{nextModule.description}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ModuleDetail;
