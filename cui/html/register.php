<?php
  header("Content-type:text/html;charset=utf-8");
    //模拟官方返回，生成对应的内容
    $responseData = array("code" => 0, "msg" => "");
//   var_dump($_POST);
    //将数据取出
    $username = $_POST['username'];
    $password = $_POST['password'];
    $repassword = $_POST['repassword'];
    $createtime = $_POST['createtime'];

    //判断各个项是否为空
    if(!$username){
        $responseData['code'] = 1;
        $responseData['msg'] = "用户名不能为空！";
        echo json_encode($responseData);
        exit;
    }
    if(!$password){
        $responseData['code'] = 2;
        $responseData['msg'] = "密码不能为空！";
        echo json_encode($responseData);
        exit;
    }
    if($repassword !== $password){
        $responseData['code'] = 3;
        $responseData['msg'] = "两次密码输入不一致！";
        echo json_encode($responseData);
        exit;
    }
    //验证数据库是否有重名的用户
    //1连接数据库
    // $link = mysql_connect("127.0.0.1","root","123456");
    // $link = mysql_connect("127.0.0.1","root","123456");
    // $link = mysql_connect("127.0.0.1","root","123456");
    // $link = mysql_connect("127.0.0.1","root","123456");
    $link = mysql_connect("127.0.0.1","root","123456");
    //2
    if(!$link){
        $responseData['code'] = 4;
        $responseData['msg'] = "服务器正忙！";
        echo json_encode($responseData);
        exit;
    }
    //3设置访问字符集
    // mysql_set_charset("utf8);
    //mysql_set_charset("utf8);
    mysql_set_charset("utf8");
    //4选择数据库
    //mysql_select_db("czz);
    mysql_select_db("czz");
    //5准备sql语句
    $sql = "SELECT * FROM users WHERE username='{$username}'";
    // echo $sql;
    //6发送sql语句
    $res = mysql_query($sql);
    //7取出一行
    $row = mysql_fetch_assoc($res);
    // echo $row;
    if($row){
        $responseData['code'] = 5;
        $responseData['msg'] = "用户名已存在！";
        echo json_encode($responseData);
        exit;
    }

    $password = md5(md5(md5($password)."qianfeng")."qingdao");


    $sql2 = "INSERT INTO users(username,password,createtime) VALUES('{$username}','{$password}',{$createtime})";
    // echo $sql2;
    $res = mysql_query($sql2);
    // var_dump($res);
    if(!$res){
        $responseData['code'] = 6;
        $responseData['msg'] = "注册失败！";
        echo json_encode($responseData);
        exit;
    }
    $responseData['msg'] = "注册成功！";
    echo json_encode($responseData);
    //8关闭数据库
    mysql_close($link);
    // $link = mysql_connect("127.0.0.1","root","123456");
    // if(!$link){
    //     $responseData['code'] = 4;
    //     $responseData['msg'] = "服务器正忙！";
    //     echo json_encode($responseData);
    //     exit;
    // }
    // mysql_set_charset("utf8");
    // mysql_select_db("qd2004");
?>