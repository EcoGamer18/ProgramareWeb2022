$(document).ready(function(){
    var clicked = new Array();
    var count = 0;
    $("table tr th").each(function(i, v){
        count++;
    })

    var clicked = new Array(count).fill(0);

    $("th").click(function(){
        var header = Array();

        var id = $(this).text();

        var criteria = -1;

        $("table tr th").each(function(i, v){
            header[i] = $(this).text();
        })

        for(let i = 0 ; i < header.length ;i++){
            if(id.localeCompare(header[i]) == 0){
                criteria = i;
                break;
            }
        }

        var data = Array();

        $("table tr").each(function(i, v){
            data[i] = Array();
            $(this).children('td').each(function(ii, vv){
                data[i][ii] = $(this).text();
            }); 
        })
        
        if(clicked[criteria] == 0){
            let sorted = false;
            while (!sorted) {
                sorted = true;
                for (let i = 0; i < data[criteria].length; i++) {
                    let el1 = data[criteria][i];
                    for (let j = i + 1; j < data[criteria].length; j++) {
                        let el2 = data[criteria][j];
                        if (!isNaN(el1)) {
                            if (parseInt(el1) > parseInt(el2)) {
                                for(let k = 0;k < data.length; k++){
                                    [data[k][i], data[k][j]] = [data[k][j], data[k][i]];
                                }
                                sorted = false;
                            }
                        }
                        else {
                            if (el1 > el2) {
                                for(let k = 0;k < data.length; k++){
                                    [data[k][i], data[k][j]] = [data[k][j], data[k][i]];
                                }
                                sorted = false;
                            }
                        }
                    }
                }
            }     
            clicked[criteria]++;  
        }   
        else{
            let sorted = false;
            while (!sorted) {
                sorted = true;
                for (let i = 0; i < data[criteria].length; i++) {
                    let el1 = data[criteria][i];
                    for (let j = i + 1; j < data[criteria].length; j++) {
                        let el2 = data[criteria][j];
                        if (!isNaN(el1)) {
                            if (parseInt(el1) < parseInt(el2)) {
                                for(let k = 0;k < data.length; k++){
                                    [data[k][i], data[k][j]] = [data[k][j], data[k][i]];
                                }
                                sorted = false;
                            }
                        }
                        else {
                            if (el1 < el2) {
                                for(let k = 0;k < data.length; k++){
                                    [data[k][i], data[k][j]] = [data[k][j], data[k][i]];
                                }
                                sorted = false;
                            }
                        }
                    }
                }
            }        
            clicked[criteria]--;   
        }

        $("table tr").each(function(i, v){
            $(this).children('td').each(function(ii, vv){
                $(this).text(data[i][ii]);
            }); 
        })
    });

});