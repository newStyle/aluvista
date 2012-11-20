<?php
    error_reporting(E_ALL ^ E_NOTICE);

    $admin = 'goldgoldy276@yahoo.com';

    $name    = $_POST['name'];
    $email   = $_POST['mail'];
    $tel     = $_POST['phone'];
    $subject = $_POST['subject'];
    $text    = $_POST['txt'];

  if ( isset($name) && isset($email) && isset($tel) && isset($subject) && isset($text)){
      if(@mail ($admin,"aluvista.com contact : $subject",$text,"From:$name => $tel <$email")
      ){
        echo 'sent mail ';
      }else{
        echo 'error in sending mail';
      }
    }else{
      echo 'access Restricted !';
    }
?>
