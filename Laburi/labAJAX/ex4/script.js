var done = false;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function put(cell){
    cell.innerHTML = "O";
    cell.removeAttribute("onclick");
    modifyCell(cell.id);
}

function init(){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost/temaAJAX/ex4/refreshTable.php", true);
    xhttp.send(null);

    let aux = getRandomInt(2);
    //cautam ce caracter e computerul
    if(aux == 0){
        computerMove();
    }
}

function verifyWin(){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        if(this.responseText == "winX"){
          document.getElementById("fin").innerHTML = "X WON";
          done = true;
        }
        else if(this.responseText == "winO"){
          document.getElementById("fin").innerHTML = "O WON";
          done = true;

        }
        else if(this.responseText == "done") {
            document.getElementById("fin").innerHTML = "REMIZA!";
            done = true;
        }
      }
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex4/verifyWin.php", true);
    xhttp.send(null);
}

function modifyCell(index){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        verifyWin();
        if(done == false){
            setTimeout(function(){ computerMove(); },10);
        }
      }
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex4/modifyCell.php?id="+index+"&valoare=O", true);
    xhttp.send(null);
}

function computerMove(){
    var position = -1;
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        position = parseInt(this.responseText);
        document.getElementById(position.toString()).innerHTML = "X";
        modifyCellComputer(position);
    }
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex4/computerMove.php", true);
    xhttp.send(null);
}

function modifyCellComputer(index){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        verifyWin();
      }
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex4/modifyCell.php?id="+index+"&valoare=X", true);
    xhttp.send(null);
}