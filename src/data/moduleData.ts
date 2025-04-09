
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
    // Fix: Update the path to properly access the markdown files in the deployed app
    // We're now using a relative path from the root instead of trying to access the src directory
    const response = await fetch(`/data/markdown/module${id}.md`);
    if (!response.ok) {
      console.error(`Failed to fetch module content for id ${id}: ${response.status}`);
      throw new Error(`Failed to fetch module content: ${response.status}`);
    }
    moduleWithContent.content = await response.text();
    return moduleWithContent;
  } catch (error) {
    console.error(`Error loading module content for id ${id}:`, error);
    // Return module with the content from our predefined markdown data if available
    if (id === 0) {
      moduleWithContent.content = module0Content;
    } else if (id === 1) {
      moduleWithContent.content = module1Content;
    } else if (id === 2) {
      moduleWithContent.content = module2Content;
    } else {
      // Still return the module but with a friendly error message as content
      moduleWithContent.content = `# Module ${id}: ${module.title}\n\nWe're currently experiencing issues loading this content. Please try refreshing the page or check back later.`;
    }
    return moduleWithContent; 
  }
};

// Add fallback content for the first few modules
const module0Content = `
# Introduction to Unity Journey Academy

Welcome to the Unity Journey Academy! This introductory module will help you prepare for your learning adventure.

## What You'll Learn

* Course overview and structure
* Setting up your development environment
* Unity interface basics
* Planning your learning path

## Setting Up Your Environment

Before diving into Unity development, let's make sure your system is properly configured:

1. Download and install Unity Hub
2. Install the recommended Unity version (2021.3 LTS)
3. Configure your editor preferences

## Unity Interface Overview

The Unity interface consists of several key windows:

* **Scene View**: Where you build and visualize your game world
* **Game View**: Preview of what players will see
* **Hierarchy Panel**: Lists all objects in your scene
* **Project Panel**: Contains all assets in your project
* **Inspector**: View and modify properties of selected objects

## Your Learning Path

This course consists of 9 main modules plus this introduction and a conclusion. Each module builds upon the previous ones, creating a comprehensive learning journey.
`;

const module1Content = `
# Unity Fundamentals

In this module, we'll cover the core concepts and components that make up the Unity engine.

## GameObjects and Components

Unity uses a component-based architecture where everything in your game is a GameObject with various Components attached.

### Key Concepts:

* **GameObjects**: The base objects in your scene
* **Components**: Building blocks that add functionality
* **Transform Component**: Controls position, rotation, and scale

## The Unity Editor Interface

The Unity Editor is where you'll spend most of your development time. Let's explore its main sections:

* Scene view - For building your game visually
* Game view - For testing how your game looks to players
* Hierarchy panel - Lists all GameObjects in the current scene
* Project panel - Shows all assets in your project
* Inspector - Displays and allows editing of selected object properties

## Working with Prefabs

Prefabs are reusable GameObject templates that allow you to:

1. Create multiple instances of complex objects
2. Update all instances by modifying the original prefab
3. Override specific properties on individual instances

## Scene Management

Understanding how to work with scenes is essential:

* Creating new scenes
* Saving and loading scenes
* Building scene hierarchies
* Using multiple scenes in your game
`;

const module2Content = `
# Scripting in C#

C# is the primary programming language for Unity development. In this module, you'll learn the fundamentals of C# and how to use it within Unity.

## C# Basics

Let's start with the core concepts of C#:

* Variables and data types
* Functions and methods
* Classes and objects
* Control flow (if statements, loops)

## MonoBehaviour Lifecycle

Understanding the Unity script lifecycle is crucial:

\`\`\`csharp
using UnityEngine;

public class ExampleScript : MonoBehaviour
{
    // Called before the first frame update
    void Start()
    {
        Debug.Log("Game starting!");
    }

    // Called once per frame
    void Update()
    {
        Debug.Log("Frame update: " + Time.deltaTime);
    }
}
\`\`\`

## Input Handling

Learn how to respond to player input in your games:

\`\`\`csharp
void Update()
{
    // Keyboard input
    if (Input.GetKeyDown(KeyCode.Space))
    {
        Jump();
    }
    
    // Mouse input
    if (Input.GetMouseButtonDown(0))
    {
        Shoot();
    }
    
    // Movement input
    float horizontal = Input.GetAxis("Horizontal");
    float vertical = Input.GetAxis("Vertical");
    Move(horizontal, vertical);
}
\`\`\`

## Working with Components

Access and modify components on GameObjects:

\`\`\`csharp
// Get a component on this GameObject
Rigidbody rb = GetComponent<Rigidbody>();
rb.AddForce(Vector3.up * 10f);

// Get a component on another GameObject
GameObject player = GameObject.Find("Player");
PlayerHealth health = player.GetComponent<PlayerHealth>();
health.TakeDamage(10);
\`\`\`
`;
