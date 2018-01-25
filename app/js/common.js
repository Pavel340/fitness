$(document).ready(function() {
	//equalheight - одинаковая высота колонок
	//Пример списка элементов:
	//var eqElement = ".cat_container > div, .home_news > div"
	var eqElement = ".itemCont";
	equalheight(eqElement);
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();
});