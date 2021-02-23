$(document).ready(function() {
	$('.text_btn').click(function() {		
		$('.hide_text').toggle();
		$('.text_btn').hide();
	});
	
		$('.text_btn2').click(function() {		
		$('.hide_text').toggle();
		$('.text_btn').show();
	});



	//Adobe Ai
	$('.skill_btn1').click(function(event) {
	event.preventDefault();
	$('.ai').toggle();
	$('.skill_card').hide();
		});

	$('.back_to_skill').click(function(event) {
	$('.ai').hide();
	$('.skill_card').show();



});





	//Adobe Photoshop
	$('.skill_btn2').click(function(event) {
	event.preventDefault();
	$('.ps').toggle();
	$('.skill_card').hide();
		});

	$('.back_to_skill').click(function(event) {
	$('.ps').hide();
	$('.skill_card').show();



});

	//Adobe Indesign
	$('.skill_btn3').click(function(event) {
	event.preventDefault();
	$('.id').toggle();
	$('.skill_card').hide();
		});

	$('.back_to_skill').click(function(event) {
	$('.id').hide();
	$('.skill_card').show();



});

	//Adobe XD
	$('.skill_btn4').click(function(event) {
		event.preventDefault();
		$('.xd').toggle();
		$('.skill_card').hide();
		});

	$('.back_to_skill').click(function(event) {
		$('.xd').hide();
		$('.skill_card').show();
});

	


	$('.skill_btn5').click(function(event) {
		event.preventDefault();
		});

	$('.skill_btn6').click(function(event) {
		event.preventDefault();
		});

//top滑動效果

	$('.top_btn').click(function(event) {
	$('html,body').animate({
	scrollTop: 0
  	}, 300);

	});

});