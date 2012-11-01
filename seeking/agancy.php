<!DOCTYPE HTML>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>Sending mail ...</title>
</head>
<body>
  <?php
    error_reporting(E_ALL ^ E_NOTICE);

    $admin = 'naser0rahmani@gmail.com';

    $name    = $_POST['name'];
    $tel     = $_POST['tel'];
    $fax     = $_POST['fax'];
    $email   = $_POST['mail'];
    $address    = $_POST['address'];
    $own    = $_POST['own'];
    $name_title    = $_POST['name_title'];
    $sign_num    = $_POST['sign_num'];
    $kind    = $_POST['kind'];
    $workers    = $_POST['workers'];
    $deg    = $_POST['deg'];
    $agy_name    = $_POST['agy_name'];
    $agy_num    = $_POST['agy_num'];
    $know    = $_POST['know'];
    $past    = $_POST['past'];
    $prj    = $_POST['prj'];
    $loc    = $_POST['loc'];
    $act    = $_POST['act'];
    $abl    = $_POST['abl'];
    $ways    = $_POST['ways'];

    if( strlen($name)>=3 && strlen($email)>=7 && strlen($text)>=10 ){
      if( @mail (
          $admin,
          "aluvista.com contact : $subject",
          $text,
          "From:$name => $tel <$email" )
      ){
        echo '<h2>Mail sent</h2>';
      }else{
        echo '<h2>Error in sending mail.</h2>';
      }
    }else{
      echo '<h2>Access Restricted !</h2>';
    }
  ?>

</body>
</html>