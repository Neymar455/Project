<?php
    // 创建连接
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = 'index';

    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);



    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }

    $conn->set_charset('utf8');

    $result = $conn->query('select * from index1');


    $row = $result->fetch_all(MYSQLI_ASSOC);


    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>