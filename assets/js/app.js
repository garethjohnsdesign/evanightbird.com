// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

smoothScroll.init();

$('article').readmore({
  speed: 75,
  collapsedHeight: 300,
  moreLink: 
  '<div class="row">
	<div class="medium-6 small-12 small-centered columns text-center">
		<a href="#" class="button secondary expand">+ More</a>
	</div>
  </div>',
  lessLink:
  '<div class="row">
	<div class="medium-6 small-12 small-centered columns text-center">
		<a href="#" class="button secondary expand">- Less</a>
	</div>
  </div>'
});