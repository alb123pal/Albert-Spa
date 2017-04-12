/**
 * Created by albert on 13.04.17.
 */

$(document).ready(function () {

    $.getJSON("poland.json", function (data) {
        $("p:first").append(data.name.native.pol.common);
        $("p:eq(1)").append(data.capital);
        // $("p:eq(2)").append(data.borders.join(', ' ));


        data.borders.forEach(function(item){
            $("p:eq(2)").html($("p:eq(2)").html() + item + " ");
        });
    });

});

