// jquery my code
var codeStationJq = {
	ready: function () {
		$("section.container > .down").wrapAll("<section id='con'></section>");
		var $pos, menus = {
			Links: [
				"header .right .down nav a",
				"section.container .top nav a",
				"footer .down nav a"
			],
			HFLinks: [
				"header .right .down nav a",
				"footer .down nav a"
			],
			loadAjax: function (url, box, sw) {
				$(box).hide().load(url).fadeIn("normal");
				if (sw === true) {
					window.history.pushState(url, "", url.substring(6));
					window.onpopstate = function (e) {
						e.state && $("#con").hide().load(e.state).fadeIn("normal");
					};
				}
			},
			active: function (which, i) {
				$(which).removeClass("active").eq(i).addClass("active");
				$pos = i;
				//console.log($pos);
			},
			MouseEnter: function (which, i) {
				if (which == this.Links[0] || which == this.Links[2]) {
					$(this.Links[0]).removeClass("active").eq(i).addClass("active");
					$(this.Links[2]).removeClass("active").eq(i).addClass("active");
				}
			},
			MouseLeave: function (which, i) {
				if (which == this.Links[0] || which == this.Links[2]) {
					$(this.Links[0] + ", " + this.Links[2]).removeClass("active");
					$(this.Links[0]).eq(i).addClass("active");
					$(this.Links[2]).eq(i).addClass("active");
				}
			}
		};

		/* ajax load*/
		for (var i = 0; i < menus.HFLinks.length; i++)
		$(menus.HFLinks[i]).bind('click', function (e) {
			e.preventDefault();
			menus.loadAjax($(this).attr("href"), "#con", true);
		}); /* active links in page */
		for (var i = 0; i <= menus.Links.length; i++)(function (i) {
			$(menus.Links[i]).bind('click', function () {
				menus.active(menus.Links[i], $(menus.Links[i]).index(this));
			});
		})(i); /* mouse enter on links */
		for (i = 0; i <= menus.Links.length; i++)(function (i) {
			$(menus.Links[i]).bind('mouseenter', function () {
				menus.MouseEnter(menus.Links[i], $(menus.Links[i]).index(this));
			});
		})(i);

		/* mouse leave on links */
		for (i = 0; i <= menus.Links.length; i++)(function (i) {
			$(menus.Links[i]).bind('mouseenter', function () {
				menus.MouseLeave(menus.Links[i], $(menus.Links[i]).index(this));
			});
		})(i);
		/*Slider basic work ;)*/
		var imgsInBanner = {
			"home"  : {/* for page Home ! */
				pics : [
					"images/gallery/sliderpic1.jpg",
					"images/gallery/sliderpic2.jpg",
					"images/gallery/sliderpic3.jpg",
					"images/gallery/sliderpic4.jpg",
					"images/gallery/sliderpic5.jpg"
				]
			}
		};
		var inx_img = 0, $dummy = -1;
		$(".container .slider section > .middle").css('position', 'relative')
			.addClass("view")
				.html("<img width='430' height='300' src='images/gallery/sliderpic1.jpg' alt='image pic slider' >");
		$(".view img").css({
			'z-index': '-1',
			'position': 'absolute',
			'left': '0'
		});
		efct_banner = function ($newpos) {
			$(".view img").hide().attr("src", imgsInBanner["home"].pics[$newpos]).fadeIn();
		}
		$("section.container .top nav a").bind('click', function (event) {
			event.preventDefault();
			efct_banner($pos);
			$dummy = $pos === imgsInBanner["home"].pics.length - 1 ? -1 : $pos;
		});
		(change_image = function () {
			efct_banner(++$dummy);
			$("section.container .top nav a").removeClass("active").eq($dummy).addClass("active");
			$dummy = $dummy >= imgsInBanner["home"].pics.length - 1 ? -1 : $dummy;
			setTimeout(change_image, 3000);
		})();
		for (var i = 0; i < document.links.length; i++) {
			document.links[i].onfocus = function () {
				this.blur();
			};
		}
	}
};

$(document).ready(codeStationJq.ready);