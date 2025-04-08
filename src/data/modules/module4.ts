
export const module4Content = `
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
`;
