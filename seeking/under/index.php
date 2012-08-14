<!doctype html>
<html lang="en-US">
<head>
	<meta charset="utf-8" />
	<title>..::ALUVISTA::..</title>

	<link rel="stylesheet/less" type="text/css" href="style.less" />
	<script src="scripts/less.js" type="text/javascript"></script>
	<script type="text/javascript" src="scripts/html5shiv.js"></script>
	<script type="text/javascript"> document.write('<script type="text/javascript" src=scripts/' + ('__proto__' in {} ? 'zepto' : 'jquery') + '.js><\/script>'); </script>
	<script type="text/javascript" src="scripts/underdev.js"></script>
</head>
</head>
<body>
	<header></header>
	<section class='slideshow'>
		<div class="logo">
			<h1 class="indent">Aluvista</h1>
		</div>
		<div class="noise"></div>
		<section class="backimg">
			<?php
			$dir = "./images/gallery";
			$files= scandir('./images/gallery');
			$allowed_type = array('jpg','jpeg','png');
				foreach ($files as $file){
					$ext = pathinfo($file);
					if( !in_array(strtolower($ext['extension']),$allowed_type)) 
						continue;
					echo "<div style=\"background-image :url($dir/$file);\"></div>"."\n\t\t\t";
				}
			?>
		</section>
	</section>
	<footer>
		<h1>Under Constructio<a href="http://www.aluvista.com/old">n</a></h1>
	</footer>
</body>
</html>