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
			$(".view img").hide().attr("src", imgsInBanner[image].pics[$newpos]).fadeIn();
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
		}/* gallery page !*/
		acp = 0;
		$(".gallery").live("mouseenter",function () {
			var gal = {
				nOfImg: 23,
				nOfPage: '',
				boxImg: [
					"<div class='w2 left'></div>",
					"<div class='w2 left'></div>",
					"<div class='w2 ml4 right last'></div>"
				],
				path: "section.container .gallery > section .left > section",
				str: {
					tmp: '',
					mas: ''/*master change ;) */
				},
				setBox: function () {
					for (var i = 0; i < this.nOfImg;) {
						for (var j = 0; j < 3 && i < this.nOfImg; j++, i++)
						this.str.tmp += this.boxImg[j];
						this.str.mas += "<section class='mb5'>" + this.str.tmp + "</section>";
						this.str.tmp = '';
					}
					$(this.path).html(this.str.mas);
					this.mouseEvent.pics.mouseEnter();
					this.mouseEvent.pics.mouseLeave();
					this.mouseEvent.pics.clicked();
				},
				chg_img: function(jmp, $this){
					$("section.container .gallery > section .right .top").html("<img src='images/500/"+ (jmp) +".jpg'>");
					$(this.path + " img").css({
						"opacity": "0.7",
						"outline": "none"
					});
					console.log(!$this);
					$this.css({
						"opacity": "1",
						"outline": "3px solid #F0B00F"
					});
				},
				setImg: function () {
					for (i = 0; i <= $(this.path + " div").length; i++)
						$(this.path + " div").eq(i).
							html("<img src='images/75/" + (i + 1) + ".jpg' width='70' height='70'>");
				},
				setPage: function () {
					this.nOfPage = this.nOfImg / 15;
					this.str.tmp = '';
					for (i = 0; i <= this.nOfPage; i++)
						this.str.tmp += "<a href='#" + i + "'>[" + (i + 1) + "]</a>";
					$(".paging").html(this.str.tmp);
					this.mouseEvent.page.clicked(this.nOfPage);
				},
				mouseEvent: {
					page: {
						clicked: function (num) {
							$(".paging a").live("click", function () {
								ind = $(".paging a").index(this);
								for (i = 0; i < num; i++) {
									(function (j) {
										if (j == ind) {
											$(gal.path + " > section").css("display", "none");
											for (i = j * 5; i < (j + 1) * 5; i++)
												$(gal.path + " > section").eq(i).css("display", "block");
										}
									})(i);
								}
							});
						}
					},
					pics: {
						clicked: function () {
							$(gal.path + " img").live("click",function(){
								acp = $(gal.path + " img").index(this);
								gal.chg_img(acp+1, $(this));
							});
						},
						mouseEnter: function () {
							$(gal.path + " img").css("opacity", "0.7").live("mouseenter",function () {
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
							$(gal.path + " img").live("mouseleave",function () {
								$(gal.path + " img").css({
									"opacity": "0.7",
									"outline":"none"
								});
								$(gal.path + " img").eq(acp).css({
									"opacity": "1",
									"outline": "2px solid #F0B00F"
								});
							});
						}
					}
				}
			}
			gal.setBox();
			gal.setImg();
			gal.setPage();
		});
	}
};

$(document).ready(codeStationJq.ready)