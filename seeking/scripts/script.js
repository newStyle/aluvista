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
		var $pos;
		/* if click on links active its ! */
		for (i=0;i<=2;i++)/* 0=>top menu header, 2=> down menu footer */
		(function ($arg){
			$($pathMenu[$arg]).bind('click', function () {
				$index = $($pathMenu[$arg]).index(this);
				$($pathMenu[$arg===2?0:2]).removeClass("active").eq($index).addClass("active");
				$pos = $index;
				//console.log($pos);
			});
		})(i);
		

		/* if mouse enter on links ;) */
		for (i=0;i<=2;i+=2)/* 0=>top menu header, 2=> down menu footer */
		(function ($arg){
			$($pathMenu[$arg]).bind('mouseenter', function () {
				$index = $($pathMenu[$arg]).index(this);
				$($pathMenu[0]).removeClass("active").eq($index).addClass("active");
				$($pathMenu[2]).removeClass("active").eq($index).addClass("active");
			});
		})(i);
		/* if mouse leave links ;) */
		$($pathMenu[0]+", "+$pathMenu[2]).bind('mouseleave', function () {
			$($pathMenu[0]+", "+$pathMenu[2]).removeClass("active");
			$($pathMenu[0]).eq($pos).addClass("active");
			$($pathMenu[2]).eq($pos).addClass("active");
		});
}
};

$(document).ready(codeStationJq.ready);