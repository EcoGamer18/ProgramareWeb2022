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

    $sql = $conn->prepare("SELECT `id` FROM `exercitiu3formular`");
    $sql -> execute();

    $sql -> bind_result($id);

    echo "<select size=\"6\" id=\"listaID\" ondblclick=\"fillForm(this.value)\">";
    
    while($sql -> fetch()) {
            echo "<option>". $id . "</option>";
    }        

    echo "</select>";

    mysqli_close($conn);
?>