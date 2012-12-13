<section class="mt12 down contact">
	<section class="mla mra pt1">
		<section class="contact w10 mr1 right">
			<p></p>
			<form id="contact-form">
				<label for="name">نام :</label>
				<input class='text' type="text" name="name" id="name" tabindex="10" pattern="^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$" required/>
				<label for="email">ایمیل :</label>
				<input class='text' type="email" name="mail" tabindex="20" id="mail" />
				<label for="phone">تلفن :</label>
				<input class='text' type="tel" name="phone" tabindex="30" id="tel" pattern="[0-9]{7,16}$" required/>
				<label for="subject">عنوان :</label>
				<input class='text' type="text" name="subject" tabindex="40" id="subject"/>
				<label for="txt">پیام :</label>
				<textarea class="text" name="txt" tabindex="50" id="txt" required ></textarea>
				<input class="btn" type="reset" name="reset" tabindex="70" id="reset" value="پاک کردن" />
				<input class="btn" type="submit" name="submit" tabindex="60" value="فرستادن" />
			</form>
		</section>
		<section class="w6 ml2 pt1 left">
			<article>
				<div class="w6 mt6">
					<p> دفتر مركزي : مشهد خيابان فلسطين <br />
						فلسطين 9 - شماره 94 </p>
					<p> تلفن : 8400640 (511) <br />
						فکس : 8431318 - 8431860 (511) </p>
				</div>
				<div class="line"></div>
				<div class="w6">
					<p> كارخانه : مشهد - شهرك صنعتي<br />
						كاويان - نبش صنعت 13 </p>
					<p> تلفن : 2543377 (511) <br />
						فکس :  2543378 (511) </p>
				</div>
				<div class="line"></div>
				<div class="w6 mt10">
					<p> www.aluvsista.com
						info@aluvista.com </p>
				</div>
			</article>
		</section>
	</section>
</section>

<section class="mt12 down agy_form" style='display:none'>
	<section class="mla mra pt1">
		<section class="agency w10 ml2 right">
			<P></P>
			<form id="agency-form">
				<label>نام و نام خانوادگی متقاضی <span class="req">*</span></label>
					<input class="text" type="text" name="name" id="name" tabindex="10" required/>
				<label>تلفن تماس <span class="req">*</span></label>
					<input class="text" type="tel" name="tel" id="tel" tabindex="20" pattern="[0-9]{7,16}$" required/>
				<label>نمابر <span class="req">*</span></label>
					<input class="text" type="tel" name="fax" id="fax" tabindex="30" pattern="[0-9]{7,16}$" required/>
				<label>پست الکترونیک</label>
					<input class="text" type="mail" name="mail" tabindex="40" id="mail" />
				<label>آدرس<span class="req">*</span></label>
					<textarea class="text" name="address" id="address" required></textarea>
				<p>نوع مالکیت محل شرکت :</p><br />
				<label>
					<input id="own" class="radio" type="radio" name="own" />
				استیجاری</label>
				<label>
					<input id="own" class="radio" type="radio" name="own" />
				شخصی</label>
				<div class="space"></div>
				<p class="tit">اشخاص حقوقی</p>
				<label for="name_title">نام شرکت / نمایشگاه / فروشگاه</label>
					<input class="text" type="text" name="name_title" id="name_title" />
				<label>شماره ثبت</label>
					<input class="text" type="text" name="sign_num" id="sign_num" />
				<label>نوع فعالیت</label>
					<input class="text" type="text" name="kind" id="kind" />
				<label>تعداد پرسنل</label>
					<input class="text" type="number" name="workers" id="workers" min="0" max="20"  />
				<label>میزان تحصیلات مدیران</label>
					<input class="text" type="text" name="deg" id="deg" />
				<div class="space"></div>
				<p class="tit">اطلاعات تخصصی</p>
				<label>نمایندگی هستم :</label>
					<input class="text" type="text" name="agy_name" id="agy_name" />
				<label>عضویت :</label>
					<input class="text" type="text" name="agy_num" id="agy_num" />
				<p>با آلومنیوم کامپوزیت آشنایی قبلی دارید ؟<span class="req">*</span></p><br />
				<label>
					<input id="know1" class="radio" type="radio" name="know" required/>
				بله</label>
				<label>
					<input id="know2" class="radio" type="radio" name="know" required/>
				خیر</label>
				<p>تابه حال پروژه ای را با آلومنیوم کامپوزیت اجرا نموده اید؟<span class="req">*</span></p>
				<label>
					<input id="past1" class="radio" type="radio" name="past" required/>
				بله</label>
				<label>
					<input id="past2" class="radio" type="radio" name="past" required/>
				خیر</label>
				<label>در صورتی که پروژه ای را با آلومنیوم کامپوزیت<br />
					اجرا نموده اید مشخصات ورق را وارد کنید :</label>
					<textarea class="text" name="prj" id="prj"></textarea>
				<label>محل های بکارگیری شده :</label>
					<textarea class="text" name="loc" id="loc" placeholder="" ></textarea>
				<label>اهم فعالیتهای در دست اقدام در زمینه نمایندگی :</label>
					<textarea class="text" name="act" id="act" placeholder="" ></textarea>
				<label>توانمندی های فنی و فروش :</label>
					<textarea class="text" abl="abl" id="abl" placeholder="" ></textarea>
				<label>روش های بازاریابی و فروش :<span class="req">*</span></label>
					<textarea class="text" name="ways" id="ways" placeholder="" ></textarea>
				<input class="agy_btn" type="submit" name="submit" value="فرستادن" />
				<input class="agy_btn" type="reset" name="reset" id="reset" value="پاک کردن" />
			</form>
			<div id='scrollBar'>
				<div id="button"></div>
				<div id='ribbon'></div>
			</div>
		</section>
		<div class="contlink"> <a href="#">فرم تماس با ما</a> </div>
		<section class="w6 mra ml2 pt1 left">
			<article>
				<div class="w6 mt1">
					<p> درخواست نمایندگی ( فرم شماره 1 ) <br />
						<br />
						با سلام برای ارائه درخواست نمایندگی فرم سمت راست را با دقت تکمیل نمایید . در صورتی که زمان کافی جهت تکمیل فرم و یا جمع آوری اطلاعات مورد نیاز ندارید می توانید نسخه pdf فرم را دانلود نموده و تکمیل نمایید . </p>
					<a href="#">برای دانلود فرم کلیک کنید</a> </div>
			</article>
		</section>
	</section>
</section>