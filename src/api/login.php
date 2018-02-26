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

        $username = isset($_GET['username']) ? $_GET['username'] : '';
        $password = isset($_GET['password']) ? $_GET['password'] : '';

        $sql = "select * from login where name='$username' and password='$password'";


        $result = $conn->query($sql);



        if($result->num_rows > 0){
            echo 'success';
        }else{
            echo 'fail';
        }

        $result->free();

        $conn->close();
?>