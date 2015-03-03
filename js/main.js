define(['jquery','foundation','events'],function($,foundation,events){
	$(document).foundation();
	$('#img').on('click',function(){
		events.init();
	});
});