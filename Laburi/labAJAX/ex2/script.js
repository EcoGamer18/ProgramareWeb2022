let index = 0;

function prev() {
  index--;
  serverLoad();
}

function next() {
  index++;
  serverLoad();
}

function serverLoad() {
  var xhttp;
  xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.body.innerHTML = this.responseText;
  };
  xhttp.open(
    "GET",
    "http://localhost/temaAJAX/ex2/server.php?index=" + index,
    true
  );
  xhttp.send(null);
}
