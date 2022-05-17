<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "mysql";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    for ($i = 1; $i <= 9; $i++){
        $sql = $conn->prepare("UPDATE `exercitiu4xo` SET `valoare`='-'  WHERE `id`=?");
        $sql -> bind_param('i',$i);
        $sql -> execute();
    }
    
?>