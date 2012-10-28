<section class="mt12 down agancy">
	<section class="mla mra pt1">
		<section class="agancy w10 ml2 right">
			<form id="contact-form" action="sendmail.php" method="post" target='ifrm'>
				<label>نام و نام خانوادگی متقاضی </label>
				<input class="text" type="text" name="name" id="name" placeholder="" />
				<label>تلفن تماس </label>
				<input class="text" type="text" name="mail" id="mail" placeholder="" />
				<label>نمابر </label>
				<input class="text" type="text" name="tel" id="tel" placeholder="" />
				<label>پست الکترونیک</label>
				<input class="text" type="text" name="subject" id="subject" placeholder="" />
				<label>آدرس</label>
				<textarea class="text" name="txt" id="txt" placeholder="" ></textarea>
				<input class="btn" type="submit" name="submit" value="Send" />
				<input class="btn" type="reset" name="reset" id="reset" value="Reset" />
			</form>
			<iframe id='ifrm' name='ifrm' src="" frameborder="0" scrolling="no"></iframe>
			<div id='scrollBar'>
				<div id="button"></div>
				<div id='ribbon'></div>
			</div>
		</section>
		<section class="w6 mra ml2 pt1 left">
			<article>
				<div class="w6 mt1">
					<p>
						address, auctor ridiculus risus velit.
						Cum dapibus, sagittis turpis.
					</p>
					<div class="line"></div>
				</div>
				<div class="w6 mt2 ">
					<p>
						Tel : +98 222222 <br />
						Fax	: +98222222
					</p>
					<div class="line"></div>
				</div>
				<div class="w6 mt2 ">
					<p>
						www.aluvsista.com
						info@aluvista.com
					</p>
					<div class="line"></div>
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


