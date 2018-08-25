class options {
	constructor(width, height, bg, fontSize, textAlign) {
		this.width = width;
		this.height = height;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}

	addDiv() {
		let div = document.createElement('div');

		div.textContent = 'Какой чудесный день!';
		div.style.cssText = `width: ${this.width}px; height: ${this.height}px; 
		background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign}`;
		
		document.body.insertBefore(div, document.body.firstChild);
	}
}

let firstDiv = new options(420, 260, '#fff url(img/bg.jpg) center no-repeat', 28, 'center');
firstDiv.addDiv();