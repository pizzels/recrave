const titleSketch = (p) => {
  let titleImg;
	let titleShader;

	const colors = [
		[0.921,0.219,0.58],
		[0.317, 0.949, 0.16],
		[0.1098, 0.988, 0.929]
	];
	let colorTime = 0;
	let colorIndex = 0;

	const changeColor = () => {
		colorIndex = colorIndex == colors.length - 1 ? 0 : colorIndex + 1;
	};
	
  p.preload = () => {
    titleImg = p.loadImage('recrave.png');
		titleShader = p.loadShader('shader.vert', 'shader-title.frag');
  }

  p.setup = () => {
    p.pixelDensity(1);
		const cv = p.createCanvas(titleImg.width * 2, titleImg.height * 2, p.WEBGL);
    cv.position((p.windowWidth / 2) - p.width / 2, (p.windowHeight / 2) - titleImg.height);
  }

  p.draw = () => {
		p.shader(titleShader);

		colorTime++;
		if (colorTime == 200) {
			colorTime = 0;
			changeColor();
		}

    titleShader.setUniform('tex0', titleImg);
		titleShader.setUniform('titleColor', colors[colorIndex]);
    p.rect(0, 0, titleImg.width, titleImg.height);
  }
};

new p5(titleSketch);