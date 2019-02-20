<?php
    header("Content-type: text/html; charset =UTF-8");
    $id = $_GET["id"];
    $num = $_GET["number"];
    $total = $_GET["total"];
    // $total = intval($total*$num);
    // var_dump(intval($total*$num));
    $coon = new Mysqli('localhost' , 'root' , '' , 'db_student' , 3306);
    $sql = "update db_xiaomi_cart set num = '$num',total = '$total' where id = '$id'";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $row = $coon ->query($sql);
    // $result = $row -> fetch_assoc();
    // var_dump($result);
    echo $num;
    // echo $result;

?>