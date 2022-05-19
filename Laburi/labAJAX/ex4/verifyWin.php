<?php
    include_once('../config.php');

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    $sql = $conn->prepare("SELECT * FROM `exercitiu4xo` ORDER BY `exercitiu4xo`.`id` ASC");
    $sql -> execute();

    $sql -> bind_result($id,$valoare);

    $array=[];
    $done=true;

    while($sql -> fetch()) {
           $array[$id] = $valoare; 
            if($valoare == "-"){
                $done = false;
            }
    }        

    $xwin = 0;

    // prima linie
    if($array[1] == 'X' and $array[2] == 'X' and $array[3] == 'X')
        $xwin = 1;

    // prima coloana
    if($array[1] == 'X' and $array[4] == 'X' and $array[7] == 'X')
        $xwin = 1;

    // a2a linie
    if($array[4] == 'X' and $array[5] == 'X' and $array[6] == 'X')
        $xwin = 1;

    // a2a coloana
    if($array[2] == 'X' and $array[5] == 'X' and $array[8] == 'X')
        $xwin = 1;

    // ultima linie
    if($array[7] == 'X' and $array[8] == 'X' and $array[9] == 'X')
        $xwin = 1;

    // ultima coloana
    if($array[3] == 'X' and $array[6] == 'X' and $array[9] == 'X')
        $xwin = 1;

    // diagonala principala
    if($array[1] == 'X' and $array[5] == 'X' and $array[9] == 'X')
        $xwin = 1;

    // diagonala secundara
    if($array[3] == 'X' and $array[5] == 'X' and $array[7] == 'X')
        $xwin = 1;

    $owin = 0;

    // prima linie
    if($array[1] == 'O' and $array[2] == 'O' and $array[3] == 'O')
        $owin = 1;

    // prima coloana
    if($array[1] == 'O' and $array[4] == 'O' and $array[7] == 'O')
        $owin = 1;

    // a2a linie
    if($array[4] == 'O' and $array[5] == 'O' and $array[6] == 'O')
        $owin = 1;

    // a2a coloana
    if($array[2] == 'O' and $array[5] == 'O' and $array[8] == 'O')
        $owin = 1;

    // ultima linie
    if($array[7] == 'O' and $array[8] == 'O' and $array[9] == 'O')
        $owin = 1;

    // ultima coloana
    if($array[3] == 'O' and $array[6] == 'O' and $array[9] == 'O')
        $owin = 1;

    // diagonala principala
    if($array[1] == 'O' and $array[5] == 'O' and $array[9] == 'O')
        $owin = 1;

    // diagonala secundara
    if($array[3] == 'O' and $array[5] == 'O' and $array[7] == 'O')
        $owin = 1;
    
    if($xwin == 1){
        echo "winX";
    }else if($owin == 1){
        echo "winO";
    }else if($done == true){
        echo "done";
    }
    else {
        echo "notDone";
    }


    mysqli_close($conn);
