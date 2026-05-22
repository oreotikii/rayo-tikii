# 3D Models

Place `.glb` or `.gltf` files here for use with the Three.js stage.

Example content hook in source HTML:

```html
<div
  data-three-model="/models/tikii-device.glb"
  data-three-scale="1"
  data-three-auto-rotate="true"
  data-three-animate-lights="true"
></div>
```

If `data-three-model` is empty, the stage renders a built-in placeholder shape.
