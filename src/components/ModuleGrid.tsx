
import React from 'react';
import ModuleCard, { ModuleProps } from './ModuleCard';

interface ModuleGridProps {
  modules: ModuleProps[];
}

const ModuleGrid: React.FC<ModuleGridProps> = ({ modules }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((module) => (
        <ModuleCard key={module.id} module={module} />
      ))}
    </div>
  );
};

export default ModuleGrid;
