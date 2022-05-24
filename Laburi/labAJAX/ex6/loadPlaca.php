<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT DISTINCT `placaVideo` FROM `exercitiu6produse` ORDER BY `id` DESC";
$statement = $conn->prepare($query);
$statement->execute();
$statement->bind_result($placaVideo);


while ($statement->fetch()) {
    echo "<div class=\"list-group-item checkbox\">";
    echo "<label>" . $placaVideo . "<input type=\"checkbox\" class=\"common_selector placaVideo\" value=\"" . $placaVideo . "></label>";
    echo "</div>";
}
