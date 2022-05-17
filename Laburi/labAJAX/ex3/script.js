var previousValue = -1;
var error = 0;

function loadList(){
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById('selectie').innerHTML = this.responseText;
    }; 
    xhttp.open("GET", "http://localhost/temaAJAX/ex3/loadList.php", true);
    xhttp.send(null);
}

function fillForm(id){
    var xhttp;
    if (id == "") {
      document.getElementById('formular').innerHTML = "";
      return;
    }

    error = 0;

    if (previousValue != -1) {
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200){
                var texted = this.responseText.split(",");

                console.log(texted);

                console.log(document.getElementById('nume').value);
                console.log(document.getElementById('prenume').value);
                console.log(document.getElementById('adresa').value);

                if(texted[0].localeCompare(document.getElementById('nume').value)){
                    error = 1;
                }

                if(texted[1].localeCompare(document.getElementById('prenume').value)){
                    error = 2;
                }

                if(texted[2].localeCompare(document.getElementById('adresa').value)){
                    error = 3;
                }

                console.log(error);

                if(error != 0){
                    alert("Save before change");
                }
                else{
                    fillFormPart2(id);
                }
            }
        }; 
        xhttp.open("GET", "http://localhost/temaAJAX/ex3/verifyChangeForm.php?index="+previousValue, true);
        xhttp.send(null);
    }
    else{
        fillFormPart2(id);
    }
}

function fillFormPart2(id){
    previousValue = id;
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        document.getElementById('formular').innerHTML = this.responseText;
    }; 
    xhttp.open("GET", "http://localhost/temaAJAX/ex3/loadForm.php?index="+id, true);
    xhttp.send(null);
}

function ableButon(){
    document.getElementById('butonSubmit').disabled = false;
}

function saveForm(){
    if(true == confirm("Are you sure you want to update this field?")){
        var nume = document.getElementById("nume").value;
        var prenume = document.getElementById("prenume").value;
        var adresa = document.getElementById("adresa").value;

        console.log(nume,prenume,adresa,previousValue)

        var xhttp;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange=function(){
          if(this.readyState == 4 && this.status == 200){
            confirm("Update completed");
          }
        };
        xhttp.open("GET", "http://localhost/temaAJAX/ex3/saveForm.php?index="+previousValue+"&nume="+nume+"&prenume="+prenume+"&adresa="+adresa, true);
        xhttp.send(null);

      }
}