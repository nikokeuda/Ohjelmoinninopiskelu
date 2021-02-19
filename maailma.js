function kaanna()
 {
    var muumi = document.getElementById('teksti').value;
    var sananPituus = muumi.length;
    var uusiSana = '';
    for(var x = sananPituus-1; x >= 0; x--)
    {
      uusiSana = uusiSana + muumi[x];
    }
    alert(uusiSana);
    document.getElementById('vastaus').innerHTML = uusiSana;
   }
