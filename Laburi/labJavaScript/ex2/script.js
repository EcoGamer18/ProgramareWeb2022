function onlyLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
  }

function calcDate(dob) {
    var month_diff = Date.now() - new Date(dob).getTime();    
    console.log(month_diff);
    var age_dt = new Date(month_diff);        
    var year = age_dt.getUTCFullYear();   
    var age = Math.abs(year - 1970);  

    return age;
}


function verifyData() {
    var errors = "";

    var nume = document.getElementById('nume').value;

    if(nume == " " || onlyLetters(nume) == false || nume == null){
        document.getElementById('nume').style.border = "2px solid red";
        errors += "Numele dat nu functioneaza!\n";
    }
    else{
        document.getElementById('nume').style.border = "1px solid black";
    }


    var varsta = parseInt(document.getElementById('varsta').value);
    var dataNasterii = document.getElementById('dataNasterii').value;
    var varstaCalculata = parseInt(calcDate(dataNasterii));


    if(varsta < 0 || varstaCalculata != varsta || varsta == null || dataNasterii == null){
        document.getElementById('varsta').style.border = "2px solid red";
        document.getElementById('dataNasterii').style.border = "2px solid red";
        errors += "Varsta calculata dupa data nasterii nu se sincronizeaza cu varsta introdusa!\n";
    }
    else{
        document.getElementById('varsta').style.border = "1px solid black";
        document.getElementById('dataNasterii').style.border = "1px solid black";
    }

    var email = document.getElementById('adresaEmail').value;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email == null || regexEmail.test(email) == false){
        document.getElementById('adresaEmail').style.border = "2px solid red";
        errors += "Emailul dat nu functioneaza!\n";
    }
    else{
        document.getElementById('adresaEmail').style.border = "1px solid black";
    }

    if(errors != ""){
        alert(errors);
    }
    else{
        alert("Datele sunt completate corect");
    }

}