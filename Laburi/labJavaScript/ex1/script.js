
function moveLeft() {
    var lista1 = document.getElementById("lista1");
    var selItem = lista1.selectedIndex;

    if (selItem == -1) {
        window.alert("You must first select an item on the left side.")
    } else {
        var lista2 = document.getElementById("lista2");
        var newOption = lista1[selItem].cloneNode(true);

        lista1.removeChild(lista1[selItem]);
        lista2.appendChild(newOption);
    }
}

function moveRight() {
    var lista2 = document.getElementById("lista2");
    var selItem = lista2.selectedIndex;

    if (selItem == -1) {
        window.alert("You must first select an item on the right side.")
    } else {
        var lista1 = document.getElementById("lista1");
        var newOption = lista2[selItem].cloneNode(true);

        lista2.removeChild(lista2[selItem]);
        lista1.appendChild(newOption);
    }
}