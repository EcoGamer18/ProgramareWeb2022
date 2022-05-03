$(document).ready(function(){
  const n = 2;
  var won = false;

  const shuffle = (array) => {
    var tmp, current, top = array.length;
    if(top) while(--top) {
      current = Math.floor(Math.random() * (top + 1));
      tmp = array[current];
      array[current] = array[top];
      array[top] = tmp;
    }
    return array;
  }

  const game = (e) => {
    
    if(!won){
        e = e || window.event;
      var list = document.getElementsByTagName("td");
      var pozx = 0, pozy = 0;
      for(var i = 0; i < list.length; i ++){
        if(list[i].innerHTML == 0 || list[i].innerHTML == ''){
          pozx = i%n;
          pozy = Math.floor(i/n);
        }
      }
    
      if (e.keyCode == '38' && pozy > 0) {
          // up
          [list[pozy*n+pozx].innerHTML, list[(pozy-1)*n+pozx].innerHTML] = [list[(pozy-1)*n+pozx].innerHTML, list[pozy*n+pozx].innerHTML];
      }
      else if (e.keyCode == '40' && pozy < n-1) {
          // down
          [list[pozy*n+pozx].innerHTML, list[(pozy+1)*n+pozx].innerHTML] = [list[(pozy+1)*n+pozx].innerHTML, list[pozy*n+pozx].innerHTML];
      }
      else if (e.keyCode == '37' && pozx > 0) {
          // left
          [list[pozy*n+pozx].innerHTML, list[pozy*n+(pozx-1)].innerHTML] = [list[pozy*n+(pozx-1)].innerHTML, list[pozy*n+pozx].innerHTML];
      }
      else if (e.keyCode == '39' && pozx < n-1) {
          // right
          [list[pozy*n+pozx].innerHTML, list[pozy*n+pozx+1].innerHTML] = [list[pozy*n+pozx+1].innerHTML, list[pozy*n+pozx].innerHTML];
      }

      
      var list = document.getElementsByTagName("td");
      var pozx = 0, pozy = 0;
      var const1 = [], const2 =[];
      for(var i = 0; i < list.length; i ++){
        const1[i] = list[i].innerHTML;
        const2[i] = i+1;

        if(list[i].innerHTML != 0 && list[i].innerHTML != ''){
          const1[i] = parseInt(list[i].innerHTML);
        }
      }
      const2[list.length - 1] = "";

      won = (const1.toString() == const2.toString())?true:false;
      if(won){
        var para = $("<p></p>").text("You won!"); 
        $("body").append(para); 
      }
    }
  }


  //Start document.ready
  var a=[];
  for (i = 0;i < n*n; i++ ) {
    a[i]=i;
  }
  a = shuffle(a);

  const tabela = document.createElement('table');
    for(i = 0; i < n ; i++){
      const tr = tabela.insertRow();
      for(j = 0; j < n ; j++){
        const td = tr.insertCell();
        switch (a[i*n+j]){
          case 0:
            td.appendChild(document.createTextNode(""));
            break;
          default:
            td.appendChild(document.createTextNode(a[i*n+j]));
        }
      }
    }

    const body = document.body;
    body.appendChild(tabela);
  
  
    $(document).keydown(function(e){game(e)});

});