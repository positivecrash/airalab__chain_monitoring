jQuery(document).ready(function($){
	/*====== BASICS ======*/

	var $w = $(window);
	var $d = $(document);
	var $page = $('body');


	$('#header-nav-toggler').on('click', function(){
		var $this = $(this);
		var cToggl = 'active';
		var cNav = 'active';

		if(!$this.hasClass(cToggl)){
			$this.addClass(cToggl);
			$this.next('.header-nav').addClass(cNav);
		}
		else{
			$this.removeClass(cToggl);
			$this.next('.header-nav').removeClass(cNav);
		}
	});

});