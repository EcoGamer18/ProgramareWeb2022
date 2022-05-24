<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT DISTINCT `producator` FROM `exercitiu6produse` ORDER BY `id` DESC";
$statement = $conn->prepare($query);
$statement->execute();
$statement->bind_result($producator);


while ($statement->fetch()) {
    echo "<div class=\"list-group-item checkbox\">";
    echo "<label>" . $producator . "<input type=\"checkbox\" class=\"common_selector producator\" value=\"" . $producator . "></label>";
    echo "</div>";
}
