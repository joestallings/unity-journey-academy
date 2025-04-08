
export const module5Content = `
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
`;
