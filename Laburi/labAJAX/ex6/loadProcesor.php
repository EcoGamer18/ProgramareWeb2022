<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT DISTINCT `procesor` FROM `exercitiu6produse` ORDER BY `id` DESC";
$statement = $conn->prepare($query);
$statement->execute();
$statement->bind_result($procesor);

echo "<form class=\"list-group-item checkbox\">";
while ($statement->fetch()) {
    echo "<input type=\"checkbox\" class=\"common_selector producator\" value=\"" . $procesor . ">" . $procesor . "<br>";
}
echo "</form>";
