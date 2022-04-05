const mainSketch = (p) => {
  let video;

  p.setup = () => {
    p.pixelDensity(1);
    const cv = p.createCanvas(p.windowWidth / 3, p.windowHeight / 3);
    cv.position((p.windowWidth / 2) - p.width / 2, (p.windowHeight / 2) - p.height / 2);

    video = p.createCapture(p.VIDEO);
    video.size(p.width, p.height);

    video.hide();
  }

  p.draw = () => {
    p.image(video, 0, 0, p.width, p.width * (p.height / p.width));
    p.filter(p.GRAY);
  }
};

new p5(mainSketch);