<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
$query = "SELECT * FROM exercitiu5fisiere WHERE idDirector=" . $_GET['id'] . "";
$result = mysqli_query($conn, $query);
//$output = array();
while ($row = mysqli_fetch_array($result)) {
    $sub_data["id"] = $row["idFisier"];
    $sub_data["nume"] = $row["nume"];
    $sub_data["continut"] = $row["continut"];
    $data[] = $sub_data;
}

if (isset($data))
    echo json_encode($data);
else {
    $response = "";
    echo json_encode(json_decode("{}"));
}

mysqli_close($conn);
