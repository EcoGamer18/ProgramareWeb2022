<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT DISTINCT `memorie` FROM `exercitiu6produse` ORDER BY `id` DESC";
$statement = $conn->prepare($query);
$statement->execute();
$statement->bind_result($memorie);


while ($statement->fetch()) {
    echo "<div class=\"list-group-item checkbox\">";
    echo "<label>" . $memorie . "<input type=\"checkbox\" class=\"common_selector memorie\" value=\"" . $memorie . "></label>";
    echo "</div>";
}
