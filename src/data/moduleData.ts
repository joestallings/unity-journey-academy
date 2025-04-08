
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
    isLocked: false,
    content: `
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
`
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
    isLocked: false,
    content: `
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
`
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
    isLocked: false,
    content: `
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
`
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
    isLocked: false,
    content: `
# 2D Game Development

In this module, we'll explore the essential components of creating 2D games with Unity.

## Introduction to 2D in Unity

Unity provides powerful tools specifically designed for 2D game development:

* 2D sprite rendering and animation
* 2D physics system
* 2D-specific tools and workflows

## Working with Sprites

Sprites are the fundamental visual elements in 2D games:

1. Importing sprite assets
2. Configuring sprite properties
3. Creating sprite animations
4. Using sprite atlases for optimization

## 2D Animation

Learn how to bring your 2D characters and objects to life:

* Frame-by-frame animation
* Using the Animation window
* Creating animation controllers
* Implementing animation transitions

## 2D Physics

Implement realistic physics for your 2D games:

\`\`\`csharp
// Adding a Rigidbody2D to a sprite
Rigidbody2D rb = gameObject.AddComponent<Rigidbody2D>();
rb.gravityScale = 1.0f;
rb.mass = 1.0f;
rb.drag = 0.05f;
\`\`\`

## 2D Colliders and Triggers

* BoxCollider2D
* CircleCollider2D
* PolygonCollider2D
* Edge and Composite colliders
* Trigger events in 2D

## 2D Movement and Controls

Implement responsive movement for 2D characters:

\`\`\`csharp
void Update() 
{
    // Simple 2D movement
    float moveHorizontal = Input.GetAxis("Horizontal");
    Vector2 movement = new Vector2(moveHorizontal * speed, rigidbody2D.velocity.y);
    rigidbody2D.velocity = movement;
    
    // Simple jump
    if (Input.GetButtonDown("Jump") && isGrounded) {
        rigidbody2D.AddForce(new Vector2(0, jumpForce), ForceMode2D.Impulse);
    }
}
\`\`\`

## 2D Camera Systems

* Setting up orthographic cameras
* Camera follow scripts
* Implementing parallax scrolling
* Using Cinemachine for 2D cameras
`
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
    isLocked: true,
    content: `
# 3D Game Development

This module covers the fundamentals of creating 3D games in Unity, from working with 3D models to implementing complex navigation systems.

## Introduction to 3D in Unity

Key concepts for 3D game development:

* Coordinate systems (local vs. world space)
* 3D assets workflow
* 3D game design principles

## Working with 3D Models

Learn how to import and configure 3D models:

1. Importing 3D assets
2. Configuring model import settings
3. Understanding materials and textures
4. Using prefabs for 3D objects

## Materials and Shaders

Enhance your 3D visuals:

* Standard shader properties
* Creating custom materials
* Texture mapping (albedo, normal, metallic, etc.)
* PBR (Physically Based Rendering) workflows

## Lighting in 3D

Implement realistic lighting for your 3D scenes:

* Light types (directional, point, spot)
* Global Illumination concepts
* Lightmapping and real-time lighting
* Post-processing effects

## 3D Physics

Add realistic physics to your 3D objects:

\`\`\`csharp
// Basic 3D physics setup
Rigidbody rb = gameObject.AddComponent<Rigidbody>();
rb.mass = 2.0f;
rb.drag = 0.5f;
rb.angularDrag = 0.05f;
rb.useGravity = true;
\`\`\`

## Navigation in 3D Space

* NavMesh system overview
* Baking navigation meshes
* Creating NavMesh Agents
* Implementing pathfinding

## 3D Character Controllers

Implement player controls for 3D characters:

\`\`\`csharp
void Update()
{
    float horizontal = Input.GetAxis("Horizontal");
    float vertical = Input.GetAxis("Vertical");
    
    Vector3 direction = new Vector3(horizontal, 0, vertical).normalized;
    
    if (direction.magnitude >= 0.1f)
    {
        float targetAngle = Mathf.Atan2(direction.x, direction.z) * Mathf.Rad2Deg;
        transform.rotation = Quaternion.Euler(0f, targetAngle, 0f);
        
        controller.Move(direction * speed * Time.deltaTime);
    }
}
\`\`\`

## 3D Cameras

* Camera control systems
* First-person and third-person cameras
* Cinemachine implementation for 3D
* Camera transitions and effects
`
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
    isLocked: true,
    content: `
# Physics and Interaction

This module explores the Unity physics engine and how to create interactive gameplay elements.

## Unity Physics Overview

Understanding the core physics components:

* Rigidbodies (dynamic, kinematic, static)
* Colliders and collision matrices
* Physics materials
* Physics settings and optimization

## Advanced Collision Detection

* Collision vs. Trigger events
* LayerMask filtering
* Raycasting and Physics casts
* Collision callbacks and events

## Physics-Based Movement

Create realistic movement using physics:

\`\`\`csharp
void FixedUpdate()
{
    // Getting input
    float moveHorizontal = Input.GetAxis("Horizontal");
    float moveVertical = Input.GetAxis("Vertical");
    
    // Creating movement vector
    Vector3 movement = new Vector3(moveHorizontal, 0.0f, moveVertical);
    
    // Adding force to the rigidbody
    rigidBody.AddForce(movement * speed);
    
    // Applying drag to limit max speed
    if (rigidBody.velocity.magnitude > maxSpeed)
    {
        rigidBody.velocity = rigidBody.velocity.normalized * maxSpeed;
    }
}
\`\`\`

## Joints and Constraints

* Fixed joint
* Hinge joint
* Spring joint
* Configurable joint
* Character joint

## Interactive Objects

Implementing interactable game elements:

\`\`\`csharp
void OnTriggerEnter(Collider other)
{
    if (other.CompareTag("Player"))
    {
        // Show interaction prompt
        promptUI.SetActive(true);
        canInteract = true;
    }
}

void Update()
{
    if (canInteract && Input.GetKeyDown(KeyCode.E))
    {
        // Perform interaction
        Interact();
    }
}

void Interact()
{
    // Interaction logic here...
    Debug.Log("Player interacted with object!");
}
\`\`\`

## Ragdoll Physics

* Creating ragdoll characters
* Switching between animated and ragdoll states
* Partial ragdolls
* Blend between animation and physics

## Physical Materials and Effects

* Creating and configuring physics materials
* Particle effects triggered by physics
* Sound effects based on collision force
* Surface-specific responses
`
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
    isLocked: true,
    content: `
# UI Systems

This module covers Unity's UI systems and how to create effective user interfaces for your games.

## Unity UI Overview

Understanding the core UI components:

* Canvas and Canvas Scaler
* UI Components (Text, Image, Button, etc.)
* Layout Groups and Anchors
* Event System and Input handling

## Responsive UI Design

Learn how to create interfaces that work across different screen sizes:

* Working with anchors and pivot points
* Using layout groups (Horizontal, Vertical, Grid)
* Content size fitters
* Safe areas for mobile devices

## Interactive UI Elements

Creating functional UI controls:

\`\`\`csharp
// Button click handler
public void OnStartButtonClick()
{
    audioSource.PlayOneShot(buttonClickSound);
    StartCoroutine(LoadGameWithDelay(1.0f));
}

IEnumerator LoadGameWithDelay(float delay)
{
    // Show loading animation
    loadingPanel.SetActive(true);
    
    yield return new WaitForSeconds(delay);
    
    // Load game scene
    SceneManager.LoadScene("GameplayScene");
}
\`\`\`

## Menus and Navigation

* Creating menu systems
* Managing navigation between screens
* UI transitions and animations
* Menu state management

## In-Game HUDs

Implementing effective heads-up displays:

* Health bars and status indicators
* Mini-maps
* Objective markers
* Inventory displays

## UI Animation

* Animation components for UI
* Tweening libraries
* UI state transitions
* Animated feedback for user actions

## Data Binding and Dynamic UI

Connect your UI to game data:

\`\`\`csharp
void UpdatePlayerStats(PlayerStats stats)
{
    // Update UI elements based on player stats
    healthBar.fillAmount = stats.currentHealth / stats.maxHealth;
    staminaBar.fillAmount = stats.currentStamina / stats.maxStamina;
    experienceText.text = $"XP: {stats.currentXP}/{stats.xpToNextLevel}";
    levelText.text = $"Level {stats.playerLevel}";
}
\`\`\`

## Accessibility Considerations

* Text scaling and readability
* Color blindness support
* Control remapping
* Audio cues and text alternatives
`
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
    isLocked: true,
    content: `
# Audio Implementation

This module covers audio systems in Unity and techniques for creating an immersive sound experience.

## Audio Fundamentals

Understanding the core audio components:

* Audio Listener and Audio Source
* Audio Mixer and Audio Groups
* 2D vs. 3D sound
* Audio file formats and compression

## Background Music Systems

Implementing music systems for your game:

\`\`\`csharp
public class MusicManager : MonoBehaviour
{
    [SerializeField] private AudioClip[] musicTracks;
    [SerializeField] private float crossFadeDuration = 2.0f;
    
    private AudioSource[] audioSources;
    private int activeTrack = 0;
    private int nextTrack = 1;
    
    private void Start()
    {
        // Set up two audio sources for crossfading
        audioSources = new AudioSource[2];
        audioSources[0] = gameObject.AddComponent<AudioSource>();
        audioSources[1] = gameObject.AddComponent<AudioSource>();
        
        // Start playing the first track
        PlayTrack(0);
    }
    
    public void PlayTrack(int trackIndex)
    {
        // Implement track switching with crossfade
        // ...
    }
}
\`\`\`

## Sound Effects

Managing sound effects in your game:

* One-shot vs. looping sounds
* Positional audio for 3D environments
* Creating sound effect variations
* Sound effect pooling for performance

## Audio Mixing and DSP Effects

* Creating mixer groups
* Applying effects (reverb, echo, filters)
* Dynamic mixing based on game state
* Snapshot transitions

## Adaptive Audio Systems

Creating dynamic audio that responds to gameplay:

\`\`\`csharp
void UpdateCombatMusic(int enemyCount, float playerHealth)
{
    // Adjust music intensity based on combat situation
    float intensity = Mathf.Clamp01(enemyCount / 10f * (1f - playerHealth/100f));
    
    // Adjust mixer parameters
    combatMixer.SetFloat("Intensity", intensity);
    combatMixer.SetFloat("PercussionVolume", Mathf.Lerp(-80f, 0f, intensity));
    
    // Trigger stingers if needed
    if (intensity > 0.8f && !highIntensityStingerPlayed)
    {
        PlayAudioStinger(highIntensityStinger);
        highIntensityStingerPlayed = true;
    }
}
\`\`\`

## Voice Acting Integration

* Dialogue systems and voice-over
* Subtitles and localization support
* Voice asset management
* Lip-syncing techniques
`
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
    isLocked: true,
    content: `
# Advanced Graphics

This module covers advanced visual techniques to enhance the look and feel of your Unity projects.

## Shader Programming Basics

Understanding shader development in Unity:

* Shader types (Surface, Vertex/Fragment, Compute)
* ShaderLab syntax
* Shader properties and material editors
* Shader variants and keywords

## Custom Shader Development

Create your own visual effects with custom shaders:

\`\`\`hlsl
Shader "Custom/WaterShader"
{
    Properties
    {
        _Color ("Color", Color) = (0,0.5,1,1)
        _MainTex ("Main Texture", 2D) = "white" {}
        _WaveSpeed ("Wave Speed", Range(0,10)) = 1
        _WaveHeight ("Wave Height", Range(0,1)) = 0.1
    }
    
    SubShader
    {
        Tags { "RenderType"="Transparent" "Queue"="Transparent" }
        LOD 100
        Blend SrcAlpha OneMinusSrcAlpha
        
        Pass
        {
            CGPROGRAM
            #pragma vertex vert
            #pragma fragment frag
            
            // Vertex and fragment shader code here...
            
            ENDCG
        }
    }
}
\`\`\`

## Particle Systems

Create dynamic visual effects:

* Particle system modules (emission, shape, color)
* Particle system optimization
* Sub-emitter systems
* GPU instancing for particles

## Post-Processing Effects

Enhance your camera output:

* Post-processing profiles and volumes
* Common effects (bloom, depth of field, chromatic aberration)
* Color grading and LUTs
* Screen-space effects (reflections, ambient occlusion)

## Advanced Lighting Techniques

* Light probes and reflection probes
* Baked vs. real-time global illumination
* Volume lighting and light cookies
* HDR lighting and tonemapping

## Visual Effects Graph

Using Unity's VFX Graph system:

\`\`\`csharp
public class VFXController : MonoBehaviour
{
    [SerializeField] private VisualEffect impactVFX;
    [SerializeField] private VisualEffect trailVFX;
    
    public void TriggerImpact(Vector3 position, float intensity)
    {
        // Spawn and configure a visual effect
        VisualEffect instance = Instantiate(impactVFX, position, Quaternion.identity);
        instance.SetFloat("Intensity", intensity);
        instance.Play();
        
        // Auto-destroy after effect duration
        float lifetime = instance.GetFloat("EffectDuration");
        Destroy(instance.gameObject, lifetime);
    }
}
\`\`\`

## Cinematic Effects

* Cinemachine integration with visual effects
* Camera sequencing and timeline
* Motion blur and film grain
* Lens flares and screen effects

## Environment Visual Techniques

* Skybox creation and day/night cycles
* Volumetric fog and atmospheric effects
* Terrain shading and blending
* Water rendering techniques
`
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
    isLocked: true,
    content: `
# Performance Optimization

This module covers techniques to optimize your Unity games for various platforms and hardware configurations.

## Performance Profiling

Learn how to diagnose performance issues:

* Using the Unity Profiler
* Frame debugger
* Memory profiler
* Build analysis

## CPU Optimization

Improve code and logic performance:

\`\`\`csharp
// Before optimization
void Update()
{
    foreach (Enemy enemy in FindObjectsOfType<Enemy>())
    {
        enemy.CheckPlayerDistance(player.position);
    }
}

// After optimization
private List<Enemy> cachedEnemies = new List<Enemy>();

void Start()
{
    cachedEnemies.AddRange(FindObjectsOfType<Enemy>());
}

void Update()
{
    foreach (Enemy enemy in cachedEnemies)
    {
        enemy.CheckPlayerDistance(player.position);
    }
}
\`\`\`

## GPU Optimization

Enhance rendering performance:

* Draw call batching
* Level of Detail (LOD) systems
* Occlusion culling
* Shader complexity and variants

## Memory Management

Prevent memory issues in your game:

* Asset loading and unloading
* Pooling systems for reusable objects
* Addressable assets
* Memory footprint reduction

## Mobile Optimization

Specific techniques for mobile platforms:

\`\`\`csharp
public class MobileOptimizer : MonoBehaviour
{
    [SerializeField] private int targetFrameRate = 60;
    [SerializeField] private bool disableShadows = false;
    [SerializeField] private int qualityLevel = 2;
    
    void Awake()
    {
        // Set application target frame rate
        Application.targetFrameRate = targetFrameRate;
        
        // Configure quality settings for mobile
        QualitySettings.SetQualityLevel(qualityLevel);
        
        // Disable shadows on mobile if needed
        if (disableShadows)
        {
            QualitySettings.shadows = ShadowQuality.Disable;
        }
    }
}
\`\`\`

## Build Size Optimization

Reduce your game's installation size:

* Asset compression settings
* Texture atlasing
* Audio compression
* Asset bundle optimization

## Platform-Specific Optimizations

* Console-specific considerations
* PC scalability options
* VR performance requirements
* Cloud streaming optimizations
`
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
    isLocked: true,
    content: `
# Course Conclusion

Congratulations on completing the Unity Journey Academy! This final module recaps what you've learned and provides guidance for your continued growth as a Unity developer.

## Course Review

Let's review the main topics covered throughout this journey:

* Unity fundamentals and interface navigation
* C# programming fundamentals for Unity
* 2D and 3D game development techniques
* Physics systems and interactive elements
* UI design and implementation
* Audio systems and sound design
* Advanced graphics and visual effects
* Performance optimization strategies

## Your First Complete Project

Guidelines for creating your first complete Unity project:

1. Start small with a focused concept
2. Plan your development pipeline
3. Create a minimum viable product (MVP)
4. Iterate based on feedback
5. Polish and refine your game

## Development Best Practices

\`\`\`csharp
// Example of well-structured component code
using UnityEngine;

[RequireComponent(typeof(Rigidbody))]
public class PlayerController : MonoBehaviour
{
    [Header("Movement Settings")]
    [SerializeField] private float moveSpeed = 5f;
    [SerializeField] private float jumpForce = 5f;
    [Tooltip("Controls how quickly the player reaches maximum speed")]
    [Range(0.1f, 1f)]
    [SerializeField] private float acceleration = 0.5f;
    
    [Header("Ground Detection")]
    [SerializeField] private Transform groundCheck;
    [SerializeField] private float groundCheckRadius = 0.2f;
    [SerializeField] private LayerMask groundLayer;
    
    private Rigidbody rb;
    private bool isGrounded;
    private Vector3 moveDirection;
    
    private void Awake()
    {
        rb = GetComponent<Rigidbody>();
    }
    
    // Further implementation...
}
\`\`\`

## Next Steps in Your Unity Journey

Where to go from here:

* Specialization paths (gameplay programmer, technical artist, etc.)
* Advanced Unity features to explore
* Community involvement and knowledge sharing
* Resources for continued learning

## Publishing Your Games

Overview of publishing platforms and considerations:

* Mobile app stores (Apple App Store, Google Play)
* PC platforms (Steam, Epic Games Store)
* Console development and publishing
* Web and alternative platforms

## Final Thoughts

Remember that game development is both an art and a science. As you continue your journey, focus on:

* Building a strong portfolio of projects
* Contributing to game jams and community events
* Networking with other developers
* Continuously learning and adapting to new technologies

We wish you the best of luck in your Unity development career!
`
  },
];

export const getModuleById = (id: number): Module | undefined => {
  return modules.find(module => module.id === id);
};
