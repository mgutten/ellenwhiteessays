// JavaScript Document
var fade;
$(function()
{
	setFadeInterval();
	
	$('.home-indicator').click(function()
	{
		if ($(this).is('.current')) {
			return false;
		}
		var index = $(this).index('.home-indicator');
		
		clearInterval(fade);
		
		$('.home-slider.next').removeClass('next');
		
		$('.home-slider:eq(' + index + ')').addClass('next');
		
		startFade();
		
		setFadeInterval();
		
	})
})

function setFadeInterval()
{
	fade = setInterval(function() {
			startFade()
	}, 8000);
}

function startFade()
{
	var current = $('.home-slider.current');
	current.stop().animate({opacity: 0}, {duration: 600,
										  complete: function() {
											  			$(this).removeClass('current')
				  											   .css('opacity', 1);
															   
														completeFade();
										  }
										  })
	
	var nextIndex = $('.home-slider.next').index('.home-slider');
									  
	var nextIndicator = (nextIndex < 0 ? $('.home-indicator').first() : $('.home-indicator:eq(' + nextIndex + ')'))
	
	$('.home-indicator.current').removeClass('current');
	nextIndicator.addClass('current');
				  
				  
	
}

function completeFade()
{
	var next = $('.home-slider.next');
	
	
	next.addClass('current')
	    .removeClass('next');
		
	var nextNext = (next.next('.home-slider').length > 0 ? next.next('.home-slider') : $('.home-slider').first());
	
	nextNext.addClass('next');
}