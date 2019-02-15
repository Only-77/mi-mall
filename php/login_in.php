<?php
   header("Content-type: text/html; charset =UTF-8");
   $coon = new Mysqli('localhost','root','','db_student',3306);
   $coon -> query("SET CHARACTER SET 'utf8'");
   $coon -> query("SET NAMES 'utf8'");
   $mail = $_POST["mail"];
   $password = $_POST["password"];
   $sql = "select mail,password from miuidata";
   $row = $coon -> query($sql);
   $arr = array();
   while($result = $row -> fetch_object()){
   		array_push($arr,$result);
   }
   $y = 0;
   $x = 0;
   $uername = "select username from miuidata where mail = '$mail'";
   $row2 = $coon -> query($uername);
   foreach($arr as $key => $value){
		foreach($arr["$key"] as $key0 => $mail_value){
			if($mail == $mail_value){
				$x = 1;
				$sql0 = "select password from miuidata where mail = '$mail'";
				$row0 = $coon -> query($sql0);
				$result0 = $row0 -> fetch_object();
				foreach($arr["$key"] as $key1 => $pass_value){
					if($password == $pass_value){
						$y = 1;
					}
				}	
			}
   		}
    }
    if($y == 1){
    	echo "<script>
    			window.open('../index.html');		
    		</script>";
    }else if($x == 0){
    	echo "<script>
    			self.location = '../denglu.html';
    			alert('用户名不存在');				
    		</script>";
    }else if($y == 0){
    	echo "<script>
    			self.location = '../denglu.html';
    			alert('密码错误');				
    		</script>";
	}
?>

