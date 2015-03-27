jQuery(document).ready(function(){
	var _w = jQuery(window).width();
	$('.bxslider').bxSlider({
		controls: false,
	    pager: false,
	    auto: true
	});

	jQuery('a.btn-toggle').click(function(even){
		even.preventDefault();
		if(_w <= 991){
			jQuery('.navigator ul').slideToggle();
		}
	})
});

jQuery(window).load(function(){

});

jQuery(window).resize(function(){
	menu();
})

function menu() {
	var _w = jQuery(window).width();
	if(_w <= 991){
		jQuery('.navigator ul').hide();
	}
	else{
		jQuery('.navigator ul').show();
	}
}