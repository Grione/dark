<?php
    $name = $_POST['user-name'];
    $phone = $_POST['user-phone'];
    $street = $_POST['street'];
    $home = $_POST['home'];
    $appartment = $_POST['appartment'];
    $floor = $_POST['floor'];
    $comment = $_POST['comment'];
    $pay = $_POST['pay-option'];
    

    $disturb = $_POST['dont-disturb']; // 1 или null
    $disturb = isset($disturb) ? 'ДА' : 'НЕТ';

    $mail_message = '
    <html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя:' . $name . '</li>
            <li>Телефон: ' .$phone. '</li>
            <li>Способ оплаты: ' . $pay . '</li>
            <li>Улица: ' . $street . '</li>
            <li>Дом: ' . $home . '</li>
            <li>Кв: ' . $appartment . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий к заказу: ' . $comment . '</li>
            <li>Нужно ли перезванивать клиенту: ' . $disturb . '</li>
        </ul>
    </body>
    </html>';

    $headers = "From: Администратор сайта \r\n".
    "MIME-Version: 1.0" . "\r\n" .
    "Content-type: text/html; charset=UTF-8" . "\r\n";

    $mail = mail('gavrilov.gri@yandex.ru', 'Заказ', $mail_message, $headers);
    
    // if ($mail){
    //     echo 'done';

    // }else{
    //     echo 'error';
    // }

    $data = array();

    if ($mail) {
        $data['status'] = "OK";
        $data['mes'] = "Ваш заказ отправлен";
    }else{
        $data['status'] = "NO";
        $data['mes'] = "На сервере произошла ошибка";
    }

    echo json_encode($data); //превращаем массив в json "json_encode"
?>
