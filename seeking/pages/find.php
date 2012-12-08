<?php
	$srchStr = $_GET['srch'];
	$currDir = './';
	$dh = opendir($currDir);
	$fileName = '';

	while ($fileName = readdir($dh)) {
		if (is_file("$currDir/$fileName")) {
			$contents = file_get_contents("$currDir/$fileName");
			if (@strstr($contents, $srchStr)) {
				print "<a href='$currDir/$fileName'>$fileName".'</a><br />';
			}
		}
	}
	closedir($dh);
?>
