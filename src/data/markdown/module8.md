
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

```hlsl
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
```

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

```csharp
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
```

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
