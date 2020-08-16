<?php

/* Конфигурация базы данных */

$db_host		= 'dozvil.pro';
$db_user		= 'gnpbvqwf_dozvil';
$db_pass		= 'dozvil12345';
$db_database	= 'gnpbvqwf_comments'; 

/* Конец секции */

$link = @mysql_connect($db_host,$db_user,$db_pass) or die('Не могу установить соединение с базой данных');

mysql_query("SET NAMES 'utf8'");
mysql_select_db($db_database,$link);

?>