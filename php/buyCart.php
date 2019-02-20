<?php
    header("Content-type: text/html; charset =UTF-8");
    $coon = new Mysqli('localhost' , 'root' , '' , 'db_student' , 3306);
    $sql = "select * from db_xiaomi_cart";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $row = $coon -> query($sql);
    $result = $row -> fetch_all();
    echo json_encode($result);

?>