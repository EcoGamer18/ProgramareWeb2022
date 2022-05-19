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
foreach ($data as $key => &$value) {
    $output[$value["id"]] = &$value;
}
foreach ($data as $key => &$value) {
    if ($value["idParinte"] && isset($output[$value["idParinte"]])) {
        $output[$value["idParinte"]]["nodes"][] = &$value;
    }
}
foreach ($data as $key => &$value) {
    if ($value["idParinte"] && isset($output[$value["idParinte"]])) {
        unset($data[$key]);
    }
}
echo json_encode($data);

mysqli_close($conn);
