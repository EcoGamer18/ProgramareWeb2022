<?php
    include_once('../config.php');

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = $conn->prepare("SELECT `id` FROM `exercitiu4xo` WHERE `valoare` LIKE '-' ORDER BY RAND() LIMIT 1");
    $sql -> execute();

    $sql -> bind_result($id);

    if($sql -> fetch()) {
            echo $id ;
    }       
    else{
        echo "no number";
    }

    mysqli_close($conn);
