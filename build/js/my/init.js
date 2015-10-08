$(document).ready(function() {
	//$('[data-item="phone"]').mask("+7 (999) 999-99-99");
	send();
	var form = $('[data-form="send"]');
	form.ajaxForm(function() { 
		// $('#call-modal3').modal('hide');
		// $('#call-modal3').on('hidden.bs.modal', function (e) {
		// 	$('#thx2').modal('show');
		// });
		// //$('#call-modal').modal('hide');
		// $('#call-modal').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		// //$('#call-modal2').modal('hide');
		// $('#call-modal2').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		
		// $(form).resetForm(function(){
		// 	$('#thx').modal('show');
		// });
	});
	var form = $('[data-form="send"]');
	$(form).validator().on('submit', function (e) {
		if ($(this).hasClass('disabled')) {
			// handle the invalid form...
			e.preventDefault();
		} else {
			// everything looks good!
			send();
		}
	});
});


function send(){
	var form = $('[data-form="send"]');
	form.ajaxForm(function() {
		//$('#dog-form').modal('hide');
		// $('#call-modal3').on('hidden.bs.modal', function (e) {
		// 	$('#thx2').modal('show');
		// });
		// //$('#call-modal').modal('hide');
		// $('#call-modal').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		// //$('#call-modal2').modal('hide');
		// $('#call-modal2').on('hidden.bs.modal', function (e) {
		// 	$('#thx').modal('show');
		// });
		$('#call-modal').modal('hide');
		$('#call-modal2').modal('hide');
		$('#call-modal3').modal('hide');
		$('#thx').modal('show');
		$(form).resetForm();
	});
}
function menuTop(){
	if ( $(this).scrollTop() > 10 && !$('.header').hasClass('open') ) {
		$('.header').addClass('fix-header');
		var loc = $('.header .logo img').attr("data-src");
		$('.header .logo img').attr("src",loc);
	} else if ( $(this).scrollTop() <= 10 ) {
		$('.header').removeClass('fix-header');
		var pick = $('.header .logo img').attr("data-src2");
		$('.header .logo img').attr("src",pick);
	}
}
