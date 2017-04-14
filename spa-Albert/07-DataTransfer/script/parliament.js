/**
 * Created by albert on 14.04.17.
 */

$.getJSON("https://api-v3.mojepanstwo.pl/dane/poslowie.json", function (jd) {
    var poslowie = jd.Dataobject;
    var lista = [];
    jd.Dataobject.forEach(function (item) {
         // console.log(item.data['ludzie.nazwa']);
         lista.push(item.data['ludzie.nazwa']);
    });
    // console.log(lista.length);
    console.log(lista);
    $("#lista").append(lista.join('<br>'));
    console.log(jd.Dataobject[1]);
});

