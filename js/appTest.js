$(document).ready(function() {


	$('.char').on('mouseenter', function() {
		$(this).animate({'top': '-15px'});
	})
	$('.char').on('mouseleave', function() {
		$(this).animate({'top': '0px'});
	})

	var charSelect = function() {
		var charVal = +$(this).data('charnum');
		console.log(charVal);
		return charVal;
	}

	$('.char').on('click', charSelect);

})
	

