function showRoutes(str) {
    var xhttp;
    if (str == "") {
      document.getElementById("sosire").innerHTML = "";
      return;
    }
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("sosire").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "http://localhost/"+str, true);
    xhttp.send(null);
  }