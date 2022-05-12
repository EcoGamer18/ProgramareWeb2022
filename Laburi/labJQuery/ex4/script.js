$(document).ready(function(){
    var clicked = 0;

    const compare = (a, b) => {
        if (typeof a === 'string') {
            return a.localeCompare(b);
        }

        return a - b;
    }

    const compareNot = (a, b) => {
        if (typeof b === 'string') {
            return b.localeCompare(a);
        }

        return b-a;
    }

    const clearTable = () => {
        $("#tableData td").remove();
    }

    const updateTable = () => {
        clearTable();
        for (const row of rows) {
            let tr = $("<tr/>");
            table.append(tr);

            for (const data of Object.values(row)) {
                let td = $("<td/>");
                td.text(data);
                tr.append(td);
            }
        }
    }

    const updateArrowDown = (text, currentHeader) => {
        $("#tableData tr th").each(function() {
            if ($(this).text() == currentHeader) {
                $(this).html(text + " ▼");
            } else {
                $(this).text().replace(" ▼", "");
            }
        });
    }

    const updateArrowUp = (text, currentHeader) => {
        $("#tableData tr th").each(function(){
            if ($(this).text() == currentHeader) {
                $(this).html( text + " ▲");
            } else {
                $(this).text().replace(" ▲", "");
            }
        });
    }

    const table = $("#tableData");

    const rows = [
        { fructe: 'pere', pret: 4, cantitate: 6 },
        { fructe: 'mere', pret: 3, cantitate: 8 },
        { fructe: 'struguri', pret: 10, cantitate: 2 },
        { fructe: 'pepene', pret: 8, cantitate: 5 },
        { fructe: 'gutui', pret: 7, cantitate: 10 },
    ]

    const row = rows[0];

    let tr = $("<tr/>");
    table.append(tr);

    for (const key of Object.keys(row)) {
        let th = $("<th/>");
        th.text(key);

        $(th).click(function(e){  
            if(clicked == 0){
                console.log("clicked down");
                updateArrowDown(key, th);
                rows.sort(((a, b) => compare(a[key], b[key])));
                updateTable();
                clicked++;
            }
            else
            if(clicked == 1){
                console.log("clicked up");
                updateArrowUp(key, th);
                rows.sort(((a, b) => compareNot(a[key], b[key])));
                updateTable();
                clicked--;
            }
        });

        tr.append(th);
    }

    updateTable();
});