<?php
$compName = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


$fp=fopen("b.txt","a");
fwrite($fp,"$compName\r\n");
fwrite($fp,"$email\r\n");
fwrite($fp,"$message\r\n");
fclose($fp);

?>
