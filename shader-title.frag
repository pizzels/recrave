precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform vec3 titleColor;

void main() {
  vec2 uv = vTexCoord;
  uv = vec2(uv.x, 1.0 - uv.y);

  vec4 tex = texture2D(tex0, uv);

  vec4 col = vec4(titleColor, tex.a);

  gl_FragColor = col;
}