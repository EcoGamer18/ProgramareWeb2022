<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$query = "SELECT * FROM exercitiu5parinte";
$result = mysqli_query($conn, $query);
//$output = array();
while ($row = mysqli_fetch_array($result)) {
    $sub_data["id"] = $row["idCopil"];
    $sub_data["nume"] = $row["nume"];
    $sub_data["idParinte"] = $row["idParinte"];
    $data[] = $sub_data;
}

echo json_encode($data);

mysqli_close($conn);
