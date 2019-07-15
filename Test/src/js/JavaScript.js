// Arrow upload

$('body').append('<a class="btn-up"><i class="fas fa-arrow-circle-up"></i></a>');
$('.btn-up').click(function () {
	$('body').animate({'scrollTop': 0}, 1000);
	$('html').animate({'scrollTop': 0}, 1000);
})
$(window).scroll(function () {
	if($(window).scrollTop() > 200) {
		$('.btn-up').addClass('active');
	}
	else {
		$('.btn-up').removeClass('active');
	}
})

// Navigation by sections

function slowScroll (id) {
	var offset = 45;
	$('html, body').animate({
		scrollTop: $(id).offset().top - offset
	}, 500);
	return false;
}

// Burger menu

$('.header-nav__icon').on('click', function() {
	$(this).closest('.header').toggleClass('nav-open');
	$('.header-menu').slideToggle(500)
});