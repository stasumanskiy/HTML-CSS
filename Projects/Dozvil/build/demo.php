<?php
    
            // Error reporting:
            error_reporting(E_ALL^E_NOTICE);
    
            include "connect.php";
            include "comment.class.php";
    
            //	Select all the comments and populate the $comments array with objects
            $comments = array();
            $result = mysql_query("SELECT * FROM comments ORDER BY id DESC");
    
            while ($row = mysql_fetch_assoc($result)) {
                $comments[] = new Comment($row);
            }
?>
            
<!DOCTYPE html>
<html leng="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" media="all" href="css/app.css">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png" />
    <title>Отзывы</title>
</head>

<body>
    <div id="main" class="comments">
        <div class="comments__wrap bg-image" style="background-image: url(img/writer-1920.jpg);">
            <div class="comments__inner inner">
                <header class="header">
                    <div class="header__logo">
                        <a href="index.html" class="header__logo-link">
                            <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px" y="0px" viewBox="0 0 629.8 629.6" style="enable-background:new 0 0 629.8 629.6;"
                                xml:space="preserve">
                                <style type="text/css">
                                    .st0 {
                                        fill: #E80707;
                                    }
    
                                    .st1 {
                                        fill: #ffffff;
                                    }
                                </style>
                                <g transform="translate(0.000000,719.000000) scale(0.100000,-0.100000)">
                                    <path class="st0" d="M2924.9,7188.2c-250-25-370-45-565-94c-505-127-999-401-1380-766c-520-498-842-1117-950-1829
                                        c-27-178-38-547-21-732c57-621,288-1200,671-1683c107-135,375-403,510-510c482-383,1062-614,1683-671c188-17,545-7,732,21
                                        c1352,202,2423,1247,2650,2585c64,377,58,794-16,1154c-127,620-417,1160-864,1606c-498,499-1114,803-1821,900
                                        C3440.9,7185.2,3018.9,7197.2,2924.9,7188.2z M3314.9,6894.2c707-45,1331-322,1833-814c781-765,1056-1901,711-2939
                                        c-443-1333-1793-2146-3179-1916c-479,79-940,286-1325,594c-440,351-790,876-949,1422c-79,271-110,500-110,803c0,305,31,527,110,800
                                        c335,1149,1364,1973,2557,2049C3142.9,6905.2,3141.9,6905.2,3314.9,6894.2z" />
                                    <path class="st1" d="M707.1,5137.9c-89-22-102-107-23-152c22-12,43-30,46-40c17-41,3-665-16-728c-3-11-27-32-53-45
                                        c-41-22-47-29-50-61c-2-27,3-44,21-65l24-28l344-2c379-3,407,0,521,57c164,83,268,282,268,513c-1,296-143,502-382,552
                                        C1327.1,5155.9,776.1,5154.9,707.1,5137.9z M1224.1,4961.9c89-25,145-124,166-291c27-218-18-406-108-460c-35-21-96-32-127-24
                                        c-57,14-56,6-56,401c0,336,1,365,18,374C1139.1,4975.9,1175.1,4974.9,1224.1,4961.9z" />
                                    <path class="st1" d="M2179.1,4908.9c-70-20-128-54-182-104c-94-88-138-197-138-341c0-142,36-237,126-332c204-213,577-153,709,114
                                        c45,92,60,177,45,270c-26,169-122,306-258,370c-58,27-79,32-162,34C2263.1,4920.9,2206.1,4916.9,2179.1,4908.9z M2290.1,4717.9
                                        c73-38,137-191,147-349c4-73,2-95-13-122c-32-60-99-67-149-17c-49,49-106,202-121,328c-9,70,14,138,53,160
                                        C2242.1,4735.9,2254.1,4735.9,2290.1,4717.9z" />
                                    <path class="st1" d="M2866.1,4905.9c-8-10-29-47-46-83c-41-86-43-155-5-199c29-35,63-40,86-13c8,9,28,41,44,71c30,56,66,81,119,81
                                        c34,0,65-17,65-36c0-8-74-153-165-323c-91-169-165-319-165-332c0-48,6-49,304-49c178,0,301-4,338-12c57-12,58-12,88,17
                                        c66,63,94,232,49,289c-17,22-28,27-58,24c-33-3-38-8-63-59c-15-31-38-66-53-77c-32-25-119-38-159-23c-24,10-27,15-22,37
                                        c4,15,77,160,163,323c92,174,156,308,156,324c0,15-7,35-16,44c-14,15-39,15-269,4c-182-9-268-9-307-2
                                        C2882.1,4925.9,2885.1,4925.9,2866.1,4905.9z" />
                                    <path class="st1" d="M3710.1,4907.9c-60-19-91-50-91-92c0-30,5-36,43-52c50-22,40-2,212-421c76-187,133-312,146-322
                                        c33-28,90-23,122,10c15,15,93,177,182,377c86,193,165,358,176,368c12,9,31,17,44,17c31,0,57,32,53,67c-5,49-53,65-185,61
                                        c-95-3-116-6-140-24c-40-30-41-60-3-99l31-32l-46-115c-56-140-86-178-113-145c-12,15-102,240-102,256c0,6,11,20,24,33s26,31,29,40
                                        c9,27-28,64-77,77C3954.1,4926.9,3764.1,4924.9,3710.1,4907.9z" />
                                    <path class="st1" d="M4729.1,4909.9c-66-15-96-31-110-57c-14-25-3-49,38-85c45-39,51-78,51-305c-1-240-7-281-48-324
                                        c-40-41-39-79,2-110c26-19,42-21,170-21c156,0,204,11,237,52c29,37,25,50-22,94c-43,39-43,39-50,126c-9,125-9,305,1,392
                                        c8,69,12,76,50,111c23,21,41,43,41,50c0,23-21,50-53,67C4994.1,4921.9,4807.1,4927.9,4729.1,4909.9z" />
                                    <path class="st1" d="M5205.1,4905.9c-58-21-96-64-80-91c6-9,28-27,49-39s42-28,46-36c11-19,16-536,6-565c-5-12-26-34-48-48
                                        c-44-27-51-60-21-87c16-15,48-17,241-17c122,0,254-5,292-11c39-6,81-8,94-5c51,13,116,181,96,252c-13,46-38,74-66,74s-41-15-50-58
                                        c-15-73-105-125-185-107c-58,13-60,23-60,315c0,146,4,270,8,276s21,19,39,27c34,18,48,46,38,77c-13,41-60,54-210,57
                                        C5280.1,4922.9,5245.1,4919.9,5205.1,4905.9z" />
                                    <path class="st1" d="M2164.1,3658.9c-5-3-27-7-47-11c-56-9-98-49-98-92c0-28,9-43,45-79c30-29,46-53,47-71c1-15,2-147,2-293
                                        c2-295,7-325,70-417c42-61,136-126,224-154c90-29,269-37,369-16c150,32,268,117,319,231c28,61,28,62,36,366c4,168,10,315,13,327
                                        s25,36,50,53c37,25,45,37,45,61c0,78-39,94-225,94c-115,0-146-3-172-18c-70-37-68-92,4-138c26-16,52-37,57-46c15-27,20-469,6-536
                                        c-16-80-62-131-137-153c-115-34-212,8-269,116c-17,32-19,58-17,278c0,133,4,254,7,267c4,14,24,36,47,50c53,34,65,66,42,114
                                        c-26,52-67,63-253,67C2244.1,3660.9,2170.1,3660.9,2164.1,3658.9z" />
                                    <path class="st1" d="M3677.1,3642.9c-63-34-78-66-88-187c-10-126-18-151-139-434c-119-278-135-307-190-336c-63-33-71-42-71-77
                                        c0-46,23-72,74-85c58-14,224-14,282,0c50,13,94,57,94,95c0,29-30,61-64,70c-32,8-37,23-21,61c12,28,19,32,71,39c79,9,254-4,282-22
                                        c35-23,30-68-9-84c-62-26-73-84-25-129c31-29,112-41,283-41c167,0,234,12,274,49c42,38,47,74,15,105c-14,15-34,26-46,26
                                        c-28,0-45,30-151,275c-196,452-287,611-382,665C3803.1,3668.9,3734.1,3672.9,3677.1,3642.9z M3767.1,3185.9c31-45,82-151,82-172
                                        c0-26-18-31-116-31c-105,0-108,5-70,114C3704.1,3214.9,3730.1,3237.9,3767.1,3185.9z" />
                                </g>
                            </svg>
                        </a>
                    </div>
                </header>
                <div class="comments__hero">
                    <h1 class="comments__title title-lg">Отзывы о компании</h1>
                    <div class="comments__hero-btn">
                        <a href="index.html" class="comments__hero-link btn">На Главную</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="inner-s">
            <div class="comments__form">
                <h2 class="comments__form-title title-m">
                    Оставить комментарий
                </h2>
                <form id="addCommentForm" class="comment-form" method="post" action="/">
                    <div class="comment-form__wrap">
                        <div class="comment-form__row">
                            <input class="comment-form__input" type="text" name="name" id="name" placeholder="Имя"/>
                        </div>
                        <div class="comment-form__row">
                            <input class="comment-form__input" type="text" name="email" id="email" placeholder="Email"/>
                        </div>
                    </div>
                    <div class="comment-form__row">
                        <input class="comment-form__input" type="text" name="url" id="url" placeholder="Вебсайт (не обязательно)"/>
                    </div>
                    <div class="comment-form__row">
                        <textarea class="comment-form__textarea" name="body" id="body" placeholder="Комментарий"></textarea>
                    </div>
                    <div class="comment-form__row comment-form__row--mod">
                        <button class="comment-form__btn btn"  type="submit" id="submit">Отправить</button>
                    </div>
                </form>
            </div>
            <div id="addCommentContainer" class="comments__container">
                <div id="inser-before"></div>
                <?php
            
                    //  Output the comments one by one:
                    foreach($comments as $c) {
                        echo $c->markup();
                    }
            
                ?>
            </div>
        </div>
    </div>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="js/script.js"></script>

</body>
</html>
