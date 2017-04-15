/**
 * Created by albert on 14.04.17.
 */



// $(document).ready(function() {
//
//     $("#przycisk").click(function(event){
//         $.get(
//             "result.php",
//             { name: "Zara" },
//             function(data) {
//                 $('#info').html(data);
//             }
//         );
//     });
//
// });

$(document).ready(function() {
    $("#przycisk").click(function(){
        var numer = ($("#number").val()) - 1;
        $.getJSON('products.json', function(jd) {
            console.log("key: " + jd[numer].id);
             $("#info").empty();
             $("#info").append("ID: " + jd[numer].id + "<br>");
             $("#info").append("Name: " + jd[numer].name + "<br>");
             $("#info").append("Price: " + jd[numer].price + "<br>");
             $("#info").append("In stock: " + jd[numer].instock + "<br>");
        });

    });
});

// $.getJSON('products.json', function(jd) {
//         console.log(jd);
// });