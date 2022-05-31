<?php
include_once('../config.php');


class Travel
{
    public $nrT;
    public $tipT;
    public $plecareT;
    public $sosireT;
    public $oraPT;
    public $oraST;
}


// Create connection
$conn = new mysqli($servernameS, $usernameS, $passwordS, $dbnameS);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$n = 0;
$trenuri = array();

if (isset($_GET['intermediar'])) {
    $stringQ = "SELECT * FROM `exercitiu1trenuri` WHERE `plecare`=? OR `sosire`=?";
    $sql = $conn->prepare($stringQ);
    $sql->bind_param('ss', $_GET["plecare"], $_GET["sosire"]);
    $sql->execute();

    $sql->bind_result($nr, $tip, $plecare, $sosire, $oraP, $oraS);

    $intermediar = array();
    $ni = 0;
    while ($sql->fetch()) {
        $intermediar[$ni] = new Travel();
        $intermediar[$ni]->nrT = $nr;
        $intermediar[$ni]->tipT = $tip;
        $intermediar[$ni]->plecareT = $plecare;
        $intermediar[$ni]->sosireT = $sosire;
        $intermediar[$ni]->oraPT = $oraP;
        $intermediar[$ni]->oraST = $oraS;
        $ni = $ni + 1;
    }

    echo "<p>Rezultate cu statii intermediare</p>";
    echo "<table>";
    for ($i = 0; $i < $ni; $i++) {
        for ($j = 0; $j < $ni; $j++) {
            if (
                $intermediar[$i]->plecareT == $_GET["plecare"] &&
                $intermediar[$i]->sosireT == $intermediar[$j]->plecareT &&
                $intermediar[$j]->sosireT == $_GET["sosire"] && strtotime($intermediar[$i]->oraST) < strtotime($intermediar[$j]->oraPT)
            ) {
                echo "<tr>";
                echo "<td>" . $intermediar[$i]->nrT . "</td>";
                echo "<td>" . $intermediar[$i]->tipT . "</td>";
                echo "<td>" . $intermediar[$i]->plecareT . ": " . $intermediar[$i]->oraPT . "</td>";
                echo "<td>" . $intermediar[$i]->sosireT . ": " . $intermediar[$i]->oraST . "</td>";
                echo "<td> -> </td>";
                echo "<td>" . $intermediar[$j]->nrT . "</td>";
                echo "<td>" . $intermediar[$j]->tipT . "</td>";
                echo "<td>" . $intermediar[$j]->plecareT . ": " . $intermediar[$j]->oraPT . "</td>";
                echo "<td>" . $intermediar[$j]->sosireT . ": " . $intermediar[$j]->oraST . "</td>";
                echo "</tr>";
            }
        }
    }

    echo "</table>";
} else {
    $stringQ = "SELECT * FROM `exercitiu1trenuri` WHERE `plecare`=? AND `sosire`=?";
    $sql = $conn->prepare($stringQ);
    $sql->bind_param('ss', $_GET["plecare"], $_GET["sosire"]);
    $sql->execute();

    $sql->bind_result($nr, $tip, $plecare, $sosire, $oraP, $oraS);

    while ($sql->fetch()) {
        $trenuri[$n] = new Travel();
        $trenuri[$n]->nrT = $nr;
        $trenuri[$n]->tipT = $tip;
        $trenuri[$n]->plecareT = $plecare;
        $trenuri[$n]->sosireT = $sosire;
        $trenuri[$n]->oraPT = $oraP;
        $trenuri[$n]->oraST = $oraS;
    }

    echo "<p>Rezultate fara statii intermediare</p>";
    echo "<table>";

    for ($i = 0; $i < 0; $i++) {
        echo "<tr>";
        echo "<td>" . $trenuri[$i]->nrT . "</td>";
        echo "<td>" . $trenuri[$i]->tipT . "</td>";
        echo "<td>" . $trenuri[$i]->plecareT . ": " . $trenuri[$i]->oraPT . "</td>";
        echo "<td>" . $trenuri[$i]->sosireT . ": " . $trenuri[$i]->oraST . "</td>";
        echo "</tr>";
    }

    echo "</table>";
}
