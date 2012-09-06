var codeStationJq = {
	ready: function () {
		$("section.container > .down").wrapAll("<section id='con'></section>");

		/* ajax load ! */
		$ajaxPath = [ /* this path load in #con => section.container > .down > #con ;)*/ 
			"header .down nav li a", 
			"footer .down nav li a"
		];
		for (i = 0; i < $ajaxPath.length; i++)
			$($ajaxPath[i]).click(function (e) {
				e.preventDefault();
				$href = $(this).attr("href");
				$("#con").hide().load($href).fadeIn("normal");
			});

		/* active menu ! */
		
		 $pathMenu = [ /* this path can active menu in page ;)*/ 
			"header .right .down nav a",
			"section.container .top nav a",
			"footer .down nav a"
		];
		/*
		for (i = 0; i < $pathMenu.length; i++)
			$($pathMenu[i]).click(function () {
				$sibl = $(this).addClass("active");
				$sibl.parent().siblings().children().removeClass("active");
			});
		*/
		$($pathMenu[0]).bind('mouseenter', function () {
			$index = $($pathMenu[0]).index(this);
			$($pathMenu[2]).removeClass("active").eq($index).addClass("active");
		});
		$($pathMenu[0]).bind('mouseleave', function () {
			$($pathMenu[2]).removeClass("active");
		});

		$($pathMenu[2]).bind('mouseenter', function () {
			$index = $($pathMenu[2]).index(this);
			$($pathMenu[0]).removeClass("active").eq($index).addClass("active");
		});
		$($pathMenu[2]).bind('mouseleave', function () {
			$($pathMenu[0]).removeClass("active");
		});

}
};

$(document).ready(codeStationJq.ready);