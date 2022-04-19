const sortColumn = (columnHeader) =>{
    var sortCriteria = columnHeader.innerHTML;
    var table = columnHeader.parentNode.parentNode.parentNode;
    let toSort = new Array(table.rows[0].length);
    for (var i = 0, row; row = table.rows[i]; i++) {
        if (row.cells[0].innerHTML == sortCriteria) {
            toSort = [].slice.call(row.cells);
            toSort = toSort.slice(1, toSort.length);
        }
    }
    var indexArray = [...Array(toSort.length).keys()];

    // Bubblesort ca sa tinem minte si indecsi de la row uri si astfel pastram si informatia
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < toSort.length; i++) {
            let el1 = toSort[i].innerHTML;
            for (let j = i + 1; j < toSort.length; j++) {
                let el2 = toSort[j].innerHTML;
                if (!isNaN(el1)) {
                    if (parseInt(el1) > parseInt(el2)) {
                        [toSort[i], toSort[j]] = [toSort[j], toSort[i]];
                        [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
                        sorted = false;
                    }
                }
                else {
                    if (el1 > el2) {
                        [toSort[i], toSort[j]] = [toSort[j], toSort[i]];
                        [indexArray[i], indexArray[j]] = [indexArray[j], indexArray[i]];
                        sorted = false;
                    }
                }
            }
        }
    }

    for (var i = 0, row; row = table.rows[i]; i++) {
        let sortRow = new Array(row.cells.length);
        for (var j = 1; j < row.cells.length; j++) {
            sortRow[j] = row.cells[indexArray[j - 1] + 1].innerHTML;
        }
        for (var j = 1; j < sortRow.length; j++) {
            row.cells[j].innerHTML = sortRow[j];
        }
    }
}
