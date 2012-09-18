<section class="mt12 down contact">
	<section class="mla mra pt1">
		<div class="w9 ml2 left">
			<form action="#" method="post" name="sendMail" >
				<table>
					<tr>
						<td><label>Name    :</label></td>
						<td><input type="text" name="name" value=""/></td>
					</tr>
					<tr class="h">
						<td colspan="2"></td>
					</tr>
					<tr>
						<td><label>Email   :</label></td>
						<td><input type="text" name="email" value=""/></td>
					</tr>
					<tr  class="h">
						<td colspan="2"></td>
					</tr>
					<tr>
						<td><label>Tel     :</label></td>
						<td><input type="text" name="tel" value=""/></td>
					</tr>
					<tr  class="h">
						<td colspan="2"></td>
					</tr>
					<tr>
						<td><label>Subject :</label></td>
						<td><input type="text" name="subject" value=""/></td>
					</tr>
					<tr  class="h">
						<td colspan="2"></td>
					</tr>
					<tr>
						<td><label>Comment :</label></td>
						<td><textarea></textarea></td>
					</tr>
					<tr  class="h">
						<td colspan="2"></td>
					</tr>
					<tr>
						<td colspan="2"><input type="submit" name="" value="submit" /></td>
					</tr>
				</table>
			</form>

			<?php
	if ( isset($_POST['fullName']) && isset($_POST['mail']) && isset($_POST['subject']) && isset($_POST['msg']) ){
		$name = $_POST['fullName'];
		$mail = $_POST['mail'];
		$subject = $_POST['subject'];
		$msg = $_POST['msg'];
		if( @mail('aghasizadeh70@gmail.com',$subject,'Name: '.$name. "\n" .$msg,"From:info@aghasizadeh.com\nReply-To:".$mail) ){
			echo '<h1 style="text-align:center;">Your massage has been sent. Please be patient for the answer. thank you!</h1>';
		}else{
			echo '<h1 style="text-align:center;">Your massage has not been sent. Please fill the form again. thank you!</h1>';
		}
	}
?>

		</div>
		<section class="w6 ml14 pt1 right">
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
						http://example.com
						info@example.com
					</p>
					<div class="line"></div>
				</div>
			</article>
		</section>
	</section>
</section>
