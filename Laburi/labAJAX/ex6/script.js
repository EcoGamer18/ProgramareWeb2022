$(document).ready(function () {
  loadProducator();
  loadCapacitate();
  loadMemorie();
  loadProcesor();
  loadPlaca();
  function loadProducator() {
    xhttp = new XMLHttpRequest();
    const xmlhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      $("#producator").append(this.responseText);
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex6/loadProducator.php", true);
    xhttp.send(null);
  }

  function loadProcesor() {
    xhttp = new XMLHttpRequest();
    const xmlhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      $("#procesor").append(this.responseText);
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex6/loadProcesor.php", true);
    xhttp.send(null);
  }

  function loadMemorie() {
    xhttp = new XMLHttpRequest();
    const xmlhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      $("#memorie").append(this.responseText);
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex6/loadMemorie.php", true);
    xhttp.send(null);
  }

  function loadCapacitate() {
    xhttp = new XMLHttpRequest();
    const xmlhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      $("#capacitate").append(this.responseText);
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex6/loadCapacitate.php", true);
    xhttp.send(null);
  }

  function loadPlaca() {
    xhttp = new XMLHttpRequest();
    const xmlhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      $("#placa").append(this.responseText);
    };
    xhttp.open("GET", "http://localhost/temaAJAX/ex6/loadPlaca.php", true);
    xhttp.send(null);
  }
});
