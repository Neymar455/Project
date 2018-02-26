<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'index';

 
    $conn = new mysqli($servername, $username, $password, $dbname);


    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }

    $conn->set_charset('utf8');

    $username = isset($_GET['username']) ? $_GET['username'] : null;
    $password = isset($_GET['password']) ? $_GET['password'] : null;
    $data = $conn->query("select * from login where name='$username'");


    if($data->num_rows == 0){
  
        $sql = "insert into login(name,password) values('$username','$password')";

        $res = $conn->query($sql);

        if($res){
            echo "success";
        }else{
            echo "fail";
        }
    }
?>