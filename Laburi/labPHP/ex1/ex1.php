<!--O baza de date contine trenuri caracterizate de: 
    nr. tren, 
    tip tren, 
    localitate plecare, 
    localitate sosire, 
    ora plecare, 
    ora sosire.
Un calator va putea cauta trenuri intre doua localitati, 
specificand prin intermediul unui check box daca doreste 
numai curse directe sau si curse cu legatura 
(schimbarea trenului intr-o localitate intermediara)  -->
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cerinta 1</title>
</head>

<body>
    <form action="inputTrenuri.php" method="get">
        Plecare: <input type="text" name="plecare">
        Sosire: <input type="text" name="sosire">
        Intermediar: <input type="checkbox" name="intermediar">
        <input type="submit">
    </form>
</body>

</html>