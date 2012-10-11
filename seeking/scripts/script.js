
$(window).load(function(){
	$("body > .loading").css('display','none');
});
// jquery my code
var codeStationJq = {
	ready: function () {
		$("section.container > .down").wrapAll("<section id='con'></section>");
		var pos, Int, menus = {
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
				pos = i;
			},
			MouseEnter: function (which, i) {
				if (which == this.Links[0] || which == this.Links[2]) {
					$(this.Links[0]).removeClass("active").eq(i).addClass("active");
					$(this.Links[2]).removeClass("active").eq(i).addClass("active");
				} else if (which == this.Links[1]) {
					Int != false && clearTimeout(Int) && alert("ey baba ");
					Int = false;
				}
			},
			MouseLeave: function (which, i) {
				if (which == this.Links[0] || which == this.Links[2]) {
					$(this.Links[0] + ", " + this.Links[2]).removeClass("active");
					$(this.Links[0]).eq(pos).addClass("active");
					$(this.Links[2]).eq(pos).addClass("active");
				} else if (which == this.Links[1]) {
					$(which).closest('ul').mouseleave(function () {
						typeof Int === 'boolean' && change_image();
					});
				}
			}
		};

		/* ajax load*/
		for (i = 0; i < menus.HFLinks.length; i++)
		$(menus.HFLinks[i]).click(function (e) {
			setTimeout(function () {/* create gallery ! */
				gal.setBox();
				gal.setImg();
				gal.setPage();
				gal.ply_pus();
				clearInterval(It);
				acp = 0;
			}, 1000);
			e.preventDefault();
			menus.loadAjax(url = $(this).attr("href"), "#con", true);
			changer(url);
		}); /* active links in page */
		for (i = 0; i <= menus.Links.length; i++)(function (i) {
			$(menus.Links[i]).live('click', function () {
				menus.active(menus.Links[i], $(menus.Links[i]).index(this));
			});
		})(i); /* mouse enter on links */
		for (i = 0; i <= menus.Links.length; i++)(function (i) {
			$(menus.Links[i]).live('mouseenter', function () {
				menus.MouseEnter(menus.Links[i], $(menus.Links[i]).index(this));
			});
		})(i);

		/* mouse leave on links */
		for (i = 0; i <= menus.Links.length; i++)(function (i) {
			$(menus.Links[i]).live('mouseleave', function () {
				menus.MouseLeave(menus.Links[i], $(menus.Links[i]).index(this));
			});
		})(i);

		function changer(url) {
			path = $("section.container .slider nav ul");
			switch (url.slice(6, -4)) {
				case 'index':
					image = "home";
					menus.loadAjax ("pages/index-li.php",path,false);
					break;
				case 'process':
					image = "process";
					menus.loadAjax ("pages/process-li.php",path,false);
					break;
				case 'product':
					image = "product";
					menus.loadAjax ("pages/product-li.php",path,false);
					break;
				case 'gallery':
					image = "gallery";
					menus.loadAjax ("pages/gallery-li.php",path,false);
					break;
				case 'color':
					image = "Color";
					menus.loadAjax ("pages/color-li.php",path,false);
					break;
				case 'contact':
					image = "contact";
					menus.loadAjax ("pages/contact-li.php",path,false);
					break;
				default:
					break;
			}
		} /*Slider basic work ;)*/
		var image = "home",
			imgsInBanner = {
				"home": { /* for home page ! */
					pics: [
						"images/banner/sliderpic1.jpg",
						"images/banner/sliderpic2.jpg",
						"images/banner/sliderpic3.jpg",
						"images/banner/sliderpic4.jpg",
						"images/banner/sliderpic5.jpg"
					]
				},
				"process": { /* for Process page! */
					pics: [
						"images/banner/b1.jpg",
						"images/banner/b2.jpg",
						"images/banner/b3.jpg",
						"images/banner/b4.jpg",
						"images/banner/b5.jpg"
					]
				},
				"product": { /* for Product page! */
					pics: [
						"images/banner/pr1.jpg",
						"images/banner/pr2.jpg",
						"images/banner/pr3.jpg",
						"images/banner/pr4.jpg",
						"images/banner/pr5.jpg"
					]
				},
				"gallery": { /* for Gallery page! */
					pics: [
						"images/banner/gov1.jpg",
						"images/banner/gov2.jpg",
						"images/banner/gov3.jpg",
						"images/banner/gov4.jpg",
						"images/banner/gov5.jpg"
					]
				},
				"Color": { /* for Color page! */
					pics: [
						"images/banner/res1.jpg",
						"images/banner/res2.jpg",
						"images/banner/res3.jpg",
						"images/banner/res4.jpg",
						"images/banner/res5.jpg"
					]
				},
				"contact": { /* for Contact page! */
					pics: [
						"images/banner/sh1.jpg",
						"images/banner/sh2.jpg",
						"images/banner/sh3.jpg",
						"images/banner/sh4.jpg",
						"images/banner/sh5.jpg"
					]
				}
			};
		var inx_img = 0,
			$dummy = -1;
		$(".container .slider section > .middle").css('position', 'relative')
			.addClass("view")
				.html("<img width='430' height='300' src='images/banner/sliderpic1.jpg' alt='image pic slider' >");
		$(".view img").css({
			'z-index': '-1',
			'position': 'absolute',
			'left': '0'
		});
		efct_banner = function ($newpos) {
			$(".view img").animate({'opacity':'0.1','display':'none'},600,'linear',function(){
				$(this).attr("src", imgsInBanner[image].pics[$newpos]).animate({'display':'block','opacity':'1'},'slow');
			});
		}
		$('section.container .top nav a').live('click', function (event) {
			event.preventDefault();
			efct_banner(pos);
			$dummy = pos === imgsInBanner[image].pics.length - 1 ? -1 : pos;
		});
		(change_image = function () {
			autoPlayDelay = 3000;
			efct_banner(++$dummy);
			$("section.container .top nav a").removeClass("active").eq($dummy).addClass("active");
			$dummy = $dummy >= imgsInBanner[image].pics.length - 1 ? -1 : $dummy;
			Int = setTimeout(change_image, autoPlayDelay);
		})();
		for (var i = 0; i < document.links.length; i++) {
			document.links[i].onfocus = function () {
				this.blur();
			};
		} /* gallery page !*/
		var acp = 0,
			nOfImg = 24,
			It = 0;
		var gal = {
			nOfPage: '',
			boxImg: [
				"<div class='w2 left'></div>",
				"<div class='w2 left'></div>",
				"<div class='w2 ml4 right last'></div>"
			],
			path: "section.container .gallery > section .left > section",
			str: {
				tmp: '',
				mas: '' /*master change ;) */
			},
			setBox: function () {
				for (var i = 0; i < nOfImg;) {
					for (var j = 0; j < 3 && i < nOfImg; j++, i++)
						this.str.tmp += this.boxImg[j];
					this.str.mas += "<section class='mb5'>" + this.str.tmp + "</section>";
					this.str.tmp = '';
				}
				$(this.path).html(this.str.mas) && (this.str.mas = '');
				this.mouseEvent.pics.mouseEnter();
				this.mouseEvent.pics.mouseLeave();
				this.mouseEvent.pics.clicked();
			},
			setImg: function () {
				for (i = 0; i <= $(this.path + " div").length; i++)
					$(this.path + " div").eq(i).
						html("<img src='images/gallery/75/" + (i + 1) + ".jpg' width='70' height='70'>");
				this.chg_img(0);
			},
			setPage: function () {
				this.nOfPage = nOfImg / 15;
				this.str.tmp = '';
				for (i = 0; i <= this.nOfPage; i++)
					this.str.tmp += "<a href='#page-" + i + "'>[" + (i + 1) + "]</a>";
				$(".paging").html(this.str.tmp) && (this.str.tmp = '');
				this.mouseEvent.page.clicked();
			},
			chg_img: function (jmp) {
				$("section.container .gallery > section .right .top").animate({'opacity':'0'},200,null,function(){
					$(this).html("<img src='images/gallery/500/" + (jmp + 1) + ".jpg'>").animate({'opacity':'1'},600,null);
				});
				$(this.path + " img").css({
					"opacity": "0.7",
					"outline": "none"
				});
				$(this.path + " img").eq(jmp).css({
					"opacity": "1",
					"outline": "3px solid #F0B00F"
				});
			},
			autoChangePages : function (j, ind) {
				if (j == ind) {
					$(this.path + " > section").css("display", "none");
					for (i = j * 5; i < (j + 1) * 5; i++)
						$(this.path + " > section").eq(i).css("display", "block");
					this.chg_img(j * 15);
				}
			},
			chg_pge: function (ind) {
				for (i = 0; i < this.nOfPage; i++) {
					this.autoChangePages(i, ind);
				}
			},
			ply_pus: function () {
				$(".gallery p span a").click(function (e) {
					e.preventDefault();
					console.log(typeof It, It);
					$(".gallery p span a").index(this) == 0 ? (It = (It == 0) ? setInterval(function () {
						gal.chg_img(acp++);
						acp = acp > nOfImg ? 0 : acp;
						gal.chg_pge(acp / 16);
					}, 1500) : It) : (clearInterval(It) == undefined ? It = 0 : alert("ha ha :D :D"));
				});
			},
			mouseEvent: {
				page: {
					clicked: function () {
						$(".paging a").live("click", function (e) {
							e.preventDefault();
							ind = $(".paging a").index(this);
							gal.chg_pge(ind);
							acp = Math.floor(ind) * 15;
						});
					}
				},
				pics: {
					clicked: function () {
						$(gal.path + " img").live("click", function () {
							acp = $(gal.path + " img").index(this);
							gal.chg_img(acp);
						});
					},
					mouseEnter: function () {
						$(gal.path + " img").css("opacity", "0.7").live("mouseenter", function () {
							$(this).css({
								"opacity": "1",
								"outline": "2px solid #F0B00F"
							});
							$(gal.path + " img").eq(acp).css({
								"opacity": "1",
								"outline": "2px solid #F0B00F"
							});
						});
					},
					mouseLeave: function () {
						$(gal.path + " img").live("mouseleave", function () {
							$(gal.path + " img").css({
								"opacity": "0.7",
								"outline": "none"
							});
							$(gal.path + " img").eq(acp).css({
								"opacity": "1",
								"outline": "2px solid #F0B00F"
							});
						});
					}
				}
			}
		}/* scroll fix on pages ... !*/

		setscroll = function (addr, fsb, chs) { /* fsb : first_size_box, chs : changed size, */

			var pos_scrollBar_of_top_page = 803,
				size_of_button;

			with($("#scrollBar"))
				(fsb >= chs) ? hide(200) : show(200);
			if ((div = chs / fsb) > 1) {
				size_of_button = fsb / div;
				$("#button").css('height', size_of_button);
			}
			var drag = {
				downMouse: function () {
					$('#button', $("#scrollBar")).mousedown(function () {
						$("#scrollBar").attr("onmousedown", "return false");
						drag.move();
					});
				},
				upMouse: function () {
					$(window).mouseup(function () {
						$(window).unbind('mousemove');
					});
				},
				move: function () {
					$(window).mousemove(function (e) {
						var pos_top_button = Top = e.pageY - pos_scrollBar_of_top_page;
						if (pos_top_button < 0) 
							Top = 0;
						if (pos_top_button > fsb - size_of_button) 
							Top = fsb - size_of_button;
						$("#button").css('top', Top + 'px');
					});
				}
			}
			drag.downMouse();
			drag.upMouse();
		}
		/* color page  !! */
		var clr = {
			path: ".container .color > section .right .down > section",
			boxImg: [
				'<div class="w3 left"></div>',
				'<div class="w3 left"></div>',
				'<div class="w3 left"></div>',
				'<div class="w3 mla last"></div>'
			],nOfImg: '',
			chkExist: function (addr) {
				// ref : http://stackoverflow.com/questions/905298/jquery-storing-ajax-response-into-global-variable
				var sw = $.ajax({
					url: './pages/chkImg.php',
					data: 'addr=' + addr,
					context: document.body,
					global: false,
					async: false,
					success: function (data) {
						return data;
					}
				}).responseText;

				return sw != 0;
			},
			setbox: function (typ) {
				for (var i = 1; clr.chkExist("../images/colorchart/" + typ + i + ".png"); i++);
				nOfImg = i - 1,
				tmp = main = '';
				for (var i = 0; i < nOfImg;) {
					for (var j = 0; j < 4 && i < nOfImg; j++, i++)
						tmp += this.boxImg[j];
					main += "<section class='mb6'>" + tmp + "</section>";
					tmp = '';
				}
				$(this.path).html(main) && (main = '');
				clr.setImg(typ);
				setscroll(this.path,354,$(this.path).height());
			},
			setImg: function (typ) {
				$path = this.path + " > section"
				for (var i = 1; i <= nOfImg; i++)
					$(' div', $($path)).eq(i-1).
						html('<img src ="./images/colorchart/' + typ + i + '.png" alt = "" />');
			},
			actbtn: function () {
				$("#btn-color div").live('click', function () {
					$("#btn-color div input").removeClass("active").eq($(this).index()).addClass('active');
					clr.setbox($("#btn-color div input").eq($(this).index()).val());
				});
			}
		};
		clr.actbtn();
	}
};

$(document).ready(codeStationJq.ready);