define(['jquery','foundation'],function($,foundation){
	var texto = function(Message){
		var texto = $('<h1></h1>',{'text':Message});

		return texto;
	};
	var remove = function(div){
		div.find('h1').remove();
	};
	return {
		texto : texto,
		remove : remove
	};
});