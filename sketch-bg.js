const bgSketch = (p) => {
  let video;
  let videoShader;

  let tilingTime = 0;
  const TILING = [2, 3, 4, 5]
  let tileCount = TILING[0];

  const updateTileCount = () => {
    tileCount = TILING[Math.floor(Math.random() * TILING.length)];
  };

  p.preload = () => {
    videoShader = p.loadShader('shader.vert', 'shader-bg.frag');
  }

  p.setup = () => {
    p.pixelDensity(1);
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
    video = p.createCapture(p.VIDEO);
    video.size(p.width, p.height);
    video.hide();
  }

  p.draw = () => {
    tilingTime++;
    if (tilingTime == 150) {
      updateTileCount();
      tilingTime = 0;
    }

    p.shader(videoShader);
    videoShader.setUniform('tex0', video);
    videoShader.setUniform('tileCount', tileCount);
    p.rect(0, 0, p.width, p.height);
  }

  p.windowResized = () =>{
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  }
};

new p5(bgSketch);