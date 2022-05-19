<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$next = (int)$_GET['index'];
$sql = $conn->prepare("SELECT * FROM `exercitiu3formular` WHERE `id`=?");
$sql->bind_param('i', $next);
$sql->execute();

$sql->bind_result($id, $nume, $prenume, $adresa);

while ($sql->fetch()) {
    echo $nume . ",";
    echo $prenume . ",";
    echo $adresa;
}
