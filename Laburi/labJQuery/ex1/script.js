$(document).ready(function(){

    $("#lista1").dblclick(function(){
        var value = $('#lista1 option:selected').text();
        $("#lista2").append($('<option/>').text(value));
        $("#lista1 option:selected").remove();
    });


    $("#lista2").dblclick(function(){
        var value = $('#lista2 option:selected').text();
        $("#lista1").append($('<option/>').text(value));
        $("#lista2 option:selected").remove();
    });

}); 
