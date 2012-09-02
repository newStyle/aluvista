$(function () {
	$("section.container > .down").wrapAll("<section id='con'></section>");

	$("header .down nav li a").click(function (e) {
		e.preventDefault();
		$href = $(this).attr("href");
		$("#con").hide().load($href).fadeIn("normal");
	});

	$("header .right .down nav a").click(function () {
		$sibl = $(this).addClass("active");
		$sibl.parent().siblings().children().removeClass("active");
	});
});