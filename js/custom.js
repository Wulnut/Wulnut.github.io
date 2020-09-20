
$(document).ready(function(){
	$('.vemoji-btn').text('😀');
	$("#vcomments").on('click', 'span.vat',function(){
		$(this).parent('div.vmeta').next("div.vcontent").after($("div.vwrap"));
		$('textarea#veditor').focus();
	})
})
