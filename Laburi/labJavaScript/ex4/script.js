const compare = (a, b) => {
    if (typeof a === 'string') {
        return a.localeCompare(b);
    }

    return a - b;
}

const clearTable = () => {
    table.querySelectorAll("tr > td").forEach(node => node.remove());
}

const updateTable = () => {
    clearTable();
    for (const row of rows) {
        let tr = document.createElement("tr");
        table.appendChild(tr);

        for (const data of Object.values(row)) {
            let td = document.createElement("td");
            td.textContent = data;
            tr.appendChild(td);
        }
    }
}

const updateArrow = (text, currentHeader) => {
    table.querySelectorAll("tr > th").forEach(header => {
        if (header === currentHeader) {
            currentHeader.textContent = text + " ▼";
        } else {
            header.textContent = header.textContent.replace(" ▼", "");
        }
    });
}

const table = document.querySelector("#tableData");

const rows = [
    { fructe: 'pere', pret: 4, cantitate: 6 },
    { fructe: 'mere', pret: 3, cantitate: 8 },
    { fructe: 'struguri', pret: 10, cantitate: 2 },
    { fructe: 'pepene', pret: 8, cantitate: 5 },
    { fructe: 'gutui', pret: 7, cantitate: 10 },
]

let tr = document.createElement("tr");
table.appendChild(tr);

const row = rows[0];

for (const key of Object.keys(row)) {
    let th = document.createElement("th");
    th.textContent = key;

    th.addEventListener("click", (e) => {
        updateArrow(key, th);
        rows.sort(((a, b) => compare(a[key], b[key])));
        updateTable();
    });

    tr.append(th);
}

updateTable();