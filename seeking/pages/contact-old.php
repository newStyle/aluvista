<section class="mt12 down contact">
	<section class="mla mra pt1">
		<section class="contact w10 mr1 right">
			<form id="contact-form" action="sendmail.php" method="post" target='ifrm'>
				<label>نام :</label>
				<input class="text" type="text" name="name" id="name" placeholder="" />
				<label>ایمیل :</label>
				<input class="text" type="text" name="mail" id="mail" placeholder="" />
				<label>تلفن :</label>
				<input class="text" type="text" name="tel" id="tel" placeholder="" />
				<label>عنوان :</label>
				<input class="text" type="text" name="subject" id="subject" placeholder="" />
				<label>پیام :</label>
				<textarea class="text" name="txt" id="txt" placeholder="" ></textarea>
				<input class="btn" type="reset" name="reset" id="reset" value="پاک کردن" />
				<input class="btn" type="submit" name="submit" value="فرستادن" />
			</form>
			<iframe id='ifrm' name='ifrm' src="" frameborder="0" scrolling="no"></iframe>
		</section>
		<div class="agylink">
			<a href="#">فرم اعطاي نمايندگي</a>
		</div>
		<section class="w6 ml2 pt1 left">
			<article>
				<div class="w6 mt6">
					<p>
						دفتر مركزي : مشهد خيابان فلسطين -<br /> فلسطين 9 - شماره 94 
					</p>
					<p>
						تلفن : 8400640 (511) <br />
						فکس : 8431318 - 8431860 (511)
					</p>
				</div>
					<div class="line"></div>
				<div class="w6 fac ">
					<p>
						كارخانه : مشهد - شهرك صنعتي<br /> كاويان - نبش صنعت 13 
					</p>
					<p>
						تلفن : 2543377 (511) <br />
						فکس :  2543378 (511)
					</p>
				</div>
					<div class="line"></div>
				<div class="w6 mt10 adds ">
					<p>
						www.aluvsista.com
						info@aluvista.com
					</p>
				</div>
			</article>
		</section>
	</section>
</section>



<script type="text/javascript">

function validateText(str,len){
	return str.length >= len;
}

function validateEmail(str){
	var emailPattern = /^[a-z0-9+_%.-]+@(?:[a-z0-9-]+\.)+[a-z]{2,6}$/i ;

	return emailPattern.test(str);
}

$(function(){
	$('#contact-form').submit(function(){
		var target, err = false;

		target = $('#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#subject');
		if( validateText(target.val(),5) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#mail');
		if( validateEmail(target.val()) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#txt');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		if(!err){
			$('#ifrm').animate({
				height:'65px'
			},500);
		}

		return !err;

	});

	$('#reset').click(function(){
		$('#ifrm').animate({
			height:'0px'
		},200);
	});

	$('#ifrm').css({'height':'0px','width':'270px',});

});
</script>


