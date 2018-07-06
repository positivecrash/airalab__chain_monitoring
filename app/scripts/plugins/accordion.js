
(function($) {

	var defaults = {
      tab: '.accordion__tab',
      content: '.accordion__content',
      active: '0',
      activeclass: 'active',

      // CALLBACKS
      onTabOpen: function(index) { return true; },
      onTabClick: function(index) { return true; }
 	};

 	$.fn.accordion = function (options) {

		if (this.length < 1)
            return;

	    // support multiple elements
	    if (this.length > 1) {
	      this.each(function() {
	        $(this).AnySlide(options);
	      });
	      return this;
	    }



	    // create a namespace to be used throughout the plugin
	    var accordion = {},

	    // set a reference to slider element
	    el = this,

	    $w = $(window);


	    var init = function() {

	      // Return if slider is already initialized
	      if ($(el).data('accordion')) { return; }

	      // merge user-supplied options with the defaults
			accordion.config = $.extend({}, defaults, options);



	      opentab(accordion.config.active);




	      el.find(accordion.config.tab).on('click', function(e){
	      	e.stopPropagation();
  			e.preventDefault();

  			opentab(el.find(accordion.config.tab).index(this));
  			accordion.config.onTabClick.call(el, this);
	      });

      	}


      	var opentab = function(index) {
      		var i = 0;

      		$(el).find(accordion.config.tab).each(function(){
		      	if(i == index){
		      		$(this).addClass(accordion.config.activeclass);
		      		$(this).next(accordion.config.content).addClass(accordion.config.activeclass);
		      	}
		      	else{
		      		$(this).removeClass(accordion.config.activeclass);
		      		$(this).next(accordion.config.content).removeClass(accordion.config.activeclass);
		      	}

		      	i++;
	      	});

	      	accordion.config.onTabOpen.call(el, index);
      	}



		init();

	    $(el).data('accordion', this);

	    // returns the current jQuery object
	    return this;

	  };

})(jQuery);


// jQuery(document).ready(function($){

// 	$(".accordion").accordion({
// 		onTabOpen: function(){
// 			console.log('open');
// 		},
// 		onTabClick: function(){
// 			console.log('click');
// 		}
// 	});
// });