/*jslint browser: true*/
/*global $, jQuery*/
$(window).load(function () {
	"use strict";
	$("body > .loading").css('display', 'none');
});
// jquery my code
var codeStationJq = {
	ready: function () {
		"use strict";
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
				if (which === this.Links[0] || which === this.Links[2]) {
					$(this.Links[0]).removeClass("active").eq(i).addClass("active");
					$(this.Links[2]).removeClass("active").eq(i).addClass("active");
				} else if (which === this.Links[1]) {
					Int !== false && clearTimeout(Int);
					Int = false;
				}
			},
			MouseLeave: function (which, i) {
				if (which === this.Links[0] || which === this.Links[2]) {
					$(this.Links[0] + ", " + this.Links[2]).removeClass("active");
					$(this.Links[0]).eq(pos).addClass("active");
					$(this.Links[2]).eq(pos).addClass("active");
				} else if (which === this.Links[1]) {
					$(which).closest('ul').mouseleave(function () {
						typeof Int === 'boolean' && change_image();
					});
				}
			}
		};

		/* ajax load*/
		for (var i = 0; i < menus.HFLinks.length; i++) {
			$(menus.HFLinks[i]).click(function (e) {
				setTimeout(function () { /* create gallery ! */
					gal.setBox();
					gal.setImg();
					gal.setPage();
					gal.ctr_btn();
					prcss.pickImg();
					clearInterval(It);
					acp = 0;
					clearTimeout(prcss.Int);
					prcss.rotat(0);

				}, 500);
				e.preventDefault();
				var url;
				menus.loadAjax(url = $(this).attr("href"), "#con", true);
				changer(url);
			});
		}
		for (i = 0; i <= menus.Links.length; i++) {
			(function (i) {
				$(menus.Links[i]).live('click mouseenter mouseleave', function (e) {
					if (e.type === 'mouseleave')
						menus.MouseLeave(menus.Links[i], $(menus.Links[i]).index(this));// mouse leave on links 
					else if (e.type === 'mouseenter')
						menus.MouseEnter(menus.Links[i], $(menus.Links[i]).index(this));// mouse enter on links 
					else{
						menus.active(menus.Links[i], $(menus.Links[i]).index(this));// active links in page 
						if (i==1){
							$('.li-gallery').die('click').live('click', function(){
								console.log($('.li-gallery').index(this));
							});

						}
					}
				});
			})(i);
		}
		function changer(url) {
			var path = $("section.container .slider nav ul");
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
		} //animation in search box
    	var smt = $("input#smt"), schh = $("input#schh");

    	$('#searchBox').mouseover(function(){
    		schh.css({
    			'opacity':'1',
    			'width':'180px',
    		});
    	});
    	$('#searchBox').mouseleave(function(){
    		schh.animate({'width':'0px',},700,'linear',function(){
    			schh.css({
					'opacity':'0'
				});	
    		});
    	});
    	$('#searchBox').click(function(){
    		if (this.value == this.defaultValue){
					this.value = '';
				}
    	});
    	schh.keyup(function() {
			var dataString = schh.val();
			$.ajax({
				type: "GET",
				url: "./pages/find.php",
				data: 'srch=' + dataString,
				success: function (data) {
					$('aside').html(data);
				}
			});
    	});
    	/*Slider basic work ;)*/
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
			$dummy = -1,
			change_image;
		$(".container .slider section > .middle").css('position', 'relative')
			.addClass("view")
				.html("<img width='430' height='300' src='images/banner/sliderpic1.jpg' alt='image pic slider' >");
		$(".view img").css({
			'z-index': '-1',
			'position': 'absolute',
			'left': '0'
		});
		var efct_banner = function ($newpos) {
			$(".view img").animate({'opacity':'0'},300,'linear',function () {
				$(this).hide().attr("src", imgsInBanner[image].pics[$newpos]).show().animate({'opacity':'1'},300);
			});
			return $newpos
		}
		$('section.container .top nav a').live('click', function (event) {
			event.preventDefault();
			efct_banner(pos);
			$dummy = pos === imgsInBanner[image].pics.length - 1 ? -1 : pos;
		});
		(change_image = function () {
			var autoPlayDelay = 3000;
			$("section.container .top nav a").removeClass("active").eq(efct_banner(++$dummy)).addClass("active");
			$dummy = $dummy >= imgsInBanner[image].pics.length - 1 ? -1 : $dummy;
			Int = setTimeout(change_image, autoPlayDelay);
		})();
		 /* gallery page !*/
		var acp = 0,
			nOfImg = 53,
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
					for (var j = 0; j < 3 && i < nOfImg; j++, i++) {
						this.str.tmp += this.boxImg[j];
					}
					this.str.mas += "<section class='mb5'>" + this.str.tmp + "</section>";
					this.str.tmp = '';
				}
				$(this.path).html(this.str.mas) && (this.str.mas = '');
				this.mouseEvent.pics.mouseEnter();
				this.mouseEvent.pics.mouseLeave();
				this.mouseEvent.pics.clicked();
			},
			setImg: function () {
				for (var i = 0; i <= $(this.path + " div").length; i++)
					$(this.path + " div").eq(i).html("<img src='images/gallery/75/" + (i + 1) + ".jpg' width='70' height='70'>");
				this.chg_img(0);
			},
			setPage: function () {
				this.nOfPage = nOfImg / 15;
				this.str.tmp = '';
				for (i = 0; i < this.nOfPage; i++)
					this.str.tmp += "<div class='num'><a href='#page-" + i + "'>" + (i + 1) + "</a></div>";
				$(".paging").html(this.str.tmp) && (this.str.tmp = '');
				this.mouseEvent.page.clicked();
			},
			chg_img: function (jmp) {
				$("section.container .gallery > section .right .top").animate({},30,null,function(){
					$(this).html("<img src='images/gallery/500/" + (jmp + 1) + ".jpg'>").animate({},30,null);
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
			chg_pge: function (ind) {
				for (var p = 0; p < this.nOfPage; p++) {
					if (p === ind) {
						$(this.path + " > section").css("display", "none");
						for (i = ind * 5; i < (ind + 1) * 5; i++)
							$(this.path + " > section").eq(i).css("display", "block");
						this.chg_img(ind * 15);
					}
				}
			},
			ctr_btn: function () { /* control button !!! */
				$(".gallery div#gbtn .play a").click(function (e) {
					e.preventDefault();
					(It = (It === 0) ? setInterval(function () {
						gal.chg_img(++acp);
						acp = acp >= nOfImg ? 0 : acp;
						if (!acp){
							clearInterval(It);
							It = 0;
						}
						var ind = acp / 15;
						$(".paging a").removeClass("active").eq(ind).addClass('active');
						gal.chg_pge(ind);
					}, 3500) : It);
				});
				$(".gallery div#gbtn .puase a").click(function (e) {
					e.preventDefault();
					clearInterval(It) == undefined ? It = 0 : alert("ha ha :D :D =>> Beban nishete :@");
				});
				$(".gallery div#gbtn .next a").click(function (e) {
					e.preventDefault();
					acp = acp >= nOfImg-1 ? 0 : acp + 1;
					var ind = Math.floor(acp / 15);
					if (acp >= ind * 15) {
						gal.chg_pge(ind);
						$(".paging a").removeClass("active").eq(ind).addClass('active');
					}
					gal.chg_img(acp);
				});
				$(".gallery div#gbtn .prev a").click(function (e) {
					e.preventDefault();
					acp = acp <= 0 ? nOfImg-1 : acp-1;
					var ind = Math.floor(acp / 15);
					console.log(acp , ind * 15);
					if (acp < ((ind+1) * 15) || nOfImg === acp) {
						gal.chg_pge(ind);
						$(".paging a").removeClass("active").eq(ind).addClass('active');
					}
					gal.chg_img(acp);
				});
			},
			mouseEvent: {
				page: {
					clicked: function () {
						$(".paging a").live("click", function (e) {
							e.preventDefault();
							var ind = $(".paging a").index(this);
							$(".paging a").removeClass("active").eq(ind).addClass('active');
							gal.chg_pge(ind);
							acp = ind  * 15;
						});
						$(".paging ~ .next").die('click').live("click", function (e) {
							e.preventDefault();
							if (nOfImg-acp >= 15)
								acp = acp >= nOfImg ? 0 : acp+15;
							else
								acp = 0;
							var ind = Math.floor(acp/15);
							gal.chg_pge(ind);
							$(".paging a").removeClass("active").eq(ind).addClass('active');
						});
						$('.left .prev').die('click').live("click", function (e) {
							e.preventDefault();
							if (acp-15 >= 0)
								acp = acp <= 0 ? nOfImg : acp-15;
							else
								acp = nOfImg;
							var ind = Math.floor(acp/15);
							gal.chg_pge(ind);
							$(".paging a").removeClass("active").eq(ind).addClass('active');
						});
					}
				},
				pics: {
					clicked: function () {
						$(gal.path + " img").live("click", function () {
							gal.chg_img(acp = $(gal.path + " img").index(this));
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
		} /* scroll fix on pages ... !*/

		var setscroll = function (addr, fsb, chs, pmcxt) { /* fsb : first_size_box, chs : changed size,pmcxt : path_move_context */
			/* css needed !!!*/
			$(addr).css({
				'height' : fsb+'px',
				'min-height' : '',
				'overflow': 'hidden'
			});
			/* tarife ye seri moteghayer haye kolli */
			var pos_scrollBar_of_top_page = 803,
				size_of_button, div;
			var veiw = pmcxt;
			/* show-hidden kardane scroll */
				(fsb >= chs) ? $("#scrollBar").hide(200) : $("#scrollBar").show(200)
			/* sakhtane dokmeye buttun ba tavajoh be height motaviyat !! */
			&&
				$("#button").css({
					'height': (size_of_button = fsb / (div = chs / fsb)),
					'top' : 0
				})
			/*drag kardane *buttun dar scroll !! */
			var drag = {
				/*vaghi ke mousedown mishavad !! */
				downMouse: function () {
					$('#button', $("#scrollBar")).mousedown(function (e) {
						$("#scrollBar").attr("onmousedown", "return false"); /*fixed a bug !!*/
						drag.move(e.pageY);
					});
				},
				/*vaghti ke mouseup mishavad dar har jayi az window !! ;) */
				upMouse: function () {
					$(window).mouseup(function () {
						$(window).unbind('mousemove'); /* fixed a bug !!*/
					});
				},

				move: function (index) { /*index : mokhtasate-Y noghteyi ke bara martabe aval mousedown mishavad */
					var getVal = function (posi) { /*taeen Y be sorate nesbi ! */
						return posi - pos_scrollBar_of_top_page
					}
					var mY = 0,
						/* bara detect kardane inke mouseup mishavad ya down !! */
						off = getVal(index - parseInt($("#button").css('top'))); /* goto index ;;)*/

					$(window).mousemove(function (e) {
						var topButton, downButton, tp, godown, goup ;
						tp = topButton = Math.floor(parseInt($("#button").css('top')));
							downButton = Math.floor(topButton + size_of_button); /*dar dast dashtane avalo akhate button !*/
						godown = goup = function () {
							(getVal(e.pageY - off) <= fsb - size_of_button) ? tp = (getVal(e.pageY - off) >= 0) ? getVal(e.pageY - off) : 0 : tp = fsb - size_of_button;
							if (downButton < fsb && topButton >= 0) {
								$("#button").css('top', tp + 'px');
								$(veiw).css({
									'position': 'relative',
									'top': (-tp * div) + 'px'
								});
							} else if (topButton < 0) {
								$("#button").css('top', 0);
							}
							if (topButton > fsb - size_of_button) 
								$("#button").css('top', (fsb - size_of_button) + 'px')
						} /*in tike kollan jafange vali bara in naveshtam ke begam baaale ;)) */
						if (e.pageY < mY) {
							goup();
						}
						else if (e.pageY > mY) {
							godown();
						} else {
							//console.log('no thing .... ');//fixed a bug !!! #:-SS
						}
						mY = e.pageY;
					});
				}
			}
			drag.downMouse();
			drag.upMouse()
		} /* colorchart page  !! */
		var clr = {
			path: ".container .color > section .right .down > section",
			boxImg: [
				'<div class="w3-1 left"></div>',
				'<div class="w3-1 left"></div>',
				'<div class="w3-1 left"></div>',
				'<div class="w3-1 mla last"></div>'
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
				var nOfImg = i - 1, main = '', tmp = '';
				for (var i = 0; i < nOfImg;) {
					for (var j = 0; j < 4 && i < nOfImg; j++, i++)
					tmp += this.boxImg[j];
					main += "<section class='mb4'>" + tmp + "</section>";
					tmp = '';
				}
				$(this.path).html(main) && (main = '');
				clr.setImg(typ);
				$(this.path).css({
					'height': '',
					'min-height': $(this.path).height() + 'px',
					'overflow': '',
					'top': 0
				});
				setscroll(this.path, 385, $(this.path).height(), "section.container .color > section > .right .down > section > section");
			},
			setImg: function (typ) {
				var $path = this.path + " > section"
				for (var i = 1; i <= nOfImg; i++)
					$(' div', $($path)).eq(i - 1).
						html('<img src ="./images/colorchart/' + typ + i + '.png" alt = "" />');
			},
			openSlide: function (typ) {
				$(this.path + ' img').die('click').live('click', function () {
					var npics = $(' img', $(clr.path)).length,
						//number of image 
						ipics = $(' img', $(clr.path)).index(this) + 1; //clicked img
					$('#con .down .right > .down').css('visibility', 'hidden').animate({}, 100, '', function () {
						$(clr.path).siblings('#lightbox').show(700);
						$('#con .down .right .down #lightbox').css('visibility', 'visible');
					});
					$(' #veiw', $('#lightbox')).css('background-image', 'url(' + './images/colorchart/' + typ + '/' + typ + ipics + '.jpg' + ')');
					$(' #ctrl', $('#lightbox')).text(ipics + '/' + npics);
					clr.mthSlide(typ, npics, ipics);
					clr.closSlide();
				});
			},
			mthSlide: function (typ, n, i) {
				//http://stackoverflow.com/questions/4659032/override-all-javascript-events-bound-to-an-element-with-a-single-new-event
				var go2pic = function (ii) {
					$(' #veiw', $('#lightbox')).css('background-image', 'url(' + './images/colorchart/' + typ + '/' + typ + ii + '.jpg' + ')');
					$(' #ctrl', $('#lightbox')).text(ii + '/' + n)
				}
				$("#lightbox #back").die('click').live('click', function () {
					(i > 1) && go2pic(--i);
				});

				$("#lightbox #next").die('click').live('click', function () {
					(i < n) && go2pic(++i);
				});
			},
			closSlide: function () {
				this.cls = function () {
					$(clr.path).siblings('#lightbox').hide(700, function () {
						$('#con .down .right > .down').css('visibility', 'visible');
					});
				}
				$(document).keydown(function (e) {
					if($('#lightbox').css('display')=='block'){
						var obj;
						((e.keyCode ? e.keyCode : e.which) == "27") && (obj = new clr.closSlide()) && obj.cls()					
					}
				});
				$('#lightbox #close').click(function (e) {
					e.preventDefault();
					var obj = new clr.closSlide();
					obj.cls();
				});
			},
			actbtn: function () {
				$("#btn-color div").live('click', function () {
					var typ = $("#btn-color div input").eq($(this).index()).attr("name");
					$("#btn-color div input").removeClass('active').eq($(this).index()).addClass('active');
					var obj = new clr.closSlide();
					obj.cls();
					clr.setbox(typ);
					clr.openSlide(typ);
				});
			}
		};
		var prd = {
			path: ".container .products > section .right .down > section",
			loading: function () {
				$("#btn-pdt div").live('click',function () {
					$("#btn-pdt div input").removeClass("active").eq($(this).index()).addClass('active');
					var getname = $("#btn-pdt div input").eq($(this).index()).attr('name');
					$(prd.path).load('pages/product_content.php');
					$(prd.path).css({
						'height': '',
						'min-height': $(prd.path).height() + 'px',
						'overflow': '',
						'top': 0
					});
					setTimeout(function (){
						$('section', prd.path).fadeOut('fast').filter('#'+getname).fadeIn('normal')
						setscroll(prd.path, 385, $(prd.path).height(),prd.path + ' section');
					},300);
				});
			}
		}
		prd.loading();
		/* Scroll for Agancy_form Page */
		clr.actbtn();
		var agy = {
			path: ".container .agy_form > section .agancy",
			veiw: ".container .agy_form > section .agancy form",
			hgt: 385,
			scrll: function () {
				$(agy.veiw).css({
					'top': 0
				});
				setscroll(this.path, this.hgt, $(this.path).height(),this.veiw);
			}
		};
		var contact = {
			changeform: function () {
				$('.agylink a').live('click', function (e) {
					e.preventDefault();
					$('.contact').hide();
					$('.agy_form').show();
					setTimeout(function () { 
					$(agy.path).css({
						'height' : '',
						'min-height' : agy.hgt+'px',
						'overflow': 'visible'
					});
					agy.scrll();
					}, 100);
				});
				$('.contlink a').live('click', function (e) {
					e.preventDefault();
					$('.contact').show();
					$('.agy_form').hide();
				});
			},
			sendmail: function () {
				$("form#agancy-form").live('submit', function (event) {
					event.preventDefault();
					var dataString = 'name=' + $("form #name").val() + '&mail=' + $("form #mail").val() + '&phone=' + $("form #tel").val() + '&subject=' + $("form #subject").val() + '&txt=' + $("form #txt").val();
					$.ajax({
						type: "POST",
						url: "pages/send.php",
						data: dataString,
						success: function (data) {
							$('.contact .contact p').html(data);
						}
					});
				});
			}
		};
		contact.sendmail();
		contact.changeform();
		var prcss = {
			boxs: '#disk div',
			radius: 167,
			Int:'',
			forEach: function (arr, fn) {
				return Array.prototype.forEach.call(arr, fn);
			},
			pickImg: function () {
				this.forEach(this.boxs, function (box, j) {
					$(prcss.boxs).eq(j).css('background', 'url(./images/process/' + parseInt(j + 1) + '.png) no-repeat center center');
				});
			},
			rotat: function (q) { //attach items in disk and rotating
				var rot, events = 'click mouseenter mouseleave';
				$(this.boxs).die(events).live(events, function (e) {
					if (e.type === 'mouseenter')
						clearTimeout(prcss.Int);
					else if (e.type === 'mouseleave'){
						clearTimeout(prcss.Int);
						prcss.rot();
					}
					else {
						//var margin = parseInt($('.wheel').css('margin-left'))-414;//-32px
						if ($('.wheel + section' || '#veiw').css('display')==='none'){
							$('.wheel').animate({
								'left': '-17px'
							}, 800,'linear');
							$('#disk').animate({
								'right': '420px'
							}, 800, 'linear',function () {
								$('.wheel + section').css('display','block');
							});
						}
						$('.wheel + section').load('pages/process_content.php');
						$('#veiw').css({
							'height': '',
							'min-height': $('#veiw').height() + 'px',
							'overflow': ''
						});
						var nth = $(prcss.boxs).index(this);
						setTimeout(function () {
							$('#veiw > section').fadeOut('fast').eq(nth).fadeIn('fast');
							setscroll('#veiw', 500, $('#veiw').height(),'#veiw  > section:nth('+nth+')');
						}, 400);
					}
				});
				/*
				$(document).keydown(function (e) {
					if ($('#veiw').css('display')==='block')
						((e.keyCode ? e.keyCode : e.which) == "27") && alert ('not actived ... ');
				});
				*/
				var detectBrowser = function () {
					var testCSS = new Function("prop", "return prop in document.documentElement.style"), br, browser;
					for (br in browser = {
						o: !! (window.opera && window.opera.version),
						// Opera 8.0+
						s: Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0,
						// At least Safari 3+: "[object HTMLElementConstructor]"
						moz: testCSS('MozBoxSizing'),
						// FF 0.8+
						webkit: testCSS('WebkitTransform'),
						// Chrome 1+
						ms: /*@cc_on!@*/
						false || testCSS('msTransform') // At least IE6
					})
						if (browser[br])
							return br
				}
				var dtct = detectBrowser();
				(this.rot = function () {
					prcss.forEach(prcss.boxs, function (box, i) {
						var teta = (2 * Math.PI / $(prcss.boxs).length * i) + q,
							x = ((Math.cos(teta)) + 1) * prcss.radius,
							y = ((Math.sin(teta)) + 1) * prcss.radius;
						$(prcss.boxs).eq(i).css("-"+dtct+"-"+"transform", "translate(" + x + "px, " + y + "px)");
					});
					prcss.Int = setTimeout(function () {
						prcss.rot(q = q > 6.28 ? 0 : q = q + 0.05);
					}, 70);
				})();
			}
		};
	}
};

$(document).ready(codeStationJq.ready);