'use strict'
//find elements
let showPrevBtn = document.getElementById("showPrev");
let showNextBtn = document.getElementById('showNext');
let slideImg = document.getElementById('slideImg');

// create images array
let imagesUrls = [];
imagesUrls.push('IMG/IMG_0302.jpg');
imagesUrls.push('IMG/IMG_0325.jpg');
imagesUrls.push('IMG/IMG_0343.jpg');

let currentImgIndex = 0;
slideImg.src = imagesUrls[currentImgIndex];
showPrevBtn.disabled = true;

// subscripe to events
showPrevBtn.onclick = function (){onShowPrevBtnClick();};
showNextBtn.onclick = function (){onShowNextBtnClick();};

// functions definitions
function onShowPrevBtnClick() {
	currentImgIndex--;
	slideImg.src = imagesUrls[currentImgIndex];
	showNextBtn.disabled = false;

		// disable next button if need
	if (currentImgIndex === 0 ){
		showPrevBtn.disabled = true;
	}
}

function onShowNextBtnClick() {
	currentImgIndex++;
	slideImg.src = imagesUrls[currentImgIndex];
	showPrevBtn.disabled = false;
	
	// disable next button if need
	if (currentImgIndex === (imagesUrls.length - 1) ){
		showNextBtn.disabled = true;
	}
}
