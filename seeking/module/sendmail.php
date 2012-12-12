<!DOCTYPE HTML>
<html lang="en-US">
<head>
  <meta charset="UTF-8" />
  <title>Sending mail ...</title>
</head>
<body>
  <?php
    error_reporting(E_ALL ^ E_NOTICE);

    $admin = 'goldgoldy276@yahoo.com';

    $name    = $_POST['name'];
    $email   = $_POST['mail'];
    $tel     = $_POST['phone'];
    $subject = $_POST['subject'];
    $text    = $_POST['txt'];

  if ( isset($name) && isset($email) && isset($subject) && isset($text)){
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