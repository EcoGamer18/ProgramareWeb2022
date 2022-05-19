<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$param = "%" . $_GET['q'] . "%";
$sql = $conn->prepare("SELECT `sosire` FROM `exercitiu1sosireplecare` WHERE `plecare` LIKE ?");
$sql->bind_param('s', $param);
$sql->execute();
$sql->bind_result($result);

while ($sql->fetch()) {
    echo "<li>" . $result . "</li>";
}

mysqli_close($conn);
