document.addEventListener("DOMContentLoaded", function() {

	// Custom JS
//Загрузка карты, отложенная до полной загрузки ресурсов
	window.onload = function() {
		console.log (document.querySelector('.map'));
		let ya_map = document.createElement('script');
		ya_map.setAttribute('type', 'text/javascript');
		ya_map.setAttribute('charset', 'utf-8');
		ya_map.setAttribute('src', 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Ae58f74a26bf3cdc29afb827d8c6d3dd8842c51f90ffb659bf945e55715da694c&amp;width=100%25&amp;height=400&amp;lang=ru_RU&amp;scroll=false');
		document.querySelector('.map').appendChild(ya_map);
	}
});
