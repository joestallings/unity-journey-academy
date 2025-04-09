
export interface Module {
  id: number;
  title: string;
  description: string;
  duration: string;
  lessons: number;
  image: string;
  progress: number;
  isCompleted: boolean;
  isLocked: boolean;
  content?: string;
}

export const modules: Module[] = [
  {
    id: 0,
    title: "Introduction to Unity Journey",
    description: "Welcome to Unity Journey Academy! Learn about the course structure and prepare your development environment.",
    duration: "30 mins",
    lessons: 3,
    image: "https://images.unsplash.com/photo-1596863795217-78ef54b557b7?q=80&w=2066&auto=format&fit=crop",
    progress: 100,
    isCompleted: true,
    isLocked: false
  },
  {
    id: 1,
    title: "Unity Fundamentals",
    description: "Learn the core concepts of the Unity engine, including GameObjects, Components, and the Unity Editor interface.",
    duration: "3 hours",
    lessons: 8,
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2081&auto=format&fit=crop",
    progress: 75,
    isCompleted: false,
    isLocked: false
  },
  {
    id: 2,
    title: "Scripting in C#",
    description: "Get started with C# programming in Unity. Learn about variables, functions, classes, and common Unity scripting patterns.",
    duration: "4 hours",
    lessons: 10,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
    progress: 40,
    isCompleted: false,
    isLocked: false
  },
  {
    id: 3,
    title: "2D Game Development",
    description: "Learn to create 2D games with Unity, including sprites, animations, physics, and input handling for 2D environments.",
    duration: "6 hours",
    lessons: 12,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: false
  },
  {
    id: 4,
    title: "3D Game Development",
    description: "Dive into 3D game creation, covering models, materials, lighting, cameras, and navigation in 3D spaces.",
    duration: "8 hours",
    lessons: 15,
    image: "https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=2070&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
  {
    id: 5,
    title: "Physics and Interaction",
    description: "Implement realistic physics, collisions, triggers, and interactive elements in your Unity projects.",
    duration: "5 hours",
    lessons: 9,
    image: "https://images.unsplash.com/photo-1627856014754-2062a3264f95?q=80&w=1974&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
  {
    id: 6,
    title: "UI Systems",
    description: "Create engaging user interfaces with Unity's UI toolkit, including menus, HUDs, and interactive UI elements.",
    duration: "4 hours",
    lessons: 8,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2070&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
  {
    id: 7,
    title: "Audio Implementation",
    description: "Learn to add and manage sound effects, music, and audio mixing in your Unity games.",
    duration: "3 hours",
    lessons: 6,
    image: "https://images.unsplash.com/photo-1582121427803-c78a4ed6a748?q=80&w=2070&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
  {
    id: 8,
    title: "Advanced Graphics",
    description: "Enhance your game's visual appeal with shaders, particles, post-processing effects, and lighting techniques.",
    duration: "6 hours",
    lessons: 10,
    image: "https://images.unsplash.com/photo-1494537176433-7a3c4ef2046f?q=80&w=2072&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
  {
    id: 9,
    title: "Performance Optimization",
    description: "Learn techniques to optimize your Unity games for better performance across different platforms.",
    duration: "4 hours",
    lessons: 7,
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=1947&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
  {
    id: 10,
    title: "Course Conclusion",
    description: "Recap what you've learned and explore next steps in your Unity development journey.",
    duration: "1 hour",
    lessons: 3,
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop",
    progress: 0,
    isCompleted: false,
    isLocked: true
  },
];

export const getModuleById = async (id: number): Promise<Module | undefined> => {
  const module = modules.find(m => m.id === id);

  if (!module) {
    return undefined;
  }

  // Clone the module object
  const moduleWithContent = { ...module };

  try {
    // Load the markdown content dynamically
    const response = await fetch(`/src/data/markdown/module${id}.md`);
    if (!response.ok) {
      throw new Error(`Failed to fetch module content: ${response.status}`);
    }
    moduleWithContent.content = await response.text();
    return moduleWithContent;
  } catch (error) {
    console.error(`Error loading module content for id ${id}:`, error);
    return module; // Return module without content in case of error
  }
};
