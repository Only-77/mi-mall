<?php
    header("Content-type: text/html; charset =UTF-8");
    //获取接送字符串
    $json = file_get_contents("php://input");
    //将json字符串转换为json对象
    $json = json_decode($json);
    $json = json_decode($json);
    var_dump($json);
    $img = $json[0] ->img;
    $name = $json[0] ->name;
    $price = $json[0] ->price;
    $num = $json[0] ->num;
    $total = $json[0] ->total;

    // var_dump($img,$name,$price,$num,$total);

    //连接数据库
    $coon = new Mysqli('localhost' , 'root' , '' , 'db_student' , '3306');
    $sql = "INSERT into db_xiaomi_cart(img , name , price , num , total) values ('$img' , '$name' , '$price' , '$num' , '$total')";
    $coon->query("SET CHARACTER SET 'utf8'");  
    $coon->query("SET NAMES 'utf8'");
    $row = $coon -> query($sql);
    $result = $row -> fetch_assoc();

?>