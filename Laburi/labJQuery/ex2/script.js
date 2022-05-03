// $(document).ready(function() {
//     $("#formular").validate({
//     nume: {
//     required: true,
//     minlength: 3
//     },
//     varsta: {
//     required: true,
//     number: true,
//     min: 18
//     },
//     email: {
//     required: true,
//     email: true
//     },
//     errorClass: "error fail-alert",
//     validClass: "valid success-alert"
//     });
//     });

$(document).ready(function(){
    var err1 = $("<p class='one'></p>").text("Numele dat nu functioneaza!"); 
    $("body").append(err1); 
    $("p.one").css("color", "red");
    var err2 = $("<p class='two'></p>").text("Varsta calculata dupa data nasterii nu se sincronizeaza cu varsta introdusa!"); 
    $("body").append(err2); 
    $("p.two").css("color", "red");
    var err3 = $("<p class='three'></p>").text("Emailul dat nu functioneaza!"); 
    $("body").append(err3); 
    $("p.three").css("color", "red");
    var good = $("<p class='four'></p>").text("Datele sunt completate corect"); 
    $("body").append(good); 
    $("p.four").css("color", "green");
    
    $("p.one").hide(); 
    $("p.two").hide(); 
    $("p.three").hide(); 
    $("p.four").hide();

    function onlyLetters($str) {
        return /^[a-zA-Z]+$/.test($str);
      }
    
    function calcDate($dob) {
        var month_diff = Date.now() - new Date($dob).getTime();    
        var age_dt = new Date(month_diff);        
        var year = age_dt.getUTCFullYear();   
        var age = Math.abs(year - 1970);  
    
        return age;
    }
    

    $("#formular").submit(function(e){
        e.preventDefault();
        let errs = false;


        if($("#nume").val() == " " || onlyLetters($("#nume").val()) == false || $("#nume").val() == null){
            $("#nume").css("border","2px solid red");
            $("p.one").show();
            errs = true;
        }
        else{
            $("#nume").css("border","1px solid black");
            $("p.one").hide();
        }
    

        var varstaCalculata = parseInt(calcDate($("#dataNaterii").val()));
    
    
        if($("#varsta").val() < 0 || varstaCalculata != $("#varsta").val() || $("#varsta").val() == null || $("#dataNasterii").val() == null){
            $("#varsta").css("border","2px solid red");
            $("#dataNasterii").css("border","2px solid red");
            $("p.two").show();
            errs = true;
        }
        else{
            $("#varsta").css("border","1px solid black");
            $("#dataNasterii").css("border","1px solid black");
            $("p.two").hide();
        }
    
        var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if($("#adresaEmail").val() == null || regexEmail.test($("#adresaEmail").val()) == false){
            $("#adresaEmail").css("border","2px solid red");
            $("p.three").show();
            errs = true;
        }
        else{
            $("#adresaEmail").css("border","1px solid black");
            $("p.three").hide();
        }

        if(errs == false){
            $("p.four").show()
        }
        else{
            $("p.four").hide();
        }

    });
});
