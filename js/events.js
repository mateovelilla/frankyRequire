define(["jquery","foundation","dom"],function($,foundation,dom){
	var init = function(){
		console.log('init process in events....');
		$('#hi')
			.append(dom.texto('Hi'))
			.show(3000)
			.promise().done(function(){
				$('#Im').append(dom.texto("My name is..."))
					.show(3000)
					.promise().done(function(){
						$('#Franky').attr('src','img/Frankenstein.jpg')
							.attr('style','width:20%')
							.animate({
								width: "100%",
							},2000)
							.promise().done(function(){
								dom.remove($('#hi'));
								dom.remove($('#Im'));
								$('#Franky').attr('src','img/frankenstein.jpg');
							});
					})
			});
	}
	return {
		init:init
	};
});