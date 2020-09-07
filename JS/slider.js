'use strict'

function Slider () {
	
	//find elements
	this.imagesUrls = [];
	this.currentImgIndex = 0;
	this.showPrevBtn = null;
	this.showNextBtn = null;
	this.slideImg = null;

	this.start = function(elId) {
		let that = this;

		let elSelector = '#' + elId;
		let el = document.querySelector(elSelector);

		this.showPrevBtn = el.querySelector('.showPrevCl');
		this.showNextBtn = el.querySelector('.showNextCl');
		this.slideImg = el.querySelector('.slideImgCl');

		// subscripe to events
		this.showPrevBtn.onclick = function (event){
			that.onShowPrevBtnClick(event);
		};
		this.showNextBtn.onclick = function (event){
			that.onShowNextBtnClick(event);
		};

		// create image array
		this.imagesUrls.push('IMG/IMG_0302.jpg');
		this.imagesUrls.push('IMG/IMG_0325.jpg');
		this.imagesUrls.push('IMG/IMG_0343.jpg');
		
		this.slideImg.src = this.imagesUrls[this.currentImgIndex];
		this.showPrevBtn.disabled = true;
	};

	// functions definitions
	this.onShowPrevBtnClick= function (event) {
		this.currentImgIndex--;
		this.slideImg.src = this.imagesUrls[this.currentImgIndex];
		this.showNextBtn.disabled = false;

		// disable next button if need
		if (this.currentImgIndex === 0 ){
			this.showPrevBtn.disabled = true;
		}
	};

	this.onShowNextBtnClick = function (event) {
		this.currentImgIndex++;
		this.slideImg.src = this.imagesUrls[this.currentImgIndex];
		this.showPrevBtn.disabled = false;
		
		// disable next button if need
		if (this.currentImgIndex === (this.imagesUrls.length - 1) ){
			this.showNextBtn.disabled = true;
		}
	};
}




	