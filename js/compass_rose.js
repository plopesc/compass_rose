// $Id$ 

(function ($) {

  Drupal.behaviors.compass_rose = {
    attach: function(context, settings) {
	  var compass_rose = compass_rose||{};
		
	  for (var i in settings.compass_rose){
		$('#'+i).rotate(-parseInt(settings.compass_rose[i]));
	  }
	
	  for (var i in settings.compass_rose_defaults){
		$('#'+i).rotate({angle:-parseInt(settings.compass_rose_defaults[i].value),preservePosition:true});
	  }
	
	  $('.compass-rose-control-button').each(function(){
		$(this).click(function(){
		  if($(this).text() == Drupal.t('->')) var delta = -5;
		  else var delta = +5;
			
		  Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value = parseInt(settings.compass_rose_defaults[$(this).attr('rel')].value) + delta
		  if(settings.compass_rose_defaults[$(this).attr('rel')].value < 0)
			settings.compass_rose_defaults[$(this).attr('rel')].value = parseInt(settings.compass_rose_defaults[$(this).attr('rel')].value) + 360;
		  if(settings.compass_rose_defaults[$(this).attr('rel')].value > 360)
			settings.compass_rose_defaults[$(this).attr('rel')].value = parseInt(settings.compass_rose_defaults[$(this).attr('rel')].value) - 360;
		  $('#'+$(this).attr('rel')).rotate({angle:-settings.compass_rose_defaults[$(this).attr('rel')].value,preservePosition:false});
		  $('input[name*="'+settings.compass_rose_defaults[$(this).attr('rel')].input+'"]').val(settings.compass_rose_defaults[$(this).attr('rel')].value);
		})
	})
    }
  };

})(jQuery);
/*

Drupal.behaviors.compass = function(context){
	var compass_rose = compass_rose||{};
	
	for (var i in Drupal.settings.compass_rose){
		$('#'+i).rotate(-parseInt(Drupal.settings.compass_rose[i]));
	}
	
	for (var i in Drupal.settings.compass_rose_defaults){
		$('#'+i).rotate({angle:-parseInt(Drupal.settings.compass_rose_defaults[i].value),preservePosition:true});
	}
	
	$('.compass-rose-control-button').each(function(){
		$(this).click(function(){
			if($(this).text() == Drupal.t('->')) var delta = -5;
			else var delta = +5;
			
			Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value = parseInt(Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value) + delta
			if(Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value < 0)
				Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value = parseInt(Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value) + 360;
			$('#'+$(this).attr('rel')).rotate({angle:-Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value,preservePosition:false});
			$('input[id*="'+Drupal.settings.compass_rose_defaults[$(this).attr('rel')].input+'"]').val(Drupal.settings.compass_rose_defaults[$(this).attr('rel')].value);
		})
	})

}*/