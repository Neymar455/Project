<?php


    $page_no = isset($_POST['pageNo']) ? $_POST['pageNo'] : 1;
    $qty = isset($_POST['qty']) ? $_POST['qty'] : 30;
    


    require('connect.php');
     $result = $conn->query('select * from good');


    $row = $result->fetch_all(MYSQLI_ASSOC);
    $content = json_encode($row,JSON_UNESCAPED_UNICODE);

    $arr_data = json_decode($content);

    $res = array(
        'data'=>array_slice($arr_data, ($page_no-1)*$qty,$qty),
        'total'=>count($arr_data),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );
 
    echo json_encode($res,JSON_UNESCAPED_UNICODE);

?>
 
