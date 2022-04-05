const titleSketch = (p) => {
	let titleImgs = [];
	let imgIndex = 0;
	let time = 0;

	const changeImg = () => {
		imgIndex = imgIndex == titleImgs.length - 1 ? 0 : imgIndex + 1;
	}
	
  p.preload = () => {
    titleImgPink = p.loadImage('recrave-pink.png');
    titleImgBlue = p.loadImage('recrave-blue.png');
    titleImgGreen = p.loadImage('recrave-green.png');
  }

  p.setup = () => {
    p.pixelDensity(1);
		const cv = p.createCanvas(p.windowWidth, p.windowHeight);
    // cv.position((p.windowWidth / 2) - p.width / 2, (p.windowHeight / 2) - titleImg.height);
		cv.position(0, 0);

		titleImgs = [titleImgPink, titleImgBlue, titleImgGreen];
  }

  p.draw = () => {
		p.clear();

		time++;
		if (time == 200) {
			time = 0;
			changeImg();
		}

		const img = titleImgs[imgIndex];
		p.imageMode(p.CENTER);
    p.image(img, (p.windowWidth / 2), (p.windowHeight / 2), img.width * 1.8, img.height * 1.8);
  }
};

new p5(titleSketch);