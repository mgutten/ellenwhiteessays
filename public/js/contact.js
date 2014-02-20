// JavaScript Document


$(function()
{
	$('#contact-email').click(function()
	{
		var hiddenEle = $('#contact-dropdown');

		hiddenEle.css({top: $(this).offset().top + $(this).height(),
					   left: $(this).offset().left})
				 .show();
	});
	
	
	var clip = new ZeroClipboard($("#contact-dropdown-copy"), {
	  moviePath: "/js/ZeroClipboard.swf"
	} );
	
	clip.on( 'mouseover', function(client) {
	  $("#contact-dropdown-copy").css('background', '#444');
	} );
	
	clip.on( 'mouseout', function(client) {
	  $("#contact-dropdown-copy").css('background', '#333');
	} );
	
	clip.on( 'mouseup', function(client) {
	  $(document).trigger('click');
	} );
	
	clip.on( 'dataRequested', function (client, args) {
	  client.setText($("#contact-email").text());
	});
	
	$(document).click(function(e)
	{
		if (!$(e.target).is('#contact-email')) {
			$('#contact-dropdown').hide();
		}
	})
})
					   