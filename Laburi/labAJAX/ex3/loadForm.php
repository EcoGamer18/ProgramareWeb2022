<?php
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $dbname = "mysql";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $next = (int)$_GET['index'] ;
    $sql = $conn->prepare("SELECT * FROM `exercitiu3formular` WHERE `id`=?");
    $sql -> bind_param('i', $next);
    $sql -> execute();

    $sql -> bind_result($id,$nume,$prenume,$adresa);

    echo "<form>";

    while($sql -> fetch()) {
        echo "<label for=\"nume\">Nume:</label><br>";
        echo "<input type=\"text\" id=\"nume\" name=\"nume\" oninput=\"ableButon()\" value=" . $nume . "><br>";
        echo "<label for=\"prenume\">Prenume:</label><br>";
        echo "<input type=\"text\" id=\"prenume\" name=\"prenume\" oninput=\"ableButon()\" value=" . $prenume . "><br>";
        echo "<label for=\"adresa\">Adresa:</label><br>";
        echo "<textarea id=\"adresa\" name=\"adresa\" oninput=\"ableButon()\">". $adresa . "</textarea>";
    }        

    echo "<input id=\"butonSubmit\" type=\"submit\" value=\"Submit\" onclick=\"saveForm()\" disabled = true  [disabled]=\"!form.dirty\"";
    echo "</form>";