
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Lock, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ModuleProps {
  id: number;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  image: string;
  progress: number;
  isCompleted: boolean;
  isLocked: boolean;
}

interface ModuleCardProps {
  module: ModuleProps;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  return (
    <Link to={`/module/${module.id}`}>
      <Card className="module-card h-full overflow-hidden">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={module.image}
            alt={module.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {module.isLocked && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70">
              <Lock className="h-10 w-10 text-white/70" />
            </div>
          )}
          {module.isCompleted && (
            <div className="absolute right-2 top-2">
              <Badge className="bg-accent text-accent-foreground">
                <CheckCircle className="mr-1 h-3 w-3" />
                Completed
              </Badge>
            </div>
          )}
        </div>
        
        <CardHeader className="pb-2">
          <div className="flex justify-between">
            <Badge variant="outline" className="flex items-center gap-1 mb-2">
              <PlayCircle className="h-3 w-3" /> {module.lessons} lessons
            </Badge>
            <Badge variant="secondary">{module.duration}</Badge>
          </div>
          <CardTitle>{module.title}</CardTitle>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground line-clamp-2">{module.description}</p>
        </CardContent>
        
        <CardFooter>
          <div className="w-full">
            <div className="progress-bg">
              <div 
                className="progress-bar" 
                style={{ width: `${module.progress}%` }}
              ></div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-muted-foreground">
              <span>Progress</span>
              <span>{module.progress}%</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ModuleCard;
