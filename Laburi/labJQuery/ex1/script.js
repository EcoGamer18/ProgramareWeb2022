$(document).ready(function(){

    $("#lista1").dblclick(function(){

        var obj = document.createElement("option");
        
        obj.text = document.getElementById('lista1').options[document.getElementById('lista1').selectedIndex].text;
        $("#lista2").append(obj);
        $("#lista1 option:selected").remove();
    });


    $("#lista2").dblclick(function(){
        var obj = document.createElement("option");
        
        obj.text = document.getElementById('lista2').options[document.getElementById('lista2').selectedIndex].text;
        $("#lista1").append(obj);
        $("#lista2 option:selected").remove();
    });

}); 
