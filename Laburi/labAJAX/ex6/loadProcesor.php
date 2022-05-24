<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT DISTINCT `procesor` FROM `exercitiu6produse` ORDER BY `id` DESC";
$statement = $conn->prepare($query);
$statement->execute();
$statement->bind_result($procesor);

echo "<div class=\"list-group-item checkbox\">";
echo "<label>Procesoare</label>";
while ($statement->fetch()) {
    echo "<input type=\"checkbox\" class=\"common_selector procesor\" value=\"" . $procesor . ">";
}

echo "</div>";
