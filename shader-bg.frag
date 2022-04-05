precision mediump float;

varying vec2 vTexCoord;

uniform sampler2D tex0;
uniform float tileCount;

float luma(vec3 color) {
  return dot(color, vec3(0.299, 0.587, 0.114));
  // return dot(color, vec3(0.299, 0.587, 0.514));
}

void main() {
  vec2 uv = vTexCoord;
  uv = 1.0 - uv;

  uv *= tileCount;

  float col = mod(floor(uv.x) + floor(uv.y), 2.0);
  if (col == 0.0) {
    uv.x *= -1.0;
  }

  uv = fract(uv);

  vec4 tex = texture2D(tex0, uv);
  float gray = luma(tex.rgb);
  gl_FragColor = vec4(gray, gray, gray, 1.0);
}