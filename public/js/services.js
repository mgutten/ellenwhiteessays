// JavaScript Document
var running;
$(function()
{
	$('.services-img-container').hover(function()
	{
		if ($(this).is('.clicked')) {
			return false;
		}
		$(this).find('.services-img-bw').hide();
	},
	function()
	{
		if ($(this).is('.clicked')) {
			return false;
		}
		$(this).find('.services-img-bw').show();
	})
	.click(function()
	{
		if (running) {
			// Already animating
			return false;
		}
		var id = $(this).attr('type');
		
		var ele = $('#' + id);
		
		running = true;
		
		if (ele.find('.animate-inner').css('visibility') !== 'hidden') {
			// Is already down
			ele.prev('.services-img-container').removeClass('clicked');
			animateUp(ele);
		} else {
			ele.prev('.services-img-container').addClass('clicked');
			animateDown(ele);
		}
		
	})
	
	/* IE fix to force jquery load to work (do not allow ie to cache img) */
	var lastImg = $('img').last();
	var src = lastImg.attr('src');
	lastImg.attr('src',src + '?' + new Date().getTime()); 
	
	$('img').last().load(function() {
		
		$('.animate-inner').each(function()
		{
			var height = $(this).outerHeight(true);
			
			$(this).css('margin-top', -height);
		})
		
	})
	

})

/**
 * animate hidden div (ele) down
 */
function animateDown(ele)
{
	
	var inner = ele.find('.animate-inner');
	var height = inner.height(true);
	
	inner.css({'margin-top': -height,
			   'visibility': 'visible'})
		 .show();
		 
	inner.animate({'margin-top': 0}, {duration:600,
									  complete: function() {
										  running = false;
									  }
	});
}

/**
 * animate hidden div (ele) up
 */
function animateUp(ele)
{
	var inner = ele.find('.animate-inner');
	var height = inner.outerHeight(true);
	
	
		 
	inner.animate({'margin-top': -height}, {duration:600,
											complete: function() {
												$(this).css('visibility', 'hidden');
												running = false;
											}
	});
	
	
}
	
	