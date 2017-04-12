/**
 * Created by albert on 12.04.17.
 */
$.getJSON( "employee.json", function( data ) {
    var items = [];
    $.each( data, function( key, val ) {
        items.push( "<li id='" + key + "'>" + val + "</li>" );
    });

    $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
    }).appendTo( "body" );
});

// $.getJSON( "employee.json", function (data) {
//    var items = [];
//    var i = 0;
//    $.each( data, function (key, val) {
//        items.push(i + ")" + key + "=" + val);
//         i++;
//    });
//        console.log(items);
//
// });

$.getJSON('employee.json', function(jd) {
    $.each(jd, function (key, val) {
       console.log(key + ":" + val);
    });
});