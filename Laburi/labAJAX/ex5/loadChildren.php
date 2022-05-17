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

$sql = $conn->prepare("SELECT * FROM `exercitiul5copil` WHERE `idParinte`=?");
$sql->bind_param("i", $_GET['id']);
$sql->execute();

$sql->bind_result($id);

if ($sql->fetch()) {
    echo $id;
} else {
    echo "no number";
}

mysqli_close($conn);
