<?php
include_once('../config.php');

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

$query = "SELECT DISTINCT `capacitateHDD ` FROM `exercitiu6produse` ORDER BY `id` DESC";
$statement = $conn->prepare($query);
$statement->execute();
$statement->bind_result($capacitateHDD);


while ($statement->fetch()) {
    echo "<div class=\"list-group-item checkbox\">";
    echo "<label>" . $capacitateHDD  . "<input type=\"checkbox\" class=\"common_selector capacitateHDD \" value=\"" . $capacitateHDD  . "></label>";
    echo "</div>";
}
