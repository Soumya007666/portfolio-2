// Navbar color change on scroll
$(window).scroll(function(){
$('nav').toggleClass('scrolled', $(this).scrollTop() > 100);
});

// Navbar Link Color Change On Scroll
$(window).scroll(function(){
if($(this).scrollTop() > 100) {
$('.change').addClass('linkcolor');
}
else {
	$('.change').removeClass('linkcolor');
}
});

