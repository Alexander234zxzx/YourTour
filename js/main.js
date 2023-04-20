let headertop = document.querySelector('.header-js');
	headerH = document.querySelector('.header-js').clientHeight;

document.onscroll = function () {
	let scroll = window.scroolY;

	console.log('scroll');

	if (scroll > headerH) {
		header.classList.add('fixed');
	}
}