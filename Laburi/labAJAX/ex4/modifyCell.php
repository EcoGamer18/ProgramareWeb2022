<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = $conn->prepare("UPDATE `exercitiu4xo` SET `valoare`=?  WHERE `id`=?");
$sql->bind_param('si', $_GET['valoare'], $_GET['id']);
$sql->execute();
