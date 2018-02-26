<?php
    // 创建连接
    require('connect.php');
    $id = isset($_GET['id']) ? $_GET['id'] : '';
    $sql = "select * from good where id='$id'";

    $res = $conn->query($sql);

    $row = $res->fetch_assoc();

    echo json_encode($row,JSON_UNESCAPED_UNICODE);
?>