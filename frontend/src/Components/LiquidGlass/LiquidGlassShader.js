export const LiquidGlassShader = {
  uniforms: {
    u_time: { value: 0.0 },
    u_intensity: { value: 0.2 },
    u_tint: { value: [0.8, 0.9, 1.0] },
  },
  vertexShader: /* glsl */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */ `
    varying vec2 vUv;
    uniform float u_time;
    uniform float u_intensity;
    uniform vec3 u_tint;

    // Simple pseudo-random noise
    float noise(vec2 p) {
      return sin(p.x)*sin(p.y);
    }

    void main() {
      // Warp UV coordinates with moving sine waves
      vec2 uv = vUv;
      uv.x += sin(uv.y * 10.0 + u_time * 1.5) * 0.03 * u_intensity;
      uv.y += cos(uv.x * 10.0 + u_time * 1.2) * 0.03 * u_intensity;

      // Create smooth color tint and soft gradients
      float glow = smoothstep(0.2, 0.8, uv.y);
      vec3 color = mix(u_tint, vec3(1.0), glow);
      color += 0.05 * sin(uv.x * 10.0 + u_time * 2.0);

      gl_FragColor = vec4(color, 0.35); // alpha gives glass transparency
    }
  `,
};
