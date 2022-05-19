<?php
    include_once('../config.php');

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $next = (int)$_GET['index']*3 ;
    $sql = $conn->prepare("SELECT * FROM `exercitiu2numeprenume` LIMIT ?,3");
    $sql -> bind_param('i', $next);
    $sql -> execute();

    $sql -> bind_result($nume,$prenume,$telefon,$email);

    echo "<table>";
    
    while($sql -> fetch()) {
            echo "<tr>";
            echo "<td>". $nume . "</td>";
            echo "<td>". $prenume . "</td>";
            echo "<td>". $telefon . "</td>";
            echo "<td>". $email . "</td>";
            echo "</tr>";
    }        

    echo "</table>";

    $next = ((int)$_GET['index'] + 1) * 3;
    $sql = $conn->prepare("SELECT * FROM `exercitiu2numeprenume` LIMIT ?,3");
    $sql -> bind_param('i', $next);
    $sql -> execute();

    if($_GET['index'] == 0){
        echo "<button disabled onclick=\"prev()\"> Prev </button>";
    }
    else{
        echo "<button onclick=\"prev()\"> Prev </button>";
    }

    if($sql -> fetch() == null){
        echo "<button disabled onclick=\"next()\"> Next </button>";
    }
    else{
        echo "<button onclick=\"next()\"> Next </button>";
    }

    mysqli_close($conn);
