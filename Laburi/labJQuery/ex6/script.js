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
      var list = $("table").find("td");
      var pozx = 0, pozy = 0;
      for(var i = 0; i < list.length; i ++){
        if($(list[i]).text() == ""){
          pozx = i%n;
          pozy = Math.floor(i/n);
          break;
        }
      }

      var first;
      var second;
    
      //console.log(pozx,pozy);  

      if (e.keyCode == '38' && pozy > 0) {
          // up
          first = $("#e"+((pozy-1)*n+pozx));
          second = $("#e"+(pozy*n+pozx));
          var aux = first.html();
          first.html(second.html());
          second.html(aux);
      }
      else if (e.keyCode == '40' && pozy < n-1) {
          // down
          first = $("#e"+((pozy+1)*n+pozx));
          second = $("#e"+(pozy*n+pozx));
          var aux = first.html();
          first.html(second.html());
          second.html(aux);
      }
      else if (e.keyCode == '37' && pozx > 0) {
          // left
          first = $("#e"+(pozy*n+pozx-1));
          second = $("#e"+(pozy*n+pozx));
          var aux = first.html();
          first.html(second.html());
          second.html(aux);
      }
      else if (e.keyCode == '39' && pozx < n-1) {
          // right
          first = $("#e"+(pozy*n+pozx+1));
          second = $("#e"+(pozy*n+pozx));
          var aux = first.html();
          first.html(second.html());
          second.html(aux);
      }

      var count = 0;
      $("table tr").each(function(i, v){
        $(this).children('td').each(function(ii, vv){
            if(i*n + ii + 1 == $(this).text()){
              count++;
            }
        }); 
      })

      won = (count == n*n - 1)?true:false;
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

  var content = "<table>";

    for(i = 0; i < n ; i++){
      content += "<tr>";
      for(j = 0; j < n ; j++){
        content += "<td id=e"+(i*n+j)+">";
        switch (a[i*n+j]){
          case 0:
            content +="";
            break;
          default:
            content += a[i*n+j];
        }
        content += "</td>";
      }
      content += "</tr>";
    }

    content += "</table>";

    $("body").append(content); 
  
    $(document).keydown(function(e){game(e)});

});