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

    $sql = $conn->prepare("UPDATE `exercitiu3formular` SET `nume`=?, `prenume`=?, `adresa`=?  WHERE `id`=?");
    $sql -> bind_param('sssi',$_GET['nume'],$_GET['prenume'],$_GET['adresa'], $_GET['index']);
    $sql -> execute();