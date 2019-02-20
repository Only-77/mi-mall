<?php
   header("Content-type: text/html; charset =UTF-8");
//    $json = file_get_contents("php://input");
    $id = $_GET["id"];
    // var_dump($id);
    $coon = new Mysqli('localhost' , 'root' , '' , 'db_student' , 3306);
    $sql = "delete from db_xiaomi_cart where id='$id'";
    $row = $coon ->query($sql);
    $result = $row -> fetch_assoc();
    echo $result;



?>