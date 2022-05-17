<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Try</title>
</head>
    <body>
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

        $sql = "SELECT * FROM `exercitiu1sosireplecare`";
        $result = mysqli_query($conn, $sql);;

        if (mysqli_num_rows($result) != 0) {
            // output data of each row
            while($row = mysqli_fetch_assoc($result)) {
                echo "<br>  Name: ". $row["plecare"]. " " . $row["sosire"] . "<br>";
            }
        } else {
            echo "0 results";
        }

        mysqli_close($conn);
    ?>
</body>
</html>
