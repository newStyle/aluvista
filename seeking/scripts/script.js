$(function(){
	 $("section.container > .down").wrapAll("<section id='con'></section>");
	 $("header .down nav li a").click(function(e){
	 	e.preventDefault();
		$("#con").hide().load($(this).attr("href")).fadeIn("normal");
	 });
});