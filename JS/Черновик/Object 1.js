'use strict'

let slider: {
	//find elements
	showPrevBtn: document.getElementById('showPrev'),
	showNextBtn: document.getElementById('showNext'),
	slideImg: document.getElementById('slideImg'),
	imagesUrls: [],
	currentImgIndex: 0,

	start: function() {
		// subscripe to events
		this.showPrevBtn.onclick = function (){this.onShowPrevBtnClick();};
		this.showNextBtn.onclick = function (){this.onShowNextBtnClick();};

		// create image array
		this.imagesUrls.push('IMG/IMG_0302.jpg'),
		this.imagesUrls.push('IMG/IMG_0325.jpg'),
		this.imagesUrls.push('IMG/IMG_0343.jpg'),
	
		this.slideImg.src: imagesUrls[currentImgIndex];
		this.showPrevBtn.disabled = true;

		
	}
	

	// functions definitions
	onShowPrevBtnClick: function (event) {
		this.currentImgIndex--;
		this.slideImg.src = imagesUrls[currentImgIndex];
		this.showNextBtn.disabled = false;

			// disable next button if need
		if (this.currentImgIndex === 0 ){
			showPrevBtn.disabled = true;
		}
	}

	onShowNextBtnClick: function (event) {
		this.currentImgIndex++;
		this.slideImg.src = imagesUrls[currentImgIndex];
		this.showPrevBtn.disabled = false;
	
		// disable next button if need
		if (this.currentImgIndex === (imagesUrls.length - 1) ){
			this.showNextBtn.disabled = true;
		}
	}
};