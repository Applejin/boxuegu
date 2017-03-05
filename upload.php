<?php
	
	print_r($_FILES);
	
	// 查看文件上传后临时存放的目录
	//echo $_FILES['Filedata']['tmp_name'];
	
	// 文件永久存储的目录
	$filePath = './img/' . $_FILES['Filedata']['name'];
	
	move_uploaded_file($_FILES['Filedata']['tmp_name'], $filePath);
	
	// 接口返回上传的文件在服务端的地方
	echo $filePath;
?>
