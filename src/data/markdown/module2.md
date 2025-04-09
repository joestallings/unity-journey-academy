
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

```csharp
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
```

## Input Handling

Learn how to respond to player input in your games:

```csharp
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
```

## Working with Components

Access and modify components on GameObjects:

```csharp
// Get a component on this GameObject
Rigidbody rb = GetComponent<Rigidbody>();
rb.AddForce(Vector3.up * 10f);

// Get a component on another GameObject
GameObject player = GameObject.Find("Player");
PlayerHealth health = player.GetComponent<PlayerHealth>();
health.TakeDamage(10);
```
