
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

```csharp
// Adding a Rigidbody2D to a sprite
Rigidbody2D rb = gameObject.AddComponent<Rigidbody2D>();
rb.gravityScale = 1.0f;
rb.mass = 1.0f;
rb.drag = 0.05f;
```

## 2D Colliders and Triggers

* BoxCollider2D
* CircleCollider2D
* PolygonCollider2D
* Edge and Composite colliders
* Trigger events in 2D

## 2D Movement and Controls

Implement responsive movement for 2D characters:

```csharp
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
```

## 2D Camera Systems

* Setting up orthographic cameras
* Camera follow scripts
* Implementing parallax scrolling
* Using Cinemachine for 2D cameras
