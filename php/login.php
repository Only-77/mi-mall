<?php
header("Content-type: text/html; charset =UTF-8");
$coon = new Mysqli('localhost','root','','db_student',3306);
$coon -> query("SET CHARACTER SET 'utf8'");
$coon -> query("SET NAMES 'utf8'");
$mail = $_POST["mail"];
$username = $_POST["username"];
$password = $_POST["password"];
$sql = "INSERT INTO miuidata(mail,username,password)VALUE('$mail','$username','$password')";
$row = $coon -> query($sql);
if($row){
	echo "<script>
		alert('注册成功，点击确定跳转到登录页面');
		self.location = '../denglu.html';
	</script>";
}else{
	echo "<script>
		alert('注册失败，点击确定返回注册页面');
		self.location = '../zhuce.html';
	</script>";
}
?>
