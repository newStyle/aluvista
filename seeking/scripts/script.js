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
		
		for (i = 0; i < $pathMenu.length; i++)
			$($pathMenu[i]).click(function () {
				$sibl = $(this).addClass("active");
				$sibl.parent().siblings().children().removeClass("active");
			});
		

		/* if mouse enter on links ;) */
		for (i=0;i<=2;i+=2)/* 0=>top menu header, 2=> down menu footer */
		(function ($arg){
			$($pathMenu[$arg]).bind('mouseenter', function () {
				$index = $($pathMenu[$arg]).index(this);
				$($pathMenu[$arg===2?0:2]).eq($index).addClass("active");
			});
		})(i);
		/* if mouse leave links ;) */
		$($pathMenu[0]+", "+$pathMenu[2]).bind('mouseleave', function () {
			$($pathMenu[0]+", "+$pathMenu[2]).removeClass("active");
		});

}
};

$(document).ready(codeStationJq.ready);