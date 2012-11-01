<section class="mt12 down agy_form">
	<section class="mla mra pt1">
		<section class="agancy w10 ml2 right">
			<form id="agancy-form" action="agancy.php" method="post" target='ifrm'>
				<label>نام و نام خانوادگی متقاضی <span class="req">*</span></label>
				<input class="text" type="text" name="name" id="name" placeholder="" />
				<label>تلفن تماس <span class="req">*</span></label><br />
				<input class="text" type="text" name="tel" id="tel" placeholder="" />
				<label>نمابر <span class="req">*</span></label><br />
				<input class="text" type="text" name="fax" id="fax" placeholder="" />
				<label>پست الکترونیک<span class="req">*</span></label><br />
				<input class="text" type="text" name="mail" id="mail" placeholder="" />
				<label>آدرس<span class="req">*</span></label>
				<textarea class="text" name="address" id="address" placeholder="" ></textarea>
				<label>نوع مالکیت محل شرکت :</label><br /><br />
				<label for="lsd"><input id="own" class="radio" type="radio" name="ownership" />استیجاری</label>
				<label for="pv"><input id="own" class="radio" type="radio" name="ownership" />شخصی</label><br />
				<div class="space"></div>
				<label class="tit">اشخاص حقوقی</label>
				<label>نام شرکت / نمایشگاه / فروشگاه</label>
				<input class="text" type="text" name="name_title" id="name_title" placeholder="" />
				<label>شماره ثبت</label>
				<input class="text" type="text" name="sign_num" id="sign_num" placeholder="" />
				<label>نوع فعالیت</label>
				<input class="text" type="text" name="kind" id="kind" placeholder="" />
				<label>تعداد پرسنل</label>
				<input class="text" type="text" name="workers" id="workers" placeholder="" />
				<label>میزان تحصیلات مدیران</label>
				<input class="text" type="text" name="deg" id="deg" placeholder="" />
				<div class="space"></div>
				<label class="tit">اطلاعات تخصصی</label>
				<label>نمایندگی هستم :</label>
				<input class="text" type="text" name="agy_name" id="agy_name" placeholder="" />
				<label>عضویت :</label>
				<input class="text" type="text" name="agy_num" id="agy_num" placeholder="" />
				<label>با آلومنیوم کامپوزیت آشنایی قبلی دارید ؟<span class="req">*</span></label>
				<label for="yes"><input id="know1" class="radio" type="radio" name="know" required/>بله</label>
				<label for="no"><input id="know2" class="radio" type="radio" name="know" required/>خیر</label>
				<label>تابه حال پروژه ای را با آلومنیوم کامپوزیت<br /> اجرا نموده اید؟<span class="req">*</span></label>
				<label for="yes"><input id="past1" class="radio" type="radio" name="past" required/>بله</label>
				<label for="no"><input id="past2" class="radio" type="radio" name="past" required/>خیر</label>
				<label>در صورتی که پروژه ای را با آلومنیوم کامپوزیت<br /> اجرا نموده اید مشخصات ورق را وارد کنید :</label><br />
				<textarea class="text" name="prj" id="prj" placeholder="" ></textarea>
				<label>محل های بکارگیری شده :</label><br />
				<textarea class="text" name="loc" id="loc" placeholder="" ></textarea>
				<label>اهم فعالیتهای در دست اقدام در زمینه نمایندگی :</label><br />
				<textarea class="text" name="act" id="act" placeholder="" ></textarea>
				<label>توانمندی های فنی و فروش :</label><br />
				<textarea class="text" abl="abl" id="abl" placeholder="" ></textarea>
				<label>روش های بازاریابی و فروش :<span class="req">*</span></label><br />
				<textarea class="text" name="ways" id="ways" placeholder="" ></textarea>

				<input class="agy_btn" type="submit" name="submit" value="فرستادن" />
				<input class="agy_btn" type="reset" name="reset" id="reset" value="پاک کردن" />
				
			</form
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
						درخواست نمایندگی ( فرم شماره 1 ) <br /> <br />با سلام برای ارائه درخواست نمایندگی فرم سمت راست را با دقت تکمیل نمایید . در صورتی که زمان کافی جهت تکمیل فرم و یا جمع آوری اطلاعات مورد نیاز ندارید می توانید نسخه pdf فرم را دانلود نموده و تکمیل نمایید .
					</p>
					<a href="#">برای دانلود فرم کلیک کنید</a>
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
	$('#agancy-form').submit(function(){
		var target, err = false;

		target = $('#name');
		if( validateText(target.val(),3) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#tel');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#fax');
		if( validateText(target.val(),10) ){
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

		target = $('#address');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#address');
		if( validateText(target.val(),10) ){
			target.removeClass('err').addClass('ok');
		}else{
			target.removeClass('ok').addClass('err');
			err = true;
		}

		target = $('#ways');
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

$("form#agancy-form").radiovalidator({
    rules: {
        radio: function(input) {
            if (input.filter("[type=radio]") && input.attr("required")) {        
                return $("form").find("[name=" + input.attr("name") + "]").is(":checked");
            }
            return true;
        }
    },
    messages: {
        radio: "یکی از گزینه ها را انتخاب کنید"
    }
});​
</script>


