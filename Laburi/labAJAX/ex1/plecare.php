<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT DISTINCT `plecare` FROM `exercitiu1sosireplecare`";
$result = mysqli_query($conn, $sql);

echo "<select size=\"6\" id=\"lista1\" ondblclick=\"showRoutes(this.value)\">";

if (mysqli_num_rows($result) != 0) {
    // output data of each row
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<option>" . $row["plecare"] . "</option>";
    }
} else {
    echo "0 results";
}

echo "</select>";
mysqli_close($conn);
