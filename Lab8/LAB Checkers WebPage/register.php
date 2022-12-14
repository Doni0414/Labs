<?php
    define('DB_SERVER','localhost');
    define('DB_USERNAME','  root');
    define('DB_PASSWORD','');
    define('DB_NAME','webpage');

    $link = new mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_NAME);  

    if($link===false){
        die("Connection failed: ".mysqli_connect_error())
    }

    if(isset($_POST['username'])){
        $uname = $_POST['username'];
        $pass = $_POST['password'];

        $sql1 = "select * from users where username = '".$uname."' and password = '".$pass."' limit 1";
        $result1 = mysqli_query($link,$sql1);

        if(mysqli_num_rows($result1)<1){
            $sql = "select * from users where username = '".$uname."' and password = '".$pass."' limit 1";
            $result1 = mysqli_query($link,$sql1)

            if($result1){
                echo "Success";
                exit();
            }
        }else{
            echo "This user is already registered!";
        }
    }
?>