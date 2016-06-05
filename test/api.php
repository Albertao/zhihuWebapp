<?php
header("Access-Control-Allow-Origin: *");
$url = $_GET['url'];
$callback = $_GET['jsonp_callback'];
$contents = json_decode(file_get_contents($url));//to solve the charcter coding problem
echo $callback.'('.json_encode($contents).')';
unset($url);
?>
