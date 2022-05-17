function showRoutes(str) {
    var xhttp;
    if (str == "") {
      document.getElementById('rezultate').innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById('rezultate').innerHTML = this.responseText;
    }; 
    xhttp.open("GET", "http://localhost/temaAJAX/ex1/sosire.php?q="+str, true);
    xhttp.send(null);
  }

  function init(){
    xhttp = new XMLHttpRequest();
    const xmlhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.body.insertAdjacentHTML('beforebegin', this.responseText);
    }
    xhttp.open("GET", "http://localhost/temaAJAX/ex1/plecare.php", true);
    xhttp.send(null);

    document.body.insertAdjacentHTML('beforeend','<ul id = \"rezultate\"></ul>');
  }