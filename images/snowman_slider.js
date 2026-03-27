
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min) + min);	// Максимум не включается, минимум включаются
}

window.onload = function () {
	var slides = document.querySelectorAll('#slides .slide');
	
	var currentSlide = 0;
	var oldSlide;
	var slideInterval = setInterval(nextSlide, 2000);
	
	function nextSlide() {
		slides[currentSlide].className = 'slide';
		oldSlide = currentSlide;
		// Исключаем повтор картинки
		do 
		{
			currentSlide = getRandomInt(0, 6);
		}
		while (currentSlide == oldSlide);

		slides[currentSlide].className = 'slide showing';
	}
}