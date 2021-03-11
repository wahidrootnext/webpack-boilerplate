import 'jquery';
import '@popperjs/core';
import 'bootstrap';


//Disable dropdown hide during inside click
$('[data-bs-disable-inside="true"]').closest('.dropdown').find('.dropdown-menu').click(function (e) {
	e.stopPropagation();
});


//Close navigation on outside click
$(document).click(function (event) {
	let clickedElement = $(event.target),
		isNavbarOpen = $(".navbar-collapse").hasClass("show");
	if (isNavbarOpen === true && !clickedElement.hasClass("navbar-toggler")) {
		$(".navbar-toggler").click();
	}
});