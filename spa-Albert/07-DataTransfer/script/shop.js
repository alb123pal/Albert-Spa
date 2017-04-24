/**
 * Created by albert on 24.04.17.
 */
$(document).ready(function () {
    var myID = 0;
   $("#nastepny").click(function () {
       $.getJSON("ebuwie/buty.json", function (data) {
         $("#marka").empty();
         $("#cena").empty();
         $("#seria").empty();
         $("#marka").append("Marka: " + data[myID].marka);
         $("#cena").append("Marka: " + data[myID].price);
         $("#seria").append("Seria: " + data[myID].seria);

         $('img').attr('src', function() {
            var lokalizacja = data[myID].zdjecie;
            return this.src = lokalizacja;
        });
           myID++;
           if ( myID === data.length){
               myID = 0;
           }
    });


   });
    $("#poprzedni").click(function () {
        $.getJSON("ebuwie/buty.json", function (data) {
            $("#marka").empty();
            $("#cena").empty();
            $("#seria").empty();
            $("#marka").append("Marka: " + data[myID].marka);
            $("#cena").append("Marka: " + data[myID].price);
            $("#seria").append("Seria: " + data[myID].seria);

            $('img').attr('src', function() {
                var lokalizacja = data[myID].zdjecie;
                return this.src = lokalizacja;
            });

            console.log(myID);
            if ( myID === 0){
                myID = data.length;
            }
            myID--;
        });


    });
});





