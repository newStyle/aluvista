<?php
	$srchStr = $_GET['srch'];
	$currDir = '../pages';
	$dh = opendir($currDir);
	$fileName = '';


	$keyVals = array(
		'about.php' => 'درباره ما',
		'agency_contact.php' => 'محتوای فرم نمایندگی',
		'color.php' => 'جدول رنگ',
		'contact.php' => 'تماس با ما',
		'gallery.php' => 'گالری',
		'index.php' => 'صفحه اول',
		'process_content.php' => 'مراحل ساخت',
		'product_content.php' => 'تولیدات'
		);

	while ($fileName = readdir($dh)) {
		if (is_file("$currDir/$fileName") && array_key_exists($fileName, $keyVals)) {
			$contents = file_get_contents("$currDir/$fileName");
			if (@strstr($contents, $srchStr)) {
				$fname = ($str = @strstr($fileName, "_", true)) ? $str.'.php' : $fileName;
				print "<a href='$fname'>".$keyVals[$fileName].'</a><br />';
			}
		}
	}
	closedir($dh);
?>
